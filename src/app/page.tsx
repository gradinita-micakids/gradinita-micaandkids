import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ZigZag from "@/components/ZigZag";
import GalleryStrip from "@/components/GalleryStrip";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ZigZag />
      <GalleryStrip />
      <Testimonials />
      <CTA />
    </>
  );
}
