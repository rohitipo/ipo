import { useEffect, useState } from "react";
import OneSignal from "react-onesignal";
import { motion, AnimatePresence } from "framer-motion";

const OneSignalProvider = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const setupOneSignal = async () => {
      await OneSignal.init({
        appId: process.env.NEXT_PUBLIC_os_appId || '',
        safari_web_id: process.env.NEXT_PUBLIC_os_safari_web_id,
        notifyButton: { enable: false },
        allowLocalhostAsSecureOrigin: true,
      });
  
      console.log("Checking subscription status...");
      const subscribed = await OneSignal.User.PushSubscription.optedIn;
      console.log("Subscription status:", subscribed);
      setIsSubscribed(subscribed ?? false);
  
      if (!subscribed) {
        console.log("Delaying popup display...");
        setTimeout(() => {
          setShowPopup(true);
        }, 3000);
      }
    };
  
    setupOneSignal();
  }, []);
  

  const handleSubscribe = async () => {
    await OneSignal.Notifications.requestPermission();
    setIsSubscribed(OneSignal.User.PushSubscription.optedIn ?? false);
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 px-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-[99999]">
    <AnimatePresence>
      {!isSubscribed && showPopup && (
        <motion.div
          className="p-5 animate-bounce hover:animate-none ease-in-out bg-blue-600 text-white rounded-lg shadow-2xl border border-white text-center"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-lg sm:text-xl font-bold">📢 Stay Updated on IPOs!</h2>
          <p className="text-sm sm:text-base mt-2">
            Subscribe now to get real-time IPO news & alerts.
          </p>
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
  
  );
};

export default OneSignalProvider;
