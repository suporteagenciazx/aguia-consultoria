globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/blog.index-CgozVQ7V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc4-mTK2B3fMx/2TPOyQeGN9X0wwNvE\"",
		"mtime": "2026-09-01T15:02:46.235Z",
		"size": 3012,
		"path": "../public/assets/blog.index-CgozVQ7V.js"
	},
	"/assets/about-glass-DFPJBSn5.jpg": {
		"type": "image/jpeg",
		"etag": "\"214cf-QsFMWIKbRL0WUsQxtFvwpzDGoGA\"",
		"mtime": "2026-09-01T15:02:46.236Z",
		"size": 136399,
		"path": "../public/assets/about-glass-DFPJBSn5.jpg"
	},
	"/assets/blog._slug-M0yqM9wi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca0-RtxKYtzq1+1PFrAk56HOK5WA/68\"",
		"mtime": "2026-09-01T15:02:46.234Z",
		"size": 3232,
		"path": "../public/assets/blog._slug-M0yqM9wi.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1b3e-1fJR75HITw4YHzoechGcWXnH3LI\"",
		"mtime": "2026-08-31T19:53:36.637Z",
		"size": 6974,
		"path": "../public/favicon.png"
	},
	"/assets/arrow-left-DDUvge3C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-/TvK5Ev1L9PSqm89RfISoZQ4N+s\"",
		"mtime": "2026-09-01T15:02:46.234Z",
		"size": 162,
		"path": "../public/assets/arrow-left-DDUvge3C.js"
	},
	"/assets/hero-arch--SKOL381.jpg": {
		"type": "image/jpeg",
		"etag": "\"abc4-gnwOYAeHRSc8QzDz3G/ymxAbwYo\"",
		"mtime": "2026-09-01T15:02:46.238Z",
		"size": 43972,
		"path": "../public/assets/hero-arch--SKOL381.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-08-31T19:53:36.643Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/exec-window-CCtz8ZK_.jpg": {
		"type": "image/jpeg",
		"etag": "\"e719-ZXvmJ3VUt4RnT+IfKQm8zIAR93I\"",
		"mtime": "2026-09-01T15:02:46.238Z",
		"size": 59161,
		"path": "../public/assets/exec-window-CCtz8ZK_.jpg"
	},
	"/assets/logo-horizontal-B6Bbxj8I.png": {
		"type": "image/png",
		"etag": "\"da35-zy0DlWuZYHYlRLpssI4CISXxOnU\"",
		"mtime": "2026-09-01T15:02:46.239Z",
		"size": 55861,
		"path": "../public/assets/logo-horizontal-B6Bbxj8I.png"
	},
	"/assets/routes-ISp5TrJj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76e7-OvKZC++sp0Ku7pb7ie3af54p3aQ\"",
		"mtime": "2026-09-01T15:02:46.235Z",
		"size": 30439,
		"path": "../public/assets/routes-ISp5TrJj.js"
	},
	"/assets/logo-aguia-BZsjHTEY.png": {
		"type": "image/png",
		"etag": "\"b00d-7PpKFxTsvLHr7dDOhFbE7GsVzfo\"",
		"mtime": "2026-09-01T15:02:46.239Z",
		"size": 45069,
		"path": "../public/assets/logo-aguia-BZsjHTEY.png"
	},
	"/assets/index-CdZwpWQf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"574e4-luR1Xp6sbatjxC+DDg2osUeBBVI\"",
		"mtime": "2026-09-01T15:02:46.234Z",
		"size": 357604,
		"path": "../public/assets/index-CdZwpWQf.js"
	},
	"/assets/styles-DFay5Vdy.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"166d9-uGQno4jVcd0F/bfORg+7F3Q1a4U\"",
		"mtime": "2026-09-01T15:02:46.239Z",
		"size": 91865,
		"path": "../public/assets/styles-DFay5Vdy.css"
	},
	"/assets/team-woman-1-CG_S-ykQ.jpg": {
		"type": "image/jpeg",
		"etag": "\"17495-Edtc3BvMu5IlvrQNfqMjr+hTPw4\"",
		"mtime": "2026-09-01T15:02:46.240Z",
		"size": 95381,
		"path": "../public/assets/team-woman-1-CG_S-ykQ.jpg"
	},
	"/assets/team-man-2-B6bsp6Bz.jpg": {
		"type": "image/jpeg",
		"etag": "\"9b36-SAVIlgrxdzZRt/RZvECF/susKjM\"",
		"mtime": "2026-09-01T15:02:46.240Z",
		"size": 39734,
		"path": "../public/assets/team-man-2-B6bsp6Bz.jpg"
	},
	"/assets/team-andre-luiz-NFq2xYCm.png": {
		"type": "image/png",
		"etag": "\"1deaf-vK/55HiwLOm+6D7WHpC7KsOfMjM\"",
		"mtime": "2026-09-01T15:02:46.240Z",
		"size": 122543,
		"path": "../public/assets/team-andre-luiz-NFq2xYCm.png"
	},
	"/assets/WhatsAppFloat-D1qnulm5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3bb2-7vAHkY7SHS1stBNjuw9UaIV9cRw\"",
		"mtime": "2026-09-01T15:02:46.234Z",
		"size": 15282,
		"path": "../public/assets/WhatsAppFloat-D1qnulm5.js"
	},
	"/assets/cofecon-CvsCjvgp.png": {
		"type": "image/png",
		"etag": "\"96483-f7Li3q3dWQL5x3z33qHKzN+KrNM\"",
		"mtime": "2026-09-01T15:02:46.237Z",
		"size": 615555,
		"path": "../public/assets/cofecon-CvsCjvgp.png"
	},
	"/assets/team-woman-4-DKTaIkae.jpg": {
		"type": "image/jpeg",
		"etag": "\"16e13-M5bt6T3k7vU4MPRv1/tpB6kyFB8\"",
		"mtime": "2026-09-01T15:02:46.242Z",
		"size": 93715,
		"path": "../public/assets/team-woman-4-DKTaIkae.jpg"
	},
	"/assets/team-woman-2-Q6fm40FO.jpg": {
		"type": "image/jpeg",
		"etag": "\"27074-+DGPoA4372DTvaZCe5+CtedMPw8\"",
		"mtime": "2026-09-01T15:02:46.241Z",
		"size": 159860,
		"path": "../public/assets/team-woman-2-Q6fm40FO.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_UE1oyU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_UE1oyU
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
