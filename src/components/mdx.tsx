import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export function Mdx({ source }: { source: string }) {
  return (
    <article className="prose prose-invert mx-auto w-full max-w-3xl leading-7 prose-headings:tracking-tight prose-p:text-slate-300 prose-li:text-slate-300">
      <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </article>
  );
}

