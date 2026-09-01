import { t as getPost } from "./posts-Cy73Pes2.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BEfIsmnj.js
var $$splitComponentImporter = () => import("./blog._slug-X5jzZlUw.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Artigo indisponível | Águia Consultoria" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { post } = loaderData;
		return { meta: [
			{ title: `${post.title} | Blog Águia Consultoria` },
			{
				name: "description",
				content: post.excerpt
			},
			{
				property: "og:title",
				content: post.title
			},
			{
				property: "og:description",
				content: post.excerpt
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
