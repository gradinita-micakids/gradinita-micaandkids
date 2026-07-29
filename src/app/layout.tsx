import type { Metadata } from "next";
import { DynaPuff, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Kid3DWrapper from "@/components/Kid3DWrapper";

const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dynapuff",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mica and Kids — Grădiniță, Creșă & Afterschool în București",
  description:
    "Mica and Kids — învățare prin joacă, libertate și conectare cu natura. Creșă, grădiniță, afterschool, tabere și excursii. Avem grijă de cei mici.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${dynapuff.variable} ${nunito.variable}`}>
      <body className="font-body antialiased">
        <Preloader />
        <Kid3DWrapper />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
