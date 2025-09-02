import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// تسجيل Service Worker للPWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('تم تسجيل SW بنجاح:', registration.scope);
      })
      .catch((error) => {
        console.log('فشل تسجيل SW:', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
