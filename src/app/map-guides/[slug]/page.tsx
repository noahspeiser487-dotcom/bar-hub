import { notFound } from "next/navigation";
import { getMapGuides } from "@/lib/content";
import { Mdx } from "@/components/mdx";

export default async function MapGuideDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = (await getMapGuides()).find((entry) => entry.slug === slug);
  if (!item) return notFound();

  return (
    <div className="space-y-4">
      <p className="kicker">{item.tier}</p>
      <h1 className="h2">{item.title}</h1>
      <Mdx source={item.content} />
    </div>
  );
}

