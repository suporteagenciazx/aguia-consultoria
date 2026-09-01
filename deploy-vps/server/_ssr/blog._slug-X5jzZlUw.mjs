import { n as posts } from "./posts-Cy73Pes2.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./blog._slug-BEfIsmnj.mjs";
import { S as ArrowLeft, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, o as whatsappLink, r as WhatsAppFloat, t as SiteFooter } from "./WhatsAppFloat-TXS23GdC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-X5jzZlUw.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPost() {
	const { post } = Route.useLoaderData();
	const outros = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-in min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-gray-neutro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[860px] px-5 py-14 lg:px-10 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog",
							className: "inline-flex items-center gap-2 text-[12px] text-gray-medio hover:text-graphite",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Voltar para o blog"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow mt-8",
							children: [
								post.category,
								" · ",
								post.readTime
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl leading-[1.2] text-graphite sm:text-4xl",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-[12px] text-gray-medio",
							children: [
								post.author,
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
									dateTime: post.dateISO,
									children: post.date
								})
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[860px] px-5 lg:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.cover,
					alt: post.title,
					className: "-mt-0 h-64 w-full border border-border object-cover lg:h-[380px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-relaxed text-graphite",
							children: post.excerpt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-6",
							children: post.content.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[14px] leading-[1.9] text-gray-chumbo",
								children: p
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 border border-border bg-gray-neutro p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl leading-snug text-graphite",
									children: "Quer aplicar isso na sua empresa?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[13px] text-gray-chumbo",
									children: "Fale com um especialista da Águia Consultoria e receba um diagnóstico inicial."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappLink,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-base btn-primary mt-6",
									children: ["Falar com especialista ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})
					]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-5 py-16 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Continue lendo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-8 md:grid-cols-3",
						children: outros.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-hover media-zoom border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.cover,
								alt: p.title,
								loading: "lazy",
								className: "h-40 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-6 pb-6 pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.2em] uppercase text-gray-medio",
										children: p.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-base leading-snug text-graphite",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/blog/$slug",
										params: { slug: p.slug },
										className: "mt-4 inline-flex items-center gap-2 border-b border-graphite pb-0.5 text-[12px] text-graphite",
										children: ["Ler artigo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						}, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { BlogPost as component };
