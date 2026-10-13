import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  Shield,
  Eye,
  Target,
  Compass,
  BarChart3,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  Quote,
  Layers,
  Gauge,
  TrendingUp,
  Building2,
  Globe,
  Calculator,
  Search,
} from "lucide-react";

import logo from "@/assets/logo-aguia.png";
import heroArch from "@/assets/hero-arch.jpg";
import aboutGlass from "@/assets/about-glass.jpg";
import execWindow from "@/assets/exec-window.jpg";
import teamWoman2 from "@/assets/team-woman-2.jpg";
import teamWoman3 from "@/assets/team-woman-3.jpg";
import teamFernanda from "@/assets/team-fernanda.png";
import teamAdemirTenfen from "@/assets/team-ademir-tenfen.png";
import heroAdemir from "@/assets/hero-ademir.png";
import teamMan2 from "@/assets/team-man-2.jpg";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useIsMobile } from "@/hooks/use-mobile";
import { siteConfig, whatsappLink } from "@/config/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Águia Consultoria | Estratégia com visão, resultados com propósito" },
      {
        name: "description",
        content:
          "Consultoria estratégica, inteligência de negócios, governança e gestão de riscos para empresas que desejam crescer com segurança, eficiência e clareza.",
      },
      { property: "og:title", content: "Águia Consultoria | Estratégia com visão" },
      {
        property: "og:description",
        content:
          "Transformamos informação em vantagem competitiva para decisões seguras e crescimento sustentável.",
      },
    ],
  }),
  component: Index,
});

const essencias = [
  { icon: Shield, title: "Confiança", text: "Segurança e solidez em cada decisão." },
  { icon: Eye, title: "Visão", text: "Ampla perspectiva para enxergar o futuro." },
  {
    icon: Target,
    title: "Estratégia",
    text: "Inteligência para transformar informação em vantagem.",
  },
  {
    icon: Compass,
    title: "Autonomia",
    text: "Soluções que fortalecem a independência e o controle.",
  },
  { icon: Shield, title: "Força", text: "Presença, liderança e resultados consistentes." },
];

const heroTiles = [
  { icon: BarChart3, pos: "left-0 top-[10%]", delay: "0s" },
  { icon: Search, pos: "left-0 top-[46%]", delay: "1.6s" },
  { icon: TrendingUp, pos: "right-0 top-[4%]", delay: "0.8s" },
  { icon: Globe, pos: "right-0 top-[34%]", delay: "2.4s" },
  { icon: Calculator, pos: "right-0 top-[64%]", delay: "1.2s" },
  { icon: Gauge, pos: "left-[6%] bottom-[18%]", delay: "3s" },
];

const servicos = [
  {
    icon: Layers,
    title: "Estratégia Empresarial",
    text: "Diagnóstico, posicionamento e planejamento para crescimento sustentável.",
  },
  {
    icon: Target,
    title: "Inteligência de Negócios",
    text: "Dados e análises que geram clareza para decisões mais assertivas.",
  },
  {
    icon: Gauge,
    title: "Governança e Performance",
    text: "Estruturas e processos que garantem eficiência e resultados consistentes.",
  },
  {
    icon: Compass,
    title: "Gestão de Riscos",
    text: "Antecipação de cenários e proteção para decisões com mais segurança.",
  },
  {
    icon: TrendingUp,
    title: "M&A e Crescimento",
    text: "Apoio estratégico em fusões, aquisições e expansão de negócios.",
  },
];

const metodologia = [
  { n: "01", title: "Diagnóstico", text: "Entendemos o negócio, os desafios e as oportunidades." },
  { n: "02", title: "Análise", text: "Transformamos dados em insights aplicáveis e relevantes." },
  { n: "03", title: "Estratégia", text: "Desenhamos caminhos personalizados para cada realidade." },
  {
    n: "04",
    title: "Implementação",
    text: "Apoiamos a execução com método, disciplina e acompanhamento.",
  },
  {
    n: "05",
    title: "Evolução",
    text: "Monitoramos resultados e ajustamos rotas para gerar valor contínuo.",
  },
];

