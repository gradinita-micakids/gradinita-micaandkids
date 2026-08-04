import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + description */}
          <div>
            <Image
              src="/images/logo/logo-mica.png"
              alt="Mica and Kids"
              width={160}
              height={48}
              className="object-contain mb-4 rounded-lg bg-white/95 p-2"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Creșă, grădiniță și afterschool în Popești Leordeni, Ilfov. Învățare prin joacă,
              libertate și conectare cu natura.
            </p>
            <a
              href="https://www.instagram.com/micaandkids/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mica and Kids pe Instagram"
              className="inline-flex items-center gap-2 text-white/70 hover:text-yellow transition-colors text-sm no-underline"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
              @micaandkids
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-yellow text-sm font-bold uppercase tracking-wider mb-4">
              Link-uri utile
            </h3>
            <ul className="flex flex-col gap-2 list-none">
              <li><Link href="/" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">Acasă</Link></li>
              <li><Link href="/despre-noi" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">Despre noi</Link></li>
              <li><Link href="/servicii" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">Servicii</Link></li>
              <li><Link href="/galerie" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">Galerie</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-yellow text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 list-none">
              <li className="text-white/70 text-sm">Strada Sfântul Gheorghe 5B, Popești Leordeni, Ilfov</li>
              <li><a href="tel:0740467056" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">0740 467 056</a></li>
              <li><a href="tel:0762119691" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">0762 119 691</a></li>
              <li><a href="mailto:office@gradinitamicaandkids.ro" className="text-white/70 hover:text-yellow no-underline transition-colors text-sm">office@gradinitamicaandkids.ro</a></li>
            </ul>
          </div>

          {/* Mascot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-32 h-32">
              <Image
                src="/images/mascota/albinuta.webp"
                alt="Mica — mascota"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-xs">
            © 2026 Mica and Kids. Toate drepturile rezervate. Realizat de{" "}
            <a
              href="https://forsite.ro"
              target="_blank"
              rel="noopener noreferrer dofollow"
              className="text-white text-xs font-bold no-underline hover:text-yellow transition-colors"
            >
              FORSITE.RO
            </a>
          </p>
          <p className="text-white text-xs font-bold">
            Avem grijă de cei mici.
          </p>
        </div>
      </div>
    </footer>
  );
}
