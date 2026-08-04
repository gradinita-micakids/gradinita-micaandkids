import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termeni și condiții Mica and Kids — reguli de utilizare a serviciilor și site-ului.",
  alternates: { canonical: "/termeni" },
  robots: { index: false, follow: false },
};

export default function TermeniPage() {
  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <Breadcrumbs items={[{ name: "Termeni și condiții", path: "/termeni" }]} />
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-8">
          Termeni și condiții
        </h1>

        <div className="space-y-6 text-foreground/70 leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              1. Servicii oferite
            </h2>
            <p>
              Mica and Kids oferă servicii de creșă, grădiniță, afterschool, tabere,
              excursii și închiriere locație pentru petreceri de copii în weekend.
              Toate serviciile se desfășoară la adresa: Strada Sfântul Gheorghe 5B,
              Popești Leordeni, Ilfov.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              2. Înscriere și plată
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Înscrierea se face după o vizită prealabilă și completarea formularului de înscriere</li>
              <li>Tarifele sunt lunare și se plătesc conform programului ales</li>
              <li>Tarifele pot fi modificate cu notificare prealabilă de 30 de zile</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              3. Petreceri și evenimente
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Închirierea locației pentru petreceri se face doar în weekend</li>
              <li>Durata standard este de 4 ore, la prețul de 1000 lei</li>
              <li>Rezervarea se confirmă după plata unui avans</li>
              <li>Anularea se face cu minim 7 zile înainte pentru rambursare integrală</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              4. Responsabilități
            </h2>
            <p>
              Mica and Kids asigură un mediu sigur, curat și supraveghere calificată.
              Părinții sunt responsabili de a furniza informații complete despre starea
              de sănătate a copilului, alergii sau necesități speciale.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              5. Utilizarea site-ului
            </h2>
            <p>
              Conținutul site-ului gradinitamicaandkids.ro este proprietatea Mica and Kids.
              Nu este permisă reproducerea sau utilizarea conținutului fără acordul nostru.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              6. Contact
            </h2>
            <p>
              Pentru întrebări legate de termeni și condiții:
              <br />
              Email: <a href="mailto:office@gradinitamicaandkids.ro" className="text-green-dark underline">office@gradinitamicaandkids.ro</a>
              <br />
              Telefon: 0740 467 056
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
