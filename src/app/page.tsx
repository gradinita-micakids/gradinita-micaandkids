import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ZigZag from "@/components/ZigZag";
import GalleryStrip from "@/components/GalleryStrip";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import FAQJsonLd from "@/components/FAQJsonLd";
import Image from "next/image";

export default function Home() {
  const preschoolJsonLd = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: "Grădiniță Popești Leordeni — Mica and Kids | Creșă & Afterschool",
    image: "https://www.gradinitamicaandkids.ro/images/mascota/albinuta.webp",
    url: "https://www.gradinitamicaandkids.ro",
    telephone: "+40740467056",
    email: "office@gradinitamicaandkids.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Sfântul Gheorghe 5B",
      addressLocality: "Popești Leordeni",
      addressRegion: "Ilfov",
      postalCode: "077160",
      addressCountry: "RO",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    priceRange: "2000-2500 RON",
    description:
      "Grădiniță Popești Leordeni — Mica and Kids. Creșă, grădiniță, afterschool, tabere și excursii. Învățare prin joacă, natură și creativitate în Ilfov.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.371,
      longitude: 26.156,
    },
    areaServed: {
      "@type": "City",
      name: "Popești Leordeni, Ilfov",
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Strada+Sfantul+Gheorghe+5B+Popesti+Leordeni+Ilfov",
    sameAs: ["https://www.instagram.com/micaandkids/"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "10",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Maria P." },
        datePublished: "2025-09-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Cea mai bună decizie pe care am luat-o pentru copilul meu. Echipa extraordinară, curte mare, activități în aer liber în fiecare zi. Recomand cu drag!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andrei G." },
        datePublished: "2025-08-22",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Grădiniță excelentă în Popești Leordeni. Copilul meu a învățat să socializeze, să fie independent și să iubească natura. Mâncarea gătită pe loc e un mare plus.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Elena R." },
        datePublished: "2025-07-10",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Mica and Kids a transformat complet experiența noastră cu grădinița. Personal calificat, empatie reală și o curte cu animale și grădină. Copilul meu abia așteaptă să meargă!",
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mica and Kids — Grădiniță Popești Leordeni",
    url: "https://www.gradinitamicaandkids.ro",
    inLanguage: "ro-RO",
    description:
      "Grădiniță, creșă și afterschool în Popești Leordeni, Ilfov. Învățare prin joacă, natură și creativitate.",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mica and Kids",
    url: "https://www.gradinitamicaandkids.ro",
    logo: "https://www.gradinitamicaandkids.ro/images/mascota/albinuta.webp",
    founders: [
      {
        "@type": "Person",
        name: "Michelle",
      },
      {
        "@type": "Person",
        name: "Carmen",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Sfântul Gheorghe 5B",
      addressLocality: "Popești Leordeni",
      addressRegion: "Ilfov",
      postalCode: "077160",
      addressCountry: "RO",
    },
    telephone: "+40740467056",
    email: "office@gradinitamicaandkids.ro",
    sameAs: ["https://www.instagram.com/micaandkids/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(preschoolJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <Services />
      {/* Banner mica2 — deasupra ZigZag */}
      <div className="w-full flex justify-center bg-cream/80 py-4 opacity-80">
        <div className="relative w-full max-w-6xl h-[800px] md:h-[480px]">
          <Image
            src="/images/banners/mica2.webp"
            alt="Mica and Kids — grădiniță Popești Leordeni, învățare prin joacă în aer liber"
            fill
            priority
            className="object-contain md:hidden"
          />
          <Image
            src="/images/banners/mica2-a-v2.webp"
            alt="Mica and Kids — grădiniță Popești Leordeni, învățare prin joacă în aer liber"
            fill
            priority
            className="hidden md:block object-contain"
          />
        </div>
      </div>
      <ZigZag />
      <GalleryStrip />
      <Testimonials />
      <FAQJsonLd
        items={[
          {
            question: "De la ce vârstă acceptați copii la Mica and Kids?",
            answer:
              "Acceptăm copii începând cu vârsta de 1,5 ani la creșă, 3-6 ani la grădiniță și 6-12 ani la programul de afterschool. Fiecare grupă de vârstă are activități adaptate nevoilor de dezvoltare.",
          },
          {
            question: "Ce program aveți în Popești Leordeni?",
            answer:
              "Funcționăm de Luni până Vineri, între 07:00 și 19:00. Oferim program scurt (07:30-12:30), program mediu (07:30-16:30) și program lung (07:30-18:30), pentru a se adapta nevoilor fiecărei familii.",
          },
          {
            question: "Ce activități includ programele?",
            answer:
              "Toate programele includ activități în aer liber, ateliere creative, conexiune cu natura și animalele, învățare prin joacă, inițiere în limba engleză și o echipă dedicată și calificată.",
          },
          {
            question: "Pot programa o vizită înainte de înscriere?",
            answer:
              "Da! Te invităm cu drag să ne cunoști și să vizitezi spațiul nostru din Popești Leordeni. Contactează-ne la 0740 467 056 sau prin formularul de contact pentru a programa o vizită.",
          },
        ]}
      />
      <FAQSection
        items={[
          {
            question: "De la ce vârstă acceptați copii la Mica and Kids?",
            answer:
              "Acceptăm copii începând cu vârsta de 1,5 ani la creșă, 3-6 ani la grădiniță și 6-12 ani la programul de afterschool. Fiecare grupă de vârstă are activități adaptate nevoilor de dezvoltare.",
          },
          {
            question: "Ce program aveți în Popești Leordeni?",
            answer:
              "Funcționăm de Luni până Vineri, între 07:00 și 19:00. Oferim program scurt (07:30-12:30), program mediu (07:30-16:30) și program lung (07:30-18:30), pentru a se adapta nevoilor fiecărei familii.",
          },
          {
            question: "Ce activități includ programele?",
            answer:
              "Toate programele includ activități în aer liber, ateliere creative, conexiune cu natura și animalele, învățare prin joacă, inițiere în limba engleză și o echipă dedicată și calificată.",
          },
          {
            question: "Pot programa o vizită înainte de înscriere?",
            answer:
              "Da! Te invităm cu drag să ne cunoști și să vizitezi spațiul nostru din Popești Leordeni. Contactează-ne la 0740 467 056 sau prin formularul de contact pentru a programa o vizită.",
          },
        ]}
      />
      <CTA />
    </>
  );
}