const equipe = [
  {
    img: teamAdemirTenfen,
    name: siteConfig.economistaChefe.fullName,
    short: siteConfig.economistaChefe.name,
    role: siteConfig.economistaChefe.role,
    specialty: siteConfig.economistaChefe.specialty,
    register: siteConfig.economistaChefe.register,
    bio: siteConfig.economistaChefe.bio,
    chief: true,
  },
  {
    img: teamWoman2,
    name: "Michelle Cristina Reis Flaminio",
    short: "Michelle Cristina",
    role: "Economista",
    specialty: "Gestão Econômico-Financeira e Controladoria",
    register: "CORECON-SP 37795",
    bio: "Responsável por análises econômicas aplicadas à gestão empresarial, com ênfase em controladoria e indicadores de desempenho.",
    chief: false,
  },
  {
    img: teamMan2,
    name: "Gabriel Alves da Silva",
    short: "Gabriel Alves",
    role: "Economista",
    specialty: "Análise Financeira e Modelagem Econômica",
    register: "CORECON-SP 38362",
    bio: "Especialista em análise financeira e modelagem econômica, com atuação em projeções e estudos de viabilidade.",
    chief: false,
  },
  {
    img: teamWoman3,
    name: "Paloma Leite Freitas",
    short: "Paloma Leite",
    role: "Economista",
    specialty: "Gestão de Custos e Orçamento Empresarial",
    register: "CORECON-SP 37100",
    bio: "Atua com foco em gestão de custos, estruturação orçamentária e análise de rentabilidade para maior eficiência operacional.",
    chief: false,
  },
  {
    img: teamFernanda,
    name: "Fernanda Bernadete da Silva",
    short: "Fernanda Bernadete",
    role: "Economista",
    specialty: "Análise Econômica e Planejamento Estratégico",
    register: "CORECON-SP 34943",
    bio: "Especialista em análise econômica aplicada ao planejamento estratégico, com atuação em estudos de mercado e projeções financeiras.",
    chief: false,
  },
];

const banners = [
  {
    img: aboutGlass,
    eyebrow: "Nossa essência",
    title: "Experiência que gera confiança.",
    text: "Mais de 20 anos apoiando líderes na tomada de decisões críticas com método e clareza.",
  },
  {
    img: execWindow,
    eyebrow: "Nossa atuação",
    title: "Estratégia que transforma resultados.",
    text: "Diagnóstico, plano e execução acompanhados de perto por especialistas registrados.",
  },
  {
    img: heroArch,
    eyebrow: "Nosso compromisso",
    title: "Decisões seguras, crescimento sustentável.",
    text: "Inteligência de negócios e governança para crescer com segurança e previsibilidade.",
  },
];


const unidades = [
  {
    city: "São Paulo",
    lines: ["Av. Paulista, 1000 — 8º andar", "Bela Vista — São Paulo, SP", "CEP 01310-100"],
    map: "Av. Paulista, 1000, Bela Vista, São Paulo - SP, 01310-100",
  },
  {
    city: "Santa Catarina",
    lines: ["Rua Angelo Dias, 207, Sala 22", "Centro — Blumenau, SC", "CEP 89010-020"],
    map: "Rua Angelo Dias, 207, Centro, Blumenau - SC, 89010-020",
  },
  {
    city: "Rio de Janeiro",
    lines: ["Av. Saquarema, 567", "Centro — Saquarema, RJ", "Atendimento com hora marcada"],
    map: "Avenida Saquarema, 567, Centro, Saquarema - RJ",
  },
];

const cases = [
  {
    icon: Shield,
    title: "Consultoria Estratégica",
    text: "Soluções sob medida para desafios complexos.",
    img: heroArch,
  },
  {
    icon: Target,
    title: "Inteligência de Negócios",
    text: "Transformamos dados em decisões com impacto.",
    img: aboutGlass,
  },
  {
    icon: BarChart3,
    title: "Gestão e Performance",
    text: "Estratégias que impulsionam eficiência e crescimento.",
    img: execWindow,
  },
];

const faq = [
  {
    q: "Como funciona o processo de consultoria?",
    a: "Nosso processo é dividido em diagnóstico, estratégia, execução e acompanhamento. Trabalhamos lado a lado com sua equipe para entregar resultados sustentáveis.",
  },
  {
    q: "Quais áreas a Águia Consultoria atende?",
    a: "Atuamos em estratégia empresarial, inteligência de negócios, governança, gestão de riscos, planejamento financeiro e M&A.",
  },
  {
    q: "Vocês atendem empresas de outros portes?",
    a: "Sim. Adaptamos escopo e metodologia para empresas de médio e grande porte, respeitando o momento e a maturidade de cada organização.",
  },
];

