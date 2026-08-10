"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_ID = "G-MJEEM8GS5W";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      setAnalytics(true);
    } else if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    setAnalytics(true);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <>
      {analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 bg-green-dark text-white shadow-2xl animate-slide-up">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <p className="text-sm leading-relaxed flex-1">
              Folosim cookie-uri pentru a îmbunătăți experiența ta pe site și pentru
              a analiza traficul. Vezi{" "}
              <Link href="/privacy" className="underline hover:text-yellow transition-colors">
                politica de confidențialitate
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2.5 text-sm font-semibold text-white border border-white/40 rounded-full hover:bg-white/10 transition-colors"
              >
                Respinge
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 text-sm font-bold bg-yellow text-green-dark rounded-full hover:bg-orange-light transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
