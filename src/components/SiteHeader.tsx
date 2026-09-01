import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Menu, X } from "lucide-react";

import logo from "@/assets/logo-horizontal.png";
import { whatsappLink } from "@/config/site";

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Metodologia", href: "/#metodologia" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Unidades", href: "/#unidades" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/#contato" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-graphite text-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2.5 lg:px-10">
          <p className="truncate text-[10px] tracking-[0.2em] uppercase text-white/70">
            Estratégia com visão. Resultados com propósito.
          </p>
          <div className="hidden items-center gap-5 text-[10px] tracking-[0.2em] uppercase text-white/70 md:flex">
            <a href="/#contato" className="hover:text-white">
              Cliente
            </a>
            <span className="text-white/25">|</span>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="text-white/25">|</span>
            <a href="/#contato" className="hover:text-white">
              Carreiras
            </a>
            <span className="text-white/25">|</span>
            <a href="/#contato" aria-label="E-mail" className="hover:text-white">
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between lg:px-10">
          <Link to="/" className="flex min-w-0 items-center">
            <img
              src={logo}
              alt="Águia Consultoria"
              width={480}
              height={160}
              className="h-11 w-auto shrink-0 object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="nav-link pb-1 text-[13px] text-gray-chumbo transition-colors hover:text-graphite"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary hidden lg:inline-flex"
          >
            Falar com especialista
          </a>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="menu-toggle shrink-0 p-2 text-graphite lg:hidden"
            data-open={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="mobile-menu lg:hidden" data-open={menuOpen}>
          <nav className="overflow-hidden border-t border-border bg-background px-5 py-4">
            {nav.map((i, idx) => (
              <a
                key={i.label}
                href={i.href}
                onClick={() => setMenuOpen(false)}
                style={{ "--stagger": `${60 + idx * 55}ms` } as React.CSSProperties}
                className="menu-item block border-b border-border py-3 text-sm text-gray-chumbo"
              >
                {i.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ "--stagger": `${60 + nav.length * 55}ms` } as React.CSSProperties}
              className="menu-item btn-base btn-primary mt-4 w-full"
            >
              Falar com especialista
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
