"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/program-tarife", label: "Program & Tarife" },
  { href: "/petreceri", label: "Petreceri" },
  { href: "/galerie", label: "Galerie" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const linkClass = (active: boolean) =>
    `text-sm font-semibold tracking-wide no-underline transition-colors ${
      active ? "text-green-dark" : "text-foreground hover:text-green-light"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-cream/40 backdrop-blur-sm shadow-soft"
          : "py-4 bg-cream/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" onClick={closeMobile} className="no-underline flex items-center">
          <Image
            src="/images/logo/logo-mica.png"
            alt="Mica and Kids"
            width={160}
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(pathname === link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2.5 bg-green-light text-white text-sm font-bold tracking-wide no-underline transition-all hover:bg-green-dark rounded-full shadow-soft"
        >
          Înscrie-te
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-green-dark transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-green-dark transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-green-dark transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-t border-green-light/20 shadow-soft-lg">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`py-3 text-base font-semibold no-underline ${
                  pathname === link.href ? "text-green-dark" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMobile}
              className="mt-4 px-6 py-3 bg-green-light text-white text-sm font-bold tracking-wide no-underline text-center rounded-full"
            >
              Înscrie-te
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
