'use client'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Script from "next/script";
import OneSignalProvider from "./provider/OneSignalProvider";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [gaLoaded, setGaLoaded] = useState(false);

  useEffect(() => {
    // Simulating a loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const checkGA = () => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        setGaLoaded(true);
      } else {
        setTimeout(checkGA, 500); // Retry every 500ms
      }
    };
    checkGA();
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          onLoad={() => setGaLoaded(true)}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

      {adsenseClientId && (
                    <Script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
                        crossOrigin="anonymous"
                    ></Script>
                )}
      </head>
     
      <body
      >{isLoading ? (
        <Loader />
      ) : (
        <>
           {gaLoaded && <OneSignalProvider />}
            {children}
            <Toaster/>
        </>
      )}
      </body>
    </html>
  );
}
