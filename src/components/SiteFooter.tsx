import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, Building2, Handshake, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo-aguia.png";
import cofecon from "@/assets/cofecon.png";
import { siteConfig, whatsappLink } from "@/config/site";
import { nav } from "./SiteHeader";

const solucoes = [
  "Estratégia Empresarial",
  "Inteligência de Negócios",
  "Governança e Performance",
  "Gestão de Riscos",
  "M&A e Crescimento",
  "Planejamento Financeiro",
];

export function SiteFooter() {
  return (
    <footer className="bg-graphite text-white">
      {/* Faixa WhatsApp */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25">
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white/80" aria-hidden="true">
                <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.71-12.81-12.71Zm0 23.03h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.55 10.55 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.78 10.5-10.76 10.5Zm5.84-7.87c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
              </svg>
            </span>
            <div>
              <h2 className="font-display text-2xl text-white">Atendimento direto no WhatsApp</h2>
              <p className="mt-1.5 text-[13px] text-white/60">
                Fale agora com um especialista e receba um diagnóstico inicial sem compromisso.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base wa-btn w-full shrink-0 rounded-full lg:w-auto"
          >
            <svg viewBox="0 0 32 32" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
              <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.71-12.81-12.71Zm0 23.03h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.55 10.55 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.78 10.5-10.76 10.5Zm5.84-7.87c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
            </svg>
            Falar no WhatsApp <ArrowRight className="h-3.5 w-3.5" />
          </a>

        </div>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Águia Consultoria"
              width={256}
              height={256}
              loading="lazy"
              className="h-12 w-12 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-display text-lg text-white">Águia</span>
              <span className="block font-display text-sm text-white/60">Consultoria</span>
            </span>
          </div>
          <p className="mt-5 text-[12px] leading-relaxed text-white/55">
            Estratégia com visão.
            <br />
            Resultados com propósito.
          </p>
          <div className="mt-7 inline-flex flex-col gap-2 rounded-md bg-white/95 px-6 py-5">
            <img
              src={cofecon}
              alt="Selo COFECON — Conselho Federal de Economia"
              width={320}
              height={100}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">Navegação</p>
          <ul className="mt-5 space-y-2.5 text-[13px] text-white/65">
            {nav.map((i) => (
              <li key={i.label}>
                <a href={i.href} className="hover:text-white">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">Soluções</p>
          <ul className="mt-5 space-y-2.5 text-[13px] text-white/65">
            {solucoes.map((s) => (
              <li key={s}>
                <a href="/#servicos" className="hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/40">Contato</p>
          <ul className="mt-5 space-y-3 text-[13px] text-white/65">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-white/40" /> {siteConfig.displayPhone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-white/40" /> {siteConfig.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span>
                Av. Paulista, 1000 — 8º andar
                <br />
                São Paulo — SP · 01310-100
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span>
                Rua Angelo Dias, 207, Sala 22
                <br />
                Centro — Blumenau/SC · 89010-020
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span>
                Av. Saquarema, 567
                <br />
                Centro — Saquarema/RJ
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Handshake className="h-4 w-4 text-white/40" /> Parcerias institucionais
            </li>
            <li className="flex items-center gap-3">
              <Building2 className="h-4 w-4 text-white/40" /> CNPJ 04.848.916/0001-57
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-6 lg:px-10">
          <p className="text-[11px] text-white/45">
            © 2024 Águia Consultoria. Todos os direitos reservados.
          </p>
          <Link
            to="/"
            hash="home"
            aria-label="Voltar ao topo"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white/70 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
