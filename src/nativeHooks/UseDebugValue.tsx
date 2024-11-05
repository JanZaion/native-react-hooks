import { useState, useEffect, useDebugValue } from "react";

// useDebugValue is a custom hook that allows to
// display a label for custom hooks in React DevTools.
const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useDebugValue(isOnline ? "Online 🟢" : "Offline 🔴");

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export const UseDebugValue = () => {
  const isOnline = useOnlineStatus();

  return <div>User is: {isOnline ? "Online" : "Offline"}</div>;
};
