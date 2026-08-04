import type { Metadata } from "next";
import { DynaPuff, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Kid3DWrapper from "@/components/Kid3DWrapper";
import Phone3D from "@/components/Phone3D";

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
  metadataBase: new URL("https://gradinitamicaandkids.ro"),
  title: {
    default: "Grădiniță Popești Leordeni — Mica and Kids | Creșă & Afterschool Ilfov",
    template: "%s | Mica and Kids",
  },
  description:
    "Grădiniță Popești Leordeni — Mica and Kids. Creșă, grădiniță, afterschool, tabere și excursii. Învățare prin joacă, natură și creativitate în Ilfov.",
  keywords: [
    "grădiniță Popești Leordeni",
    "creșă Popești Leordeni",
    "afterschool Popești Leordeni",
    "grădiniță Ilfov",
    "creșă Ilfov",
    "grădiniță privată Ilfov",
    "Mica and Kids",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.webp", type: "image/webp" }],
    apple: [{ url: "/favicon.webp", type: "image/webp" }],
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "Mica and Kids",
    title: "Grădiniță Popești Leordeni — Mica and Kids | Creșă & Afterschool Ilfov",
    description:
      "Grădiniță Popești Leordeni — creșă, grădiniță, afterschool, tabere și excursii. Învățare prin joacă și natură în Ilfov.",
    url: "https://gradinitamicaandkids.ro",
    images: [
      {
        url: "/images/mascota/albinuta.webp",
        width: 500,
        height: 500,
        alt: "Albinuța Mica — mascota grădiniței Mica and Kids Popești Leordeni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grădiniță Popești Leordeni — Mica and Kids",
    description:
      "Creșă, grădiniță, afterschool în Popești Leordeni, Ilfov. Învățare prin joacă și natură.",
    images: ["/images/mascota/albinuta.webp"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
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
        <Phone3D />
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
