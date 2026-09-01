import { n as posts } from "./posts-Cy73Pes2.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { x as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, r as WhatsAppFloat, t as SiteFooter } from "./WhatsAppFloat-TXS23GdC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-BKssbUDF.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const destaque = posts[0];
	const restantes = posts.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-in min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-gray-neutro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Insights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-3xl font-display text-4xl leading-[1.15] text-graphite",
							children: [
								"Conteúdo que ajuda empresas a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gray-medio",
									children: "decidir com clareza."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-7 h-px w-24 bg-gray-claro" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl text-sm leading-relaxed text-gray-chumbo",
							children: "Análises, métodos e casos empresariais sobre crédito, governança, controladoria e estratégia — escritos pela equipe da Águia Consultoria."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-2 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "media-zoom border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: destaque.cover,
							alt: destaque.title,
							loading: "lazy",
							className: "h-64 w-full object-cover lg:h-[340px]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow",
								children: [
									destaque.category,
									" · ",
									destaque.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-3xl leading-snug text-graphite",
								children: destaque.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-[13px] leading-relaxed text-gray-medio",
								children: destaque.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/blog/$slug",
								params: { slug: destaque.slug },
								className: "btn-base btn-secondary mt-8 w-fit",
								children: ["Ler artigo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-gray-neutro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: restantes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-hover media-zoom border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.cover,
								alt: p.title,
								loading: "lazy",
								className: "h-44 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-6 pb-7 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] tracking-[0.2em] uppercase text-gray-medio",
										children: [
											p.category,
											" · ",
											p.readTime
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-lg leading-snug text-graphite",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-[13px] leading-relaxed text-gray-medio",
										children: p.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/blog/$slug",
										params: { slug: p.slug },
										className: "mt-5 inline-flex items-center gap-2 border-b border-graphite pb-0.5 text-[12px] text-graphite",
										children: ["Ler artigo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						}, p.slug))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { BlogIndex as component };
