import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact — Mica and Kids",
  description:
    "Contactează Mica and Kids pentru înscrieri, vizite și informații. Avem grijă de cei mici.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-green-dark mb-4">
            Contact
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Hai să ne cunoaștem! Programează o vizită sau solicită informații
            despre înscrieri.
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
                    <p className="text-foreground/80">Strada ___ nr. __, București</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Telefon</p>
                    <a href="tel:0000000000" className="text-foreground/80 hover:text-green-dark no-underline">00 000 000</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:contact@micaandkids.ro" className="text-foreground/80 hover:text-green-dark no-underline">contact@micaandkids.ro</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Program</p>
                    <p className="text-foreground/80">Luni - Vineri: 07:00 - 19:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative bg-green-light/10 rounded-3xl p-8 shadow-soft flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/images/mascota/Mica Albinuța Dansatoarea.png"
                  alt="Mica — mascota"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain animate-float"
                />
              </div>
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
