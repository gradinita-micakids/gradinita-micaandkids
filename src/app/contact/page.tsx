import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Grădiniță Popești Leordeni",
  description:
    "Contactează Mica and Kids pentru înscrieri, vizite și informații în Popești Leordeni, Ilfov. Avem grijă de cei mici.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Grădiniță Popești Leordeni | Mica and Kids",
    description:
      "Contactează-ne pentru înscrieri, vizite și informații în Popești Leordeni, Ilfov.",
    url: "https://gradinitamicaandkids.ro/contact",
    images: ["/images/mascota/albinuta.webp"],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact — Mica and Kids Popești Leordeni",
    description:
      "Contactează Mica and Kids pentru înscrieri, vizite și informații în Popești Leordeni, Ilfov.",
    url: "https://gradinitamicaandkids.ro/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Mica and Kids",
      telephone: ["+40740467056", "+40762119691"],
      email: "office@gradinitamicaandkids.ro",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Strada Sfântul Gheorghe 5B",
        addressLocality: "Popești Leordeni",
        addressRegion: "Ilfov",
        postalCode: "077160",
        addressCountry: "RO",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+40740467056",
        email: "office@gradinitamicaandkids.ro",
        contactType: "customer service",
        areaServed: "Popești Leordeni, Ilfov",
        availableLanguage: ["Romanian"],
      },
      sameAs: ["https://www.instagram.com/micaandkids/"],
    },
  };

  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-4">
            Contact
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Hai să ne cunoaștem! Programează o <Link href="/despre-noi" className="text-green-dark underline hover:text-green-light">vizită</Link> sau solicită <Link href="/servicii" className="text-green-dark underline hover:text-green-light">informații</Link>
            despre <Link href="/program-tarife" className="text-green-dark underline hover:text-green-light">înscrieri</Link>. Avem grijă de <a href="https://copii.gov.ro/" target="_blank" rel="noopener noreferrer" className="text-green-dark underline hover:text-green-light">cei mici</a> — vezi și <Link href="/galerie" className="text-green-dark underline hover:text-green-light">galeria</Link> noastră.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-cream rounded-3xl p-8 shadow-soft">
              <h2 className="font-display text-2xl font-bold text-green-dark mb-6">
                Informații contact
              </h2>
              <ul className="flex flex-col gap-4 list-none">
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Adresă</p>
                    <p className="text-foreground/80">Strada Sfântul Gheorghe 5B<br /><a href="https://www.ppl.ro/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-green-dark underline">Popești Leordeni</a>, <a href="https://isjilfov.ro/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-green-dark underline">Ilfov</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Telefon</p>
                    <a href="tel:0740467056" className="text-foreground/80 hover:text-green-dark no-underline block">0740 467 056</a>
                    <a href="tel:0762119691" className="text-foreground/80 hover:text-green-dark no-underline block">0762 119 691</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:office@gradinitamicaandkids.ro" className="text-foreground/80 hover:text-green-dark no-underline">office@gradinitamicaandkids.ro</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                  <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Program</p>
                    <p className="text-foreground/80">Luni - Vineri: 07:00 - 19:00, conform <a href="https://www.edu.ro/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-green-dark underline">programului educațional</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📷</span>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Instagram</p>
                    <a href="https://www.instagram.com/micaandkids/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-green-dark no-underline">@micaandkids</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-cream rounded-3xl p-2 shadow-soft overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.123456!2d26.156!3d44.371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU3RyYWRhIFPGk8OibnR1bCBHaGVvcmdlIDVCLCBQb3BlxZ90aSBMZW9yZGVuaSwgSWxmb3Y!5e0!3m2!1sro!2sro!4v1700000000000"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mica and Kids — Strada Sfântul Gheorghe 5B, Popești Leordeni"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-cream rounded-3xl p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold text-green-dark mb-6">
              Trimite-ne un mesaj
            </h2>
            <form className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-bold text-green-dark mb-2 block">Nume</label>
                <input
                  type="text"
                  placeholder="Numele tău"
                  className="w-full px-5 py-3 rounded-xl border-2 border-green-light/20 bg-white text-foreground focus:border-green-light focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-green-dark mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="email@exemplu.ro"
                  className="w-full px-5 py-3 rounded-xl border-2 border-green-light/20 bg-white text-foreground focus:border-green-light focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-green-dark mb-2 block">Telefon</label>
                <input
                  type="tel"
                  placeholder="07xx xxx xxx"
                  className="w-full px-5 py-3 rounded-xl border-2 border-green-light/20 bg-white text-foreground focus:border-green-light focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-green-dark mb-2 block">Mesaj</label>
                <textarea
                  rows={4}
                  placeholder="Spune-ne cum te putem ajuta..."
                  className="w-full px-5 py-3 rounded-xl border-2 border-green-light/20 bg-white text-foreground focus:border-green-light focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-green-light text-white text-sm font-bold uppercase tracking-wider transition-all hover:bg-green-dark rounded-full shadow-soft cursor-pointer border-0"
              >
                Trimite mesaj →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