function Index() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("section > div, section > img, section article"),
    ).filter((el) => !el.closest("[data-no-reveal]"));
    els.forEach((el) => el.setAttribute("data-reveal", ""));


    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []);
          const idx = Math.min(siblings.indexOf(el), 5);
          el.style.setProperty("--reveal-delay", `${idx * 90}ms`);
          el.classList.add("is-visible");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [flipped, setFlipped] = useState<string | null>(null);

  const isMobile = useIsMobile();
  const perView = isMobile ? 1 : 3;
  const maxIdx = Math.max(0, equipe.length - perView);
  const [teamIdx, setTeamIdx] = useState(0);
  const move = useCallback(
    (dir: number) => {
      setFlipped(null);
      setTeamIdx((i) => Math.min(maxIdx, Math.max(0, i + dir)));
    },
    [maxIdx],
  );
  useEffect(() => {
    setTeamIdx((i) => Math.min(i, maxIdx));
  }, [maxIdx]);

  const [banner, setBanner] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setBanner((b) => (b + 1) % banners.length), 5500);
    return () => clearInterval(t);
  }, []);


  return (
    <div id="home" className="page-in min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-neutro">
        <img
          src={heroArch}
          alt="Arquitetura corporativa moderna em preto e branco"
          width={1200}
          height={756}
          decoding="async"
          fetchPriority="high"
          className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-25 lg:w-[62%] lg:opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/40" />
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div
          aria-hidden="true"
          className="blue-glow absolute -left-32 top-10 h-[380px] w-[380px]"
        />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_minmax(0,600px)] lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-light leading-[1.08] text-graphite sm:text-6xl">
              Estratégia com visão.
              <span className="mt-1 block text-gray-medio">Resultados com propósito.</span>
            </h1>
            <div className="accent-line my-8 w-24" />
            <p className="max-w-md text-sm leading-relaxed text-gray-chumbo">
              A Águia Consultoria transforma informação em vantagem competitiva para empresas que
              desejam crescer com segurança, eficiência e clareza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary"
              >
                Falar com especialista
              </a>
              <a href="#servicos" className="btn-base btn-secondary">
                Conheça nossos serviços
              </a>
            </div>
          </div>

          {/* Economista chefe em destaque */}
          <div className="relative mx-auto -mb-20 w-full max-w-[600px] self-end px-8 sm:px-14 lg:-mb-24">
            <img
              src={heroAdemir}
              alt={`${siteConfig.economistaChefe.fullName}, ${siteConfig.economistaChefe.role} da Águia Consultoria`}
              loading="eager"
              decoding="async"
              width={683}
              height={699}
              className="relative z-10 w-full grayscale transition-all duration-700 hover:grayscale-0"
              style={{
                maskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 78%, transparent 100%)",
              }}
            />

            {heroTiles.map(({ icon: Icon, pos, delay }, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`float-slow absolute z-20 grid h-11 w-11 place-items-center rounded-2xl border border-white/80 bg-white/70 shadow-[0_10px_30px_-10px_rgba(15,18,21,0.25)] backdrop-blur-md sm:h-14 sm:w-14 ${pos}`}
                style={{ animationDelay: delay }}
              >
                <Icon className="h-5 w-5 stroke-[1.25] text-gray-chumbo sm:h-6 sm:w-6" />
                <span className="blue-dot absolute -right-1 -top-1" />
              </span>
            ))}
          </div>
        </div>

        {/* Essências */}
        <div className="relative border-t border-border bg-background/80 backdrop-blur-sm">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
            {essencias.map((e, idx) => (
              <div
                key={e.title}
                className={`flex items-start gap-3 py-6 ${idx > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-azul-claro/60">
                  <e.icon className="h-5 w-5 stroke-[1.5] text-azul" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-[15px] text-graphite">{e.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-gray-medio">{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[320px_1fr] lg:px-10">
          <div>
            <p className="eyebrow">Nossos serviços</p>
            <h2 className="mt-5 font-display text-3xl leading-snug text-graphite">
              Soluções estratégicas{" "}
              <span className="text-gray-medio">para empresas que querem ir além.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {servicos.map((s) => (
              <article
                key={s.title}
                className="surface card-hover group relative p-6"
              >
                <span className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-gray-claro transition-colors duration-500 group-hover:bg-azul" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border transition-colors duration-500 group-hover:border-azul/40 group-hover:bg-azul-claro/50">
                  <s.icon className="h-6 w-6 stroke-[1.25] text-gray-chumbo transition-colors duration-500 group-hover:text-azul" />
                </span>
                <h3 className="mt-6 font-display text-[15px] text-graphite">{s.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-gray-medio">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="border-t border-border bg-gray-neutro">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[320px_1fr] lg:px-10">
          <div>
            <p className="eyebrow">Nossa metodologia</p>
            <h2 className="mt-5 font-display text-3xl leading-snug text-graphite">
              Um processo claro. Decisões melhores. Resultados reais.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metodologia.map((m, idx) => (
              <div key={m.n} className="relative rounded-3xl border border-border bg-background/70 p-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-extralight text-graphite">{m.n}</span>
                  <span className="accent-line flex-1" />
                </div>
                <h3 className="mt-5 font-display text-[15px] text-graphite">{m.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-gray-medio">{m.text}</p>
                {idx < metodologia.length - 1 && (
                  <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full border border-border bg-background lg:grid">
                    <ArrowRight className="h-3 w-3 text-azul" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
          <p className="eyebrow">Nossos especialistas</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-snug text-graphite">
            Equipe com experiência prática{" "}
            <span className="text-gray-medio">e visão de negócio.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-gray-medio">
            Profissionais habilitados e registrados, com atuação em economia aplicada, controladoria
            e estratégia empresarial.
          </p>

          <div className="mt-10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={teamIdx === 0}
              aria-label="Especialistas anteriores"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-graphite transition-colors hover:border-azul hover:bg-azul hover:text-white disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-transparent disabled:hover:text-graphite"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={teamIdx >= maxIdx}
              aria-label="Próximos especialistas"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-graphite transition-colors hover:border-azul hover:bg-azul hover:text-white disabled:opacity-30 disabled:hover:border-border disabled:hover:bg-transparent disabled:hover:text-graphite"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 overflow-hidden" data-no-reveal>
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${teamIdx * (100 / perView)}%)` }}
            >
              {equipe.map((p) => {
                const isOpen = flipped === p.name;
                return (
                  <div
                    key={p.name}
                    className="w-full shrink-0 px-0 sm:px-3 md:w-1/3"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <article className="surface group relative h-[540px]">
                      {/* Frente */}
                      <div className="media-zoom flex h-full flex-col">
                        <div className="corner-marks relative m-2 overflow-hidden rounded-[22px]">
                          <img
                            src={p.img}
                            alt={`${p.name}, ${p.role}`}
                            loading="lazy"
                            decoding="async"
                            width={900}
                            height={1350}
                            className="h-[304px] w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
                          />
                          {p.chief && (
                            <span className="absolute bottom-4 left-4 z-[3] inline-flex items-center gap-2 rounded-full bg-graphite/85 px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] uppercase text-white backdrop-blur">
                              <span className="blue-dot" aria-hidden="true" />
                              Economista Chefe
                            </span>
                          )}
                        </div>
                        <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                          <h3 className="font-display text-lg text-graphite">{p.name}</h3>
                          <p className="mt-1 text-[12px] text-gray-medio">{p.role}</p>
                          <div className="accent-line my-4 w-12" />
                          <p className="text-[12px] leading-relaxed text-gray-medio">
                            {p.specialty}
                          </p>
                          <button
                            type="button"
                            onClick={() => setFlipped(p.name)}
                            className="btn-base btn-secondary mt-auto w-full"
                          >
                            Trajetória <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Verso */}
                      <div
                        aria-hidden={!isOpen}
                        className={`absolute inset-0 flex flex-col overflow-hidden rounded-[inherit] bg-graphite px-7 py-8 text-white transition-all duration-500 ${
                          isOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-4 opacity-0"
                        }`}
                      >
                        <span aria-hidden="true" className="bg-grid-dark pointer-events-none absolute inset-0" />
                        <p className="relative flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/45">
                          <span className="blue-dot" aria-hidden="true" />
                          Trajetória
                        </p>
                        <h3 className="relative mt-4 font-display text-xl text-white">{p.name}</h3>
                        <p className="relative mt-1 text-[12px] text-white/55">{p.role}</p>
                        <div className="accent-line relative my-5 w-12" />
                        <dl className="relative space-y-3 text-[12px]">
                          <div>
                            <dt className="text-[10px] tracking-[0.2em] uppercase text-white/45">
                              Especialidade
                            </dt>
                            <dd className="mt-1 text-white/80">{p.specialty}</dd>
                          </div>
                          <div>
                            <dt className="text-[10px] tracking-[0.2em] uppercase text-white/45">
                              Registro
                            </dt>
                            <dd className="mt-1 whitespace-pre-line text-white/80">{p.register}</dd>
                          </div>
                        </dl>
                        <p className="relative mt-5 text-[12px] leading-relaxed text-white/70">{p.bio}</p>
                        <button
                          type="button"
                          onClick={() => setFlipped(null)}
                          className="btn-base btn-light relative mt-auto w-full"
                          tabIndex={isOpen ? 0 : -1}
                        >
                          Voltar
                        </button>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-72 overflow-hidden bg-graphite lg:h-full">
          {banners.map((b, i) => (
            <div
              key={b.title}
              className={`banner-slide ${i === banner ? "banner-slide-active" : ""}`}
              aria-hidden={i !== banner}
            >
              <img
                src={b.img}
                alt={b.title}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                width={1200}
                height={1008}
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-linear-to-t from-graphite/90 via-graphite/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-12">
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/60">{b.eyebrow}</p>
                <h3 className="mt-3 max-w-md font-display text-2xl leading-snug text-white">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-md text-[12px] leading-relaxed text-white/70">{b.text}</p>
              </div>
            </div>
          ))}
          <div className="absolute bottom-5 right-6 z-10 flex gap-2">
            {banners.map((b, i) => (
              <button
                key={b.title}
                type="button"
                onClick={() => setBanner(i)}
                aria-label={`Ver banner ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === banner ? "w-8 bg-azul" : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden bg-graphite px-5 py-16 text-white lg:px-16 lg:py-20">
          <span aria-hidden="true" className="bg-grid-dark absolute inset-0 -z-10" />
          <span
            aria-hidden="true"
            className="blue-glow absolute -bottom-32 -right-32 -z-10 h-[360px] w-[360px]"
          />
          <p className="flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-white/50">
            <span className="blue-dot" aria-hidden="true" />
            Sobre nós
          </p>
          <h2 className="mt-6 font-display text-3xl font-light leading-snug text-white sm:text-4xl">
            Experiência que gera confiança.
            <span className="block">Estratégia que transforma.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[13px] leading-relaxed text-white/65">
            A Águia Consultoria nasceu com o propósito de apoiar líderes e organizações na tomada de
            decisões críticas. Combinamos visão estratégica, conhecimento técnico e experiência
            prática para entregar soluções que geram impacto real e duradouro.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["+15", "Anos de experiência"],
              ["+200", "Projetos realizados"],
              ["+80", "Empresas atendidas"],
              ["95%", "Índice de satisfação"],
            ].map(([v, l]) => (
              <div
                key={v}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-azul" aria-hidden="true" />
                <p className="font-display text-3xl font-light text-white">{v}</p>
                <p className="mt-1 text-[11px] text-white/55">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Cases */}
      <section id="cases" className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
          <p className="eyebrow">Soluções estratégicas</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-snug text-graphite">
            Cases que traduzem método em resultado.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {cases.map((c) => (
              <article
                key={c.title}
                className="surface group card-hover media-zoom"
              >
                <div className="m-2 overflow-hidden rounded-[22px]">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1000}
                    height={700}
                    className="h-52 w-full object-cover"
                  />
                </div>
                <div className="relative px-6 pb-7 pt-8">
                  <span className="absolute -top-7 left-6 grid h-12 w-12 place-items-center rounded-2xl border border-border bg-card shadow-[0_10px_24px_-12px_rgba(15,18,21,0.3)]">
                    <c.icon className="h-5 w-5 stroke-[1.5] text-azul" />
                  </span>
                  <h3 className="font-display text-lg text-graphite">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-medio">{c.text}</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow mt-5"
                  >
                    Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento + FAQ */}
      <section id="insights" className="border-t border-border bg-gray-neutro">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Depoimentos</p>
            <div className="surface corner-marks mt-8 p-8 lg:p-10">
              <Quote className="h-7 w-7 text-azul" />
              <p className="mt-4 font-display text-lg font-light leading-relaxed text-graphite">
                “A Águia Consultoria foi essencial para redesenharmos nossa estratégia com clareza e
                foco. Resultados consistentes e parceria de confiança.”
              </p>
              <p className="mt-6 text-[13px] font-semibold text-graphite">Mariana Oliveira</p>
              <p className="text-[12px] text-gray-medio">Diretora de Estratégia · Grupo Horizonte</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">FAQ</p>
            <div className="mt-8 space-y-3">
              {faq.map((f, i) => (
                <div
                  key={f.q}
                  className={`surface transition-colors duration-300 ${openFaq === i ? "border-azul/40" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[13px] font-medium text-graphite">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                        openFaq === i ? "bg-azul text-white" : "bg-gray-neutro text-gray-chumbo"
                      }`}
                    >
                      {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="px-6 pb-6 text-[13px] leading-relaxed text-gray-medio">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr] lg:px-10">
          <div>
            <p className="eyebrow">Formulário de contato</p>
            <h2 className="mt-5 font-display text-3xl leading-snug text-graphite">
              Vamos conversar sobre o próximo passo da sua empresa.
            </h2>
            <form className="mt-10 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <input
                className="field"
                placeholder="Nome completo"
                aria-label="Nome completo"
              />
              <input
                className="field"
                placeholder="E-mail corporativo"
                aria-label="E-mail corporativo"
                type="email"
              />
              <input
                className="field"
                placeholder="Empresa"
                aria-label="Empresa"
              />
              <input
                className="field"
                placeholder="Telefone"
                aria-label="Telefone"
              />
              <textarea
                rows={4}
                className="field sm:col-span-2"
                placeholder="Como podemos ajudar?"
                aria-label="Mensagem"
              />
              <label className="flex items-start gap-2 text-[12px] text-gray-medio sm:col-span-2">
                <input type="checkbox" className="mt-0.5 accent-azul" />
                Li e concordo com a <span className="underline">Política de Privacidade</span>.
              </label>
              <button type="submit" className="btn-base btn-primary sm:w-fit">
                Enviar mensagem
              </button>
            </form>
          </div>

          <aside className="relative isolate overflow-hidden rounded-3xl border border-border bg-gray-neutro p-8 lg:p-10">
            <span aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
            <span
              aria-hidden="true"
              className="blue-glow absolute -right-24 -top-24 -z-10 h-64 w-64"
            />
            <img
              src={logo}
              alt=""
              width={256}
              height={256}
              loading="lazy"
              className="h-14 w-14 object-contain opacity-80"
            />
            <h3 className="mt-6 font-display text-2xl leading-snug text-graphite">
              Pronto para transformar estratégia em resultado?
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-gray-chumbo">
              Fale com nossos especialistas e descubra como podemos apoiar sua empresa.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-secondary mt-8"
            >
              Falar com especialista <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <div className="mt-10 space-y-3 border-t border-border pt-8 text-[13px] text-gray-chumbo">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-azul" /> {siteConfig.displayPhone}
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-azul" /> {siteConfig.email}
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-azul" />
                Av. Paulista, 1000 — 8º andar · São Paulo — SP · 01310-100
              </p>
            </div>
          </aside>
        </div>
      </section>


      {/* Unidades */}
      <section id="unidades" className="border-t border-border bg-gray-neutro">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
          <p className="eyebrow">Nossas localizações</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-snug text-graphite">
            Presença estratégica <span className="text-gray-medio">em três estados.</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {unidades.map((u) => (
              <article key={u.city} className="surface card-hover p-6 lg:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azul-claro/60">
                  <Building2 className="h-5 w-5 stroke-[1.5] text-azul" />
                </span>
                <h3 className="mt-6 font-display text-xl text-graphite">Águia {u.city}</h3>
                <div className="accent-line my-5 w-12" />
                <address className="space-y-1.5 text-[13px] not-italic leading-relaxed text-gray-medio">
                  {u.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </address>
                <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                  <iframe
                    title={`Mapa — Águia ${u.city}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(u.map)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full grayscale transition-all duration-700 hover:grayscale-0"
                  />
                </div>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-6"
                >
                  Agendar atendimento <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 lg:grid-cols-2 lg:px-10">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-azul-claro/60">
              <Mail className="h-5 w-5 stroke-[1.5] text-azul" />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-2xl text-graphite">Receba insights exclusivos</h2>
              <p className="mt-2 text-[13px] text-gray-medio">
                Assine nossa newsletter e fique por dentro de conteúdos que geram valor para o seu
                negócio.
              </p>
            </div>
          </div>
          <form
            className="flex gap-2 rounded-full border border-border bg-background p-1.5 transition-shadow focus-within:border-azul focus-within:shadow-[0_0_0_4px_color-mix(in_oklch,var(--azul)_14%,transparent)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              aria-label="Seu melhor e-mail"
              placeholder="Seu melhor e-mail"
              className="min-w-0 flex-1 rounded-full bg-transparent px-4 py-3 text-[13px] outline-none"
            />
            <button type="submit" aria-label="Assinar" className="btn-base btn-primary px-5">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>



      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
