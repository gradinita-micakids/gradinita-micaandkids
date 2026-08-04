import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate Mica and Kids — protecția datelor cu caracter personal conform GDPR.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-white/80 min-h-screen">
      <Breadcrumbs items={[{ name: "Politica de confidențialitate", path: "/privacy" }]} />
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-green-dark mb-8">
          Politica de confidențialitate
        </h1>

        <div className="space-y-6 text-foreground/70 leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              1. Introducere
            </h2>
            <p>
              Mica and Kids („noi”) respectă confidențialitatea vizitatorilor site-ului
              gradinitamicaandkids.ro. Această politică descrie modul în care colectăm,
              folosim și protejăm datele cu caracter personal, conform Regulamentului
              General privind Protecția Datelor (GDPR — Regulamentul UE 2016/679).
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              2. Date pe care le colectăm
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Date de contact</strong> — nume, email, telefon (prin formularul de contact)</li>
              <li><strong>Date de navigare</strong> — adresa IP, tip browser, pagini vizitate (prin Google Analytics)</li>
              <li><strong>Cookies</strong> — doar cu consimțământul tău, pentru analitic și funcționalitate</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              3. Scopul colectării datelor
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Răspuns la solicitările tale (înscrieri, vizite, întrebări)</li>
              <li>Îmbunătățirea experienței pe site și a serviciilor noastre</li>
              <li>Analiza traficului și performanței site-ului</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              4. Partajarea datelor
            </h2>
            <p>
              Nu vindem și nu închiriem datele tale. Putem partaja date cu furnizori de
              servicii (ex. Google Analytics) care ne ajută să operăm site-ul, doar în
              măsura necesară și conform politicilor lor de confidențialitate.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              5. Drepturile tale
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dreptul de acces la datele tale</li>
              <li>Dreptul la rectificare sau ștergere</li>
              <li>Dreptul de a retrage consimțământul</li>
              <li>Dreptul de a depune o plângere la ANSPDCP</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-green-dark mb-3">
              6. Contact
            </h2>
            <p>
              Pentru orice întrebare legată de protecția datelor, ne poți contacta la:
              <br />
              Email: <a href="mailto:office@gradinitamicaandkids.ro" className="text-green-dark underline">office@gradinitamicaandkids.ro</a>
              <br />
              Telefon: 0740 467 056
              <br />
              Adresă: Strada Sfântul Gheorghe 5B, Popești Leordeni, Ilfov
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
