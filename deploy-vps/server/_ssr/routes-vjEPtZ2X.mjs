import { r as __toESM } from "../_runtime.mjs";
import { n as exec_window_default, r as hero_arch_default, t as about_glass_default } from "./exec-window-77mGWLV9.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as ArrowLeft, _ as ChartColumn, a as Quote, c as Minus, d as Mail, f as Layers, g as Compass, h as Eye, i as Shield, m as Gauge, n as TrendingUp, o as Plus, r as Target, s as Phone, u as MapPin, v as Building2, x as ArrowRight, y as BadgeCheck } from "../_libs/lucide-react.mjs";
import { a as siteConfig, i as logo_aguia_default, n as SiteHeader, o as whatsappLink, r as WhatsAppFloat, t as SiteFooter } from "./WhatsAppFloat-TXS23GdC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vjEPtZ2X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var team_woman_1_default = "/assets/team-woman-1-CG_S-ykQ.jpg";
var team_woman_2_default = "/assets/team-woman-2-Q6fm40FO.jpg";
var team_woman_3_default = "/assets/team-woman-1-CG_S-ykQ.jpg";
var team_woman_4_default = "/assets/team-woman-4-DKTaIkae.jpg";
var team_andre_luiz_default = "/assets/team-andre-luiz-NFq2xYCm.png";
var team_man_2_default = "/assets/team-man-2-B6bsp6Bz.jpg";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: 767px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
var essencias = [
	{
		icon: Shield,
		title: "Confiança",
		text: "Segurança e solidez em cada decisão."
	},
	{
		icon: Eye,
		title: "Visão",
		text: "Ampla perspectiva para enxergar o futuro."
	},
	{
		icon: Target,
		title: "Estratégia",
		text: "Inteligência para transformar informação em vantagem."
	},
	{
		icon: Compass,
		title: "Autonomia",
		text: "Soluções que fortalecem a independência e o controle."
	},
	{
		icon: Shield,
		title: "Força",
		text: "Presença, liderança e resultados consistentes."
	}
];
var servicos = [
	{
		icon: Layers,
		title: "Estratégia Empresarial",
		text: "Diagnóstico, posicionamento e planejamento para crescimento sustentável."
	},
	{
		icon: Target,
		title: "Inteligência de Negócios",
		text: "Dados e análises que geram clareza para decisões mais assertivas."
	},
	{
		icon: Gauge,
		title: "Governança e Performance",
		text: "Estruturas e processos que garantem eficiência e resultados consistentes."
	},
	{
		icon: Compass,
		title: "Gestão de Riscos",
		text: "Antecipação de cenários e proteção para decisões com mais segurança."
	},
	{
		icon: TrendingUp,
		title: "M&A e Crescimento",
		text: "Apoio estratégico em fusões, aquisições e expansão de negócios."
	}
];
var metodologia = [
	{
		n: "01",
		title: "Diagnóstico",
		text: "Entendemos o negócio, os desafios e as oportunidades."
	},
	{
		n: "02",
		title: "Análise",
		text: "Transformamos dados em insights aplicáveis e relevantes."
	},
	{
		n: "03",
		title: "Estratégia",
		text: "Desenhamos caminhos personalizados para cada realidade."
	},
	{
		n: "04",
		title: "Implementação",
		text: "Apoiamos a execução com método, disciplina e acompanhamento."
	},
	{
		n: "05",
		title: "Evolução",
		text: "Monitoramos resultados e ajustamos rotas para gerar valor contínuo."
	}
];
var equipe = [
	{
		img: team_andre_luiz_default,
		name: siteConfig.economistaChefe.fullName,
		short: siteConfig.economistaChefe.name,
		role: siteConfig.economistaChefe.role,
		specialty: siteConfig.economistaChefe.specialty,
		register: siteConfig.economistaChefe.register,
		bio: siteConfig.economistaChefe.bio,
		chief: true
	},
	{
		img: team_woman_2_default,
		name: "Michelle Cristina Reis Flaminio",
		short: "Michelle Cristina",
		role: "Economista",
		specialty: "Gestão Econômico-Financeira e Controladoria",
		register: "CORECON-SP 37795",
		bio: "Responsável por análises econômicas aplicadas à gestão empresarial, com ênfase em controladoria e indicadores de desempenho.",
		chief: false
	},
	{
		img: team_man_2_default,
		name: "Gabriel Alves da Silva",
		short: "Gabriel Alves",
		role: "Economista",
		specialty: "Análise Financeira e Modelagem Econômica",
		register: "CORECON-SP 38362",
		bio: "Especialista em análise financeira e modelagem econômica, com atuação em projeções e estudos de viabilidade.",
		chief: false
	},
	{
		img: team_woman_3_default,
		name: "Paloma Leite Freitas",
		short: "Paloma Leite",
		role: "Economista",
		specialty: "Gestão de Custos e Orçamento Empresarial",
		register: "CORECON-SP 37100",
		bio: "Atua com foco em gestão de custos, estruturação orçamentária e análise de rentabilidade para maior eficiência operacional.",
		chief: false
	},
	{
		img: team_woman_4_default,
		name: "Fernanda Bernadete da Silva",
		short: "Fernanda Bernadete",
		role: "Economista",
		specialty: "Análise Econômica e Planejamento Estratégico",
		register: "CORECON-SP 34943",
		bio: "Especialista em análise econômica aplicada ao planejamento estratégico, com atuação em estudos de mercado e projeções financeiras.",
		chief: false
	}
];
var banners = [
	{
		img: about_glass_default,
		eyebrow: "Nossa essência",
		title: "Experiência que gera confiança.",
		text: "Mais de 20 anos apoiando líderes na tomada de decisões críticas com método e clareza."
	},
	{
		img: exec_window_default,
		eyebrow: "Nossa atuação",
		title: "Estratégia que transforma resultados.",
		text: "Diagnóstico, plano e execução acompanhados de perto por especialistas registrados."
	},
	{
		img: hero_arch_default,
		eyebrow: "Nosso compromisso",
		title: "Decisões seguras, crescimento sustentável.",
		text: "Inteligência de negócios e governança para crescer com segurança e previsibilidade."
	}
];
var unidades = [
	{
		city: "São Paulo",
		lines: [
			"Av. Paulista, 1000 — 8º andar",
			"Bela Vista — São Paulo, SP",
			"CEP 01310-100"
		],
		map: "Av. Paulista, 1000, Bela Vista, São Paulo - SP, 01310-100"
	},
	{
		city: "Santa Catarina",
		lines: [
			"Rua Angelo Dias, 207, Sala 22",
			"Centro — Blumenau, SC",
			"CEP 89010-020"
		],
		map: "Rua Angelo Dias, 207, Centro, Blumenau - SC, 89010-020"
	},
	{
		city: "Rio de Janeiro",
		lines: [
			"Av. Saquarema, 567",
			"Centro — Saquarema, RJ",
			"Atendimento com hora marcada"
		],
		map: "Avenida Saquarema, 567, Centro, Saquarema - RJ"
	}
];
var cases = [
	{
		icon: Shield,
		title: "Consultoria Estratégica",
		text: "Soluções sob medida para desafios complexos.",
		img: hero_arch_default
	},
	{
		icon: Target,
		title: "Inteligência de Negócios",
		text: "Transformamos dados em decisões com impacto.",
		img: about_glass_default
	},
	{
		icon: ChartColumn,
		title: "Gestão e Performance",
		text: "Estratégias que impulsionam eficiência e crescimento.",
		img: exec_window_default
	}
];
var faq = [
	{
		q: "Como funciona o processo de consultoria?",
		a: "Nosso processo é dividido em diagnóstico, estratégia, execução e acompanhamento. Trabalhamos lado a lado com sua equipe para entregar resultados sustentáveis."
	},
	{
		q: "Quais áreas a Águia Consultoria atende?",
		a: "Atuamos em estratégia empresarial, inteligência de negócios, governança, gestão de riscos, planejamento financeiro e M&A."
	},
	{
		q: "Vocês atendem empresas de outros portes?",
		a: "Sim. Adaptamos escopo e metodologia para empresas de médio e grande porte, respeitando o momento e a maturidade de cada organização."
	}
];
function Index() {
	(0, import_react.useEffect)(() => {
		const els = Array.from(document.querySelectorAll("section > div, section > img, section article")).filter((el) => !el.closest("[data-no-reveal]"));
		els.forEach((el) => el.setAttribute("data-reveal", ""));
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const el = entry.target;
				const siblings = Array.from(el.parentElement?.children ?? []);
				const idx = Math.min(siblings.indexOf(el), 5);
				el.style.setProperty("--reveal-delay", `${idx * 90}ms`);
				el.classList.add("is-visible");
				io.unobserve(el);
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [flipped, setFlipped] = (0, import_react.useState)(null);
	const perView = useIsMobile() ? 1 : 3;
	const maxIdx = Math.max(0, equipe.length - perView);
	const [teamIdx, setTeamIdx] = (0, import_react.useState)(0);
	const move = (0, import_react.useCallback)((dir) => {
		setFlipped(null);
		setTeamIdx((i) => Math.min(maxIdx, Math.max(0, i + dir)));
	}, [maxIdx]);
	(0, import_react.useEffect)(() => {
		setTeamIdx((i) => Math.min(i, maxIdx));
	}, [maxIdx]);
	const [banner, setBanner] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setBanner((b) => (b + 1) % banners.length), 5500);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "home",
		className: "page-in min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-gray-neutro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_arch_default,
						alt: "Arquitetura corporativa moderna em preto e branco",
						width: 1200,
						height: 756,
						decoding: "async",
						fetchPriority: "high",
						className: "absolute inset-y-0 right-0 h-full w-full object-cover opacity-25 lg:w-[62%] lg:opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_minmax(0,540px)] lg:px-10 lg:py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-4xl leading-[1.12] text-graphite sm:text-5xl",
									children: ["Estratégia com visão.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-gray-medio",
										children: "Resultados com propósito."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-7 h-px w-24 bg-gray-claro" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-md text-sm leading-relaxed text-gray-chumbo",
									children: "A Águia Consultoria transforma informação em vantagem competitiva para empresas que desejam crescer com segurança, eficiência e clareza."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappLink,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "btn-base btn-primary",
										children: "Falar com especialista"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#servicos",
										className: "btn-base btn-secondary",
										children: "Conheça nossos serviços"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3 sm:gap-4",
							children: [[
								{
									img: team_woman_1_default,
									alt: "Consultora sênior da Águia Consultoria",
									up: true
								},
								{
									img: team_andre_luiz_default,
									alt: "Economista chefe da Águia Consultoria",
									up: false
								},
								{
									img: team_woman_2_default,
									alt: "Especialista em controladoria empresarial",
									up: true
								}
							].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: `media-zoom card-hover border border-border bg-card ${p.up ? "lg:-translate-y-6" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.alt,
									loading: "eager",
									decoding: "async",
									width: 900,
									height: 1350,
									className: "h-44 w-full object-cover object-top grayscale transition-all duration-700 hover:grayscale-0 sm:h-64 lg:h-72"
								})
							}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-3 mt-2 flex items-center gap-3 border border-border bg-background/80 px-5 py-4 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-5 w-5 shrink-0 stroke-[1.25] text-gray-chumbo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] leading-relaxed text-gray-chumbo",
									children: "Equipe multidisciplinar de economistas e consultores registrados, dedicada a cada projeto."
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative border-t border-border bg-background/80 backdrop-blur-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 px-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-10",
							children: essencias.map((e, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex items-start gap-3 py-6 ${idx > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "mt-0.5 h-6 w-6 shrink-0 stroke-[1.25] text-gray-chumbo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-[15px] text-graphite",
										children: e.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] leading-relaxed text-gray-medio",
										children: e.text
									})]
								})]
							}, e.title))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "servicos",
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[320px_1fr] lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Nossos serviços"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-display text-3xl leading-snug text-graphite",
						children: [
							"Soluções estratégicas",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gray-medio",
								children: "para empresas que querem ir além."
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0",
						children: servicos.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `group px-0 py-4 transition-transform duration-500 hover:-translate-y-1.5 sm:px-6 lg:px-6 ${idx > 0 ? "sm:border-l sm:border-border" : ""} ${idx === 2 ? "lg:border-l" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-7 w-7 stroke-[1.25] text-gray-chumbo transition-all duration-500 group-hover:scale-110 group-hover:text-graphite" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-[15px] text-graphite",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[12px] leading-relaxed text-gray-medio",
									children: s.text
								})
							]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "metodologia",
				className: "border-t border-border bg-gray-neutro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-10 px-5 py-20 lg:grid-cols-[320px_1fr] lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Nossa metodologia"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl leading-snug text-graphite",
						children: "Um processo claro. Decisões melhores. Resultados reais."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4",
						children: metodologia.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-4xl text-gray-claro",
									children: m.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-[15px] text-graphite",
									children: m.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[12px] leading-relaxed text-gray-medio",
									children: m.text
								}),
								idx < metodologia.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "absolute -right-2 top-6 hidden h-4 w-4 text-gray-claro lg:block" })
							]
						}, m.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "equipe",
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-5 py-20 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Nossos especialistas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 max-w-2xl font-display text-3xl leading-snug text-graphite",
							children: [
								"Equipe com experiência prática",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gray-medio",
									children: "e visão de negócio."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-[13px] leading-relaxed text-gray-medio",
							children: "Profissionais habilitados e registrados, com atuação em economia aplicada, controladoria e estratégia empresarial."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center justify-end gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => move(-1),
								disabled: teamIdx === 0,
								"aria-label": "Especialistas anteriores",
								className: "grid h-11 w-11 place-items-center rounded-full border border-border text-graphite transition-colors hover:bg-graphite hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-graphite",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => move(1),
								disabled: teamIdx >= maxIdx,
								"aria-label": "Próximos especialistas",
								className: "grid h-11 w-11 place-items-center rounded-full border border-border text-graphite transition-colors hover:bg-graphite hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-graphite",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 overflow-hidden",
							"data-no-reveal": true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "carousel-track",
								style: { transform: `translateX(-${teamIdx * (100 / perView)}%)` },
								children: equipe.map((p) => {
									const isOpen = flipped === p.name;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full shrink-0 px-0 sm:px-3 md:w-1/3",
										style: { width: `${100 / perView}%` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "group relative h-[540px] overflow-hidden border border-border bg-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "media-zoom flex h-full flex-col",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative overflow-hidden",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: p.img,
														alt: `${p.name}, ${p.role}`,
														loading: "lazy",
														decoding: "async",
														width: 900,
														height: 1350,
														className: "h-80 w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
													}), p.chief && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute left-4 top-4 bg-graphite px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-white",
														children: "Economista Chefe"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-1 flex-col px-6 pb-7 pt-6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "font-display text-lg text-graphite",
															children: p.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 text-[12px] text-gray-medio",
															children: p.role
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-4 h-px w-12 bg-gray-claro" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[12px] leading-relaxed text-gray-medio",
															children: p.specialty
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															type: "button",
															onClick: () => setFlipped(p.name),
															className: "btn-base btn-secondary mt-auto w-full",
															children: ["Trajetória ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
														})
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												"aria-hidden": !isOpen,
												className: `absolute inset-0 flex flex-col bg-graphite px-7 py-8 text-white transition-all duration-500 ${isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] tracking-[0.22em] uppercase text-white/45",
														children: "Trajetória"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-4 font-display text-xl text-white",
														children: p.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-[12px] text-white/55",
														children: p.role
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 h-px w-12 bg-white/25" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
														className: "space-y-3 text-[12px]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
															className: "text-[10px] tracking-[0.2em] uppercase text-white/45",
															children: "Especialidade"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
															className: "mt-1 text-white/80",
															children: p.specialty
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
															className: "text-[10px] tracking-[0.2em] uppercase text-white/45",
															children: "Registro"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
															className: "mt-1 whitespace-pre-line text-white/80",
															children: p.register
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-5 text-[12px] leading-relaxed text-white/70",
														children: p.bio
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setFlipped(null),
														className: "btn-base btn-light mt-auto w-full",
														tabIndex: isOpen ? 0 : -1,
														children: "Voltar"
													})
												]
											})]
										})
									}, p.name);
								})
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "sobre",
				className: "grid grid-cols-1 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-72 overflow-hidden bg-graphite lg:h-full",
					children: [banners.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `banner-slide ${i === banner ? "banner-slide-active" : ""}`,
						"aria-hidden": i !== banner,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.img,
								alt: b.title,
								loading: i === 0 ? "eager" : "lazy",
								decoding: "async",
								width: 1200,
								height: 1008,
								className: "h-full w-full object-cover grayscale"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-graphite/90 via-graphite/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-7 lg:p-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.22em] uppercase text-white/60",
										children: b.eyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 max-w-md font-display text-2xl leading-snug text-white",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-md text-[12px] leading-relaxed text-white/70",
										children: b.text
									})
								]
							})
						]
					}, b.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-5 right-6 z-10 flex gap-2",
						children: banners.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setBanner(i),
							"aria-label": `Ver banner ${i + 1}`,
							className: `h-1 rounded-full transition-all duration-500 ${i === banner ? "w-8 bg-white" : "w-3 bg-white/40"}`
						}, b.title))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-graphite px-5 py-16 text-white lg:px-16 lg:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-[0.22em] uppercase text-white/50",
							children: "Sobre nós"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-3xl leading-snug text-white",
							children: ["Experiência que gera confiança.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "Estratégia que transforma."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-[13px] leading-relaxed text-white/65",
							children: "A Águia Consultoria nasceu com o propósito de apoiar líderes e organizações na tomada de decisões críticas. Combinamos visão estratégica, conhecimento técnico e experiência prática para entregar soluções que geram impacto real e duradouro."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid grid-cols-2 gap-y-8 sm:grid-cols-4",
							children: [
								["+15", "Anos de experiência"],
								["+200", "Projetos realizados"],
								["+80", "Empresas atendidas"],
								["95%", "Índice de satisfação"]
							].map(([v, l], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: i > 0 ? "sm:border-l sm:border-white/15 sm:pl-6" : "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-3xl text-white",
									children: v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] text-white/55",
									children: l
								})]
							}, v))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cases",
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-5 py-20 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Soluções estratégicas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 max-w-2xl font-display text-3xl leading-snug text-graphite",
							children: "Cases que traduzem método em resultado."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-8 md:grid-cols-3",
							children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group card-hover media-zoom border border-border bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.title,
									loading: "lazy",
									width: 1e3,
									height: 700,
									className: "h-52 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative px-6 pb-7 pt-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-6 left-6 grid h-11 w-11 place-items-center rounded-full border border-border bg-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 stroke-[1.25] text-gray-chumbo" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg text-graphite",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-[13px] leading-relaxed text-gray-medio",
											children: c.text
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: whatsappLink,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-5 inline-flex items-center gap-2 border-b border-graphite pb-0.5 text-[12px] text-graphite",
											children: ["Saiba mais ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})
									]
								})]
							}, c.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "insights",
				className: "border-t border-border bg-gray-neutro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Depoimentos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-gray-claro" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-display text-lg leading-relaxed text-graphite",
								children: "“A Águia Consultoria foi essencial para redesenharmos nossa estratégia com clareza e foco. Resultados consistentes e parceria de confiança.”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-[13px] font-semibold text-graphite",
								children: "Mariana Oliveira"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-gray-medio",
								children: "Diretora de Estratégia · Grupo Horizonte"
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "FAQ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 border border-border bg-card",
						children: faq.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border last:border-b-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenFaq(openFaq === i ? null : i),
								className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[13px] font-medium text-graphite",
									children: f.q
								}), openFaq === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4 shrink-0 text-gray-medio" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 shrink-0 text-gray-medio" })]
							}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 pb-6 text-[13px] leading-relaxed text-gray-medio",
								children: f.a
							})]
						}, f.q))
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contato",
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr] lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Formulário de contato"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl leading-snug text-graphite",
							children: "Vamos conversar sobre o próximo passo da sua empresa."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-10 grid gap-4 sm:grid-cols-2",
							onSubmit: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "border border-border bg-background px-4 py-3 text-[13px] outline-none focus:border-gray-chumbo",
									placeholder: "Nome completo",
									"aria-label": "Nome completo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "border border-border bg-background px-4 py-3 text-[13px] outline-none focus:border-gray-chumbo",
									placeholder: "E-mail corporativo",
									"aria-label": "E-mail corporativo",
									type: "email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "border border-border bg-background px-4 py-3 text-[13px] outline-none focus:border-gray-chumbo",
									placeholder: "Empresa",
									"aria-label": "Empresa"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "border border-border bg-background px-4 py-3 text-[13px] outline-none focus:border-gray-chumbo",
									placeholder: "Telefone",
									"aria-label": "Telefone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									className: "border border-border bg-background px-4 py-3 text-[13px] outline-none focus:border-gray-chumbo sm:col-span-2",
									placeholder: "Como podemos ajudar?",
									"aria-label": "Mensagem"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-start gap-2 text-[12px] text-gray-medio sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											className: "mt-0.5 accent-graphite"
										}),
										"Li e concordo com a ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "underline",
											children: "Política de Privacidade"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "btn-base btn-primary sm:w-fit",
									children: "Enviar mensagem"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "border border-border bg-gray-neutro p-8 lg:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_aguia_default,
								alt: "",
								width: 256,
								height: 256,
								loading: "lazy",
								className: "h-14 w-14 object-contain opacity-80"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-display text-2xl leading-snug text-graphite",
								children: "Pronto para transformar estratégia em resultado?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[13px] leading-relaxed text-gray-chumbo",
								children: "Fale com nossos especialistas e descubra como podemos apoiar sua empresa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappLink,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-base btn-secondary mt-8",
								children: ["Falar com especialista ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 space-y-3 border-t border-border pt-8 text-[13px] text-gray-chumbo",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gray-medio" }),
											" ",
											siteConfig.displayPhone
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gray-medio" }),
											" ",
											siteConfig.email
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gray-medio" }), "Av. Paulista, 1000 — 8º andar · São Paulo — SP · 01310-100"]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "unidades",
				className: "border-t border-border bg-gray-neutro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-5 py-20 lg:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Nossas localizações"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-5 max-w-2xl font-display text-3xl leading-snug text-graphite",
							children: ["Presença estratégica ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gray-medio",
								children: "em três estados."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-8 md:grid-cols-3",
							children: unidades.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "card-hover border border-border bg-card p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 place-items-center rounded-full border border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-5 w-5 stroke-[1.25] text-gray-chumbo" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "mt-6 font-display text-xl text-graphite",
										children: ["Águia ", u.city]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 h-px w-12 bg-gray-claro" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
										className: "space-y-1.5 text-[13px] not-italic leading-relaxed text-gray-medio",
										children: u.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: l }, l))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 overflow-hidden border border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											title: `Mapa — Águia ${u.city}`,
											src: `https://www.google.com/maps?q=${encodeURIComponent(u.map)}&output=embed`,
											loading: "lazy",
											referrerPolicy: "no-referrer-when-downgrade",
											className: "h-56 w-full grayscale transition-all duration-700 hover:grayscale-0"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: whatsappLink,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-6 inline-flex items-center gap-2 border-b border-graphite pb-0.5 text-[12px] text-graphite",
										children: ["Agendar atendimento ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							}, u.city))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 lg:grid-cols-2 lg:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 stroke-[1.25] text-gray-chumbo" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-graphite",
								children: "Receba insights exclusivos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[13px] text-gray-medio",
								children: "Assine nossa newsletter e fique por dentro de conteúdos que geram valor para o seu negócio."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex gap-3",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							"aria-label": "Seu melhor e-mail",
							placeholder: "Seu melhor e-mail",
							className: "min-w-0 flex-1 border border-border bg-background px-4 py-3 text-[13px] outline-none focus:border-gray-chumbo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							"aria-label": "Assinar",
							className: "btn-base btn-primary px-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { Index as component };
