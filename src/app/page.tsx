import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ZigZag from "@/components/ZigZag";
import GalleryStrip from "@/components/GalleryStrip";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* Banner mica2 — deasupra ZigZag */}
      <div className="w-full flex justify-center bg-cream/80 py-4 opacity-80">
        <div className="relative w-full max-w-6xl h-[800px] md:h-[480px]">
          <Image
            src="/images/banners/mica2.webp"
            alt="Mica and Kids — Învățare prin joacă în aer liber"
            fill
            priority
            className="object-contain md:hidden"
          />
          <Image
            src="/images/banners/mica2-a-v2.webp"
            alt="Mica and Kids — Învățare prin joacă în aer liber"
            fill
            priority
            className="hidden md:block object-contain"
          />
        </div>
      </div>
      <ZigZag />
      <GalleryStrip />
      <Testimonials />
      <CTA />
    </>
  );
}
