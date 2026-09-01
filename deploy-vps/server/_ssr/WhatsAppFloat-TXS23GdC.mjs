import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowUp, d as Mail, l as Menu, p as Handshake, s as Phone, t as X, u as MapPin, v as Building2, x as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhatsAppFloat-TXS23GdC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_horizontal_default = "/assets/logo-horizontal-B6Bbxj8I.png";
/**
* ============================================================
*  CONFIGURAÇÃO DO SITE — edite apenas os valores abaixo
* ============================================================
*/
var siteConfig = {
	/** Número de WhatsApp usado em TODOS os botões (DDI 55 + DDD + número, só dígitos) */
	whatsappNumber: "5511941290842",
	/** Mensagem que já vem preenchida ao abrir a conversa */
	whatsappMessage: "Olá! Gostaria de falar com um especialista da Águia Consultoria.",
	/** Telefone exibido no rodapé e na área de contato */
	displayPhone: "+55 (11) 94129-0842",
	/** E-mail de contato */
	email: "contato@aguiaempresarial.com",
	/** Economista Chefe exibido na seção de equipe */
	economistaChefe: {
		name: "André Luiz",
		fullName: "André Luiz Koerich",
		role: "Economista Chefe",
		specialty: "Acompanhamento e Liberação de Crédito Empresarial",
		register: "CORECON-SC 3621\nCOFECON 091",
		bio: "Profissional com ampla experiência em economia aplicada e consultoria estratégica empresarial, atuando no assessoramento econômico de empresas de médio e grande porte."
	}
};
/** Link simples do WhatsApp (usado por todos os botões) */
var whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}`;
var nav = [
	{
		label: "Home",
		href: "/#home"
	},
	{
		label: "Sobre nós",
		href: "/#sobre"
	},
	{
		label: "Serviços",
		href: "/#servicos"
	},
	{
		label: "Metodologia",
		href: "/#metodologia"
	},
	{
		label: "Equipe",
		href: "/#equipe"
	},
	{
		label: "Unidades",
		href: "/#unidades"
	},
	{
		label: "Blog",
		href: "/blog"
	},
	{
		label: "Contato",
		href: "/#contato"
	}
];
function SiteHeader() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-graphite text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2.5 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[10px] tracking-[0.2em] uppercase text-white/70",
				children: "Estratégia com visão. Resultados com propósito."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center gap-5 text-[10px] tracking-[0.2em] uppercase text-white/70 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contato",
						className: "hover:text-white",
						children: "Cliente"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/25",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "hover:text-white",
						children: "Blog"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/25",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contato",
						className: "hover:text-white",
						children: "Carreiras"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-white/25",
						children: "|"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contato",
						"aria-label": "E-mail",
						className: "hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" })
					})
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:flex lg:justify-between lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-w-0 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_horizontal_default,
						alt: "Águia Consultoria",
						width: 480,
						height: 160,
						className: "h-11 w-auto shrink-0 object-contain transition-transform duration-500 hover:scale-105"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					children: nav.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: i.href,
						className: "nav-link pb-1 text-[13px] text-gray-chumbo transition-colors hover:text-graphite",
						children: i.label
					}, i.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "btn-base btn-primary hidden lg:inline-flex",
					children: "Falar com especialista"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Abrir menu",
					"aria-expanded": menuOpen,
					onClick: () => setMenuOpen((v) => !v),
					className: "menu-toggle shrink-0 p-2 text-graphite lg:hidden",
					"data-open": menuOpen,
					children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mobile-menu lg:hidden",
			"data-open": menuOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "overflow-hidden border-t border-border bg-background px-5 py-4",
				children: [nav.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: i.href,
					onClick: () => setMenuOpen(false),
					style: { "--stagger": `${60 + idx * 55}ms` },
					className: "menu-item block border-b border-border py-3 text-sm text-gray-chumbo",
					children: i.label
				}, i.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink,
					target: "_blank",
					rel: "noopener noreferrer",
					style: { "--stagger": `${60 + nav.length * 55}ms` },
					className: "menu-item btn-base btn-primary mt-4 w-full",
					children: "Falar com especialista"
				})]
			})
		})]
	})] });
}
var logo_aguia_default = "/assets/logo-aguia-BZsjHTEY.png";
var cofecon_default = "/assets/cofecon-CvsCjvgp.png";
var solucoes = [
	"Estratégia Empresarial",
	"Inteligência de Negócios",
	"Governança e Performance",
	"Gestão de Riscos",
	"M&A e Crescimento",
	"Planejamento Financeiro"
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-graphite text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 32 32",
								className: "h-5 w-5 fill-white/80",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.71-12.81-12.71Zm0 23.03h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.55 10.55 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.78 10.5-10.76 10.5Zm5.84-7.87c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-white",
							children: "Atendimento direto no WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-[13px] text-white/60",
							children: "Fale agora com um especialista e receba um diagnóstico inicial sem compromisso."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappLink,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "btn-base wa-btn w-full shrink-0 rounded-full lg:w-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 32 32",
								className: "h-4 w-4 shrink-0 fill-current",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.71-12.81-12.71Zm0 23.03h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.55 10.55 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.78 10.5-10.76 10.5Zm5.84-7.87c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" })
							}),
							"Falar no WhatsApp ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_aguia_default,
								alt: "Águia Consultoria",
								width: 256,
								height: 256,
								loading: "lazy",
								className: "h-12 w-12 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg text-white",
									children: "Águia"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-sm text-white/60",
									children: "Consultoria"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-[12px] leading-relaxed text-white/55",
							children: [
								"Estratégia com visão.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Resultados com propósito."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 inline-flex flex-col gap-2 rounded-md bg-white/95 px-6 py-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cofecon_default,
								alt: "Selo COFECON — Conselho Federal de Economia",
								width: 320,
								height: 100,
								loading: "lazy",
								decoding: "async",
								className: "h-20 w-auto object-contain sm:h-24"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.22em] uppercase text-white/40",
						children: "Navegação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-[13px] text-white/65",
						children: nav.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: i.href,
							className: "hover:text-white",
							children: i.label
						}) }, i.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.22em] uppercase text-white/40",
						children: "Soluções"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5 text-[13px] text-white/65",
						children: solucoes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#servicos",
							className: "hover:text-white",
							children: s
						}) }, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.22em] uppercase text-white/40",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3 text-[13px] text-white/65",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-white/40" }),
									" ",
									siteConfig.displayPhone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-white/40" }),
									" ",
									siteConfig.email
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Av. Paulista, 1000 — 8º andar",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"São Paulo — SP · 01310-100"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Rua Angelo Dias, 207, Sala 22",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Centro — Blumenau/SC · 89010-020"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-white/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Av. Saquarema, 567",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Centro — Saquarema/RJ"
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "h-4 w-4 text-white/40" }), " Parcerias institucionais"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-white/40" }), " CNPJ 04.848.916/0001-57"]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-6 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-white/45",
						children: "© 2024 Águia Consultoria. Todos os direitos reservados."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "home",
						"aria-label": "Voltar ao topo",
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white/70 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
					})]
				})
			})
		]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Falar no WhatsApp",
		className: "wa-float group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border px-4 py-3.5 shadow-[0_16px_40px_rgba(15,18,21,0.25)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "wa-pulse",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				className: "h-6 w-6 shrink-0 fill-current",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.8-5.74 12.8-12.8s-5.75-12.71-12.81-12.71Zm0 23.03h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.55 10.55 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.78 10.5-10.76 10.5Zm5.84-7.87c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden text-[11px] font-semibold uppercase tracking-[0.14em] sm:block",
				children: "Falar no WhatsApp"
			})
		]
	});
}
//#endregion
export { siteConfig as a, logo_aguia_default as i, SiteHeader as n, whatsappLink as o, WhatsAppFloat as r, SiteFooter as t };
