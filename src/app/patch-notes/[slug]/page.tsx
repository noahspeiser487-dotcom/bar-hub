import { notFound } from "next/navigation";
import { getPatchNotes } from "@/lib/content";
import { Mdx } from "@/components/mdx";

export async function generateStaticParams() {
  const items = await getPatchNotes();
  return items.map((item) => ({ slug: item.slug }));
}

export default async function PatchDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = (await getPatchNotes()).find((entry) => entry.slug === slug);
  if (!item) return notFound();

  return (
    <div className="card mx-auto w-full max-w-4xl space-y-6 p-6 md:p-8">
      <p className="kicker">{item.version} · {item.publishedAt}</p>
      <h1 className="h2">{item.title}</h1>
      <Mdx source={item.content} />
    </div>
  );
}
