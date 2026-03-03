import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export function Mdx({ source }: { source: string }) {
  return (
    <article className="prose prose-invert max-w-none prose-headings:tracking-tight prose-p:text-slate-300">
      <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </article>
  );
}

