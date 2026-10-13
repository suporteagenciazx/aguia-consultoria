import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Águia Consultoria — Insights de gestão e estratégia" },
      {
        name: "description",
        content:
          "Artigos sobre crédito empresarial, governança, controladoria, planejamento financeiro e gestão de riscos para empresas que querem decidir melhor.",
      },
      { property: "og:title", content: "Blog | Águia Consultoria" },
      {
        property: "og:description",
        content: "Conteúdos práticos sobre estratégia, finanças e governança empresarial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const destaque = posts[0]!;
  const restantes = posts.slice(1);

  return (
    <div className="page-in min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border bg-gray-neutro">
        <div aria-hidden="true" className="bg-grid absolute inset-0" />
        <div aria-hidden="true" className="blue-glow absolute -left-32 top-0 h-[340px] w-[340px]" />
        <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <p className="eyebrow">Insights</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.1] text-graphite sm:text-5xl">
            Conteúdo que ajuda empresas a{" "}
            <span className="text-gray-medio">decidir com clareza.</span>
          </h1>
          <div className="accent-line my-8 w-24" />
          <p className="max-w-xl text-sm leading-relaxed text-gray-chumbo">
            Análises, métodos e casos empresariais sobre crédito, governança, controladoria e
            estratégia — escritos pela equipe da Águia Consultoria.
          </p>
        </div>
      </section>

      {/* Destaque */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-2 lg:px-10">
          <div className="media-zoom corner-marks overflow-hidden rounded-3xl border border-border">
            <img
              src={destaque.cover}
              alt={destaque.title}
              loading="lazy"
              className="h-64 w-full object-cover lg:h-[340px]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">
              {destaque.category} · {destaque.date}
            </p>
            <h2 className="mt-5 font-display text-3xl leading-snug text-graphite">
              {destaque.title}
            </h2>
            <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-gray-medio">
              {destaque.excerpt}
            </p>
            <Link
              to="/blog/$slug"
              params={{ slug: destaque.slug }}
              className="btn-base btn-secondary mt-8 w-fit"
            >
              Ler artigo <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lista */}
      <section className="bg-gray-neutro">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {restantes.map((p) => (
              <article key={p.slug} className="surface card-hover media-zoom">
                <div className="m-2 overflow-hidden rounded-[22px]">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                </div>
                <div className="px-6 pb-7 pt-4">
                  <p className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-gray-medio">
                    <span className="h-1.5 w-1.5 rounded-full bg-azul" aria-hidden="true" />
                    {p.category} · {p.readTime}
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-snug text-graphite">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-medio">{p.excerpt}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="link-arrow mt-5"
                  >
                    Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
