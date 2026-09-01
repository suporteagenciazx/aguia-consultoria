import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { getPost, posts } from "@/data/posts";
import { whatsappLink } from "@/config/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artigo indisponível | Águia Consultoria" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Blog Águia Consultoria` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const outros = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="page-in min-h-screen bg-background">
      <SiteHeader />

      <article>
        <section className="border-b border-border bg-gray-neutro">
          <div className="mx-auto max-w-[860px] px-5 py-14 lg:px-10 lg:py-20">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[12px] text-gray-medio hover:text-graphite"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar para o blog
            </Link>
            <p className="eyebrow mt-8">
              {post.category} · {post.readTime}
            </p>
            <h1 className="mt-4 font-display text-3xl leading-[1.2] text-graphite sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-5 text-[12px] text-gray-medio">
              {post.author} · <time dateTime={post.dateISO}>{post.date}</time>
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[860px] px-5 lg:px-10">
          <img
            src={post.cover}
            alt={post.title}
            className="-mt-0 h-64 w-full border border-border object-cover lg:h-[380px]"
          />

          <div className="py-12">
            <p className="font-display text-xl leading-relaxed text-graphite">{post.excerpt}</p>
            <div className="mt-8 space-y-6">
              {post.content.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.9] text-gray-chumbo">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 border border-border bg-gray-neutro p-8">
              <h2 className="font-display text-2xl leading-snug text-graphite">
                Quer aplicar isso na sua empresa?
              </h2>
              <p className="mt-3 text-[13px] text-gray-chumbo">
                Fale com um especialista da Águia Consultoria e receba um diagnóstico inicial.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary mt-6"
              >
                Falar com especialista <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
          <p className="eyebrow">Continue lendo</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {outros.map((p) => (
              <article key={p.slug} className="card-hover media-zoom border border-border bg-card">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="px-6 pb-6 pt-5">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-gray-medio">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-display text-base leading-snug text-graphite">
                    {p.title}
                  </h3>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-4 inline-flex items-center gap-2 border-b border-graphite pb-0.5 text-[12px] text-graphite"
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
