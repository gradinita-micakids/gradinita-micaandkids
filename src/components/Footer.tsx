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
            <p className="text-white/70 text-sm leading-relaxed">
              Creșă, grădiniță și afterschool în Popești Leordeni, Ilfov. Învățare prin joacă,
              libertate și conectare cu natura.
            </p>
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
                src="/images/mascota/Mica Albinuța pictor.png"
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
