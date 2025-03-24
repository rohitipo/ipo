'use client'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Script from "next/script";
import OneSignalProvider from "./provider/OneSignalProvider";

const GA_TRACKING_ID = "G-016DZQ983J";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating a loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);


  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
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
      </head>
     
      <body
      >{isLoading ? (
        <Loader />
      ) : (
        <>
         <OneSignalProvider />
        {children}
        <Toaster/>
        </>
      )}
      </body>
    </html>
  );
}
