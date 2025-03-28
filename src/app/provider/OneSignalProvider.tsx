"use client"

import { useEffect, useState, useRef } from "react"
import OneSignal from "react-onesignal"
import { motion, AnimatePresence } from "framer-motion"

const OneSignalProvider = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const initAttempted = useRef(false)

  useEffect(() => {
    // Prevent multiple initialization attempts
    if (initAttempted.current) return
    initAttempted.current = true

    const setupOneSignal = async () => {
      try {
        // Check if OneSignal is supported in this browser
        const isSupportedBrowser = checkBrowserSupport()

        if (!isSupportedBrowser) {
          console.log("OneSignal: Browser not fully supported")
          return
        }

        // Make sure we have the app ID
        const appId = process.env.NEXT_PUBLIC_os_appId
        if (!appId) {
          console.error("OneSignal: Missing app ID")
          return
        }

        // Initialize OneSignal
        await OneSignal.init({
          appId: appId,
          safari_web_id: process.env.NEXT_PUBLIC_os_safari_web_id,
          notifyButton: { enable: false },
          allowLocalhostAsSecureOrigin: true,
        })

        setIsInitialized(true)

        // Check subscription status after a longer delay to ensure OneSignal is fully initialized
        setTimeout(() => {
          try {
            const subscribed = OneSignal.User.PushSubscription.optedIn ?? false
            console.log("OneSignal: Subscription status checked", subscribed)
            setIsSubscribed(subscribed)

            if (!subscribed) {
              setShowPopup(true)
            }
          } catch (error) {
            console.error("OneSignal: Error checking subscription status", error)
          }
        }, 5000) // Increased timeout to 5 seconds
      } catch (error) {
        console.error("OneSignal: Setup failed", error)
      }
    }

    setupOneSignal()

    // Cleanup function
    return () => {
      // Any cleanup needed
    }
  }, [])

  // Helper function to check browser support
  const checkBrowserSupport = () => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return false

    // Check for service worker support (required for push notifications)
    const hasServiceWorkerSupport = "serviceWorker" in navigator

    // Check for Push API support
    const hasPushSupport = "PushManager" in window

    // iOS Safari specific check - older versions don't support web push
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    // iOS Safari only supports web push in iOS 16.4+
    if (isIOS && isSafari) {
      // This is a basic check - for production you might want a more robust version detection
      console.log("iOS Safari detected - web push support may be limited")
    }

    return hasServiceWorkerSupport && hasPushSupport
  }

  const handleSubscribe = async () => {
    if (!isInitialized) {
      console.log("OneSignal not initialized yet")
      return
    }

    try {
      await OneSignal.Notifications.requestPermission()
      const newStatus = OneSignal.User.PushSubscription.optedIn ?? false
      console.log("Subscription status after request:", newStatus)
      setIsSubscribed(newStatus)
      setShowPopup(false)
    } catch (error) {
      console.error("Error requesting notification permission:", error)
    }
  }

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-[9999]">
      <AnimatePresence>
        {!isSubscribed && showPopup && (
          <motion.div
            className="p-5 bg-blue-600 text-white rounded-lg shadow-2xl border border-white text-center"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h2 className="text-lg sm:text-xl font-bold">📢 Stay Updated on IPOs!</h2>
            <p className="text-sm sm:text-base mt-2">Subscribe now to get real-time IPO news & alerts.</p>
            <div className="mt-4 flex justify-center gap-3 flex-wrap">
              <button
                className="bg-white text-blue-600 px-3 sm:px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all"
                onClick={handleSubscribe}
              >
                ✅ Subscribe
              </button>
              <button
                className="bg-white text-red-500 px-3 sm:px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all"
                onClick={handleClose}
              >
                ❌ Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OneSignalProvider

