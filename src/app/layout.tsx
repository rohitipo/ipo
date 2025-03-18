'use client'
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";



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
      <body
      >{isLoading ? (
        <Loader />
      ) : (
        <>
        {children}
        <Toaster/>
        </>
      )}
      </body>
    </html>
  );
}
