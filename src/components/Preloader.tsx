"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-700 pointer-events-none ${
        loading ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: loading ? "flex" : "none" }}
    >
      <div className="relative w-40 h-40 mb-6">
        <video
          src="/videos/micabun.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain animate-float"
        />
      </div>
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-green-light animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-3 h-3 rounded-full bg-yellow animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-3 h-3 rounded-full bg-orange-light animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
      <p className="mt-4 font-display text-lg text-green-dark">Mica and Kids</p>
    </div>
  );
}
