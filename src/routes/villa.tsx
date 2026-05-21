import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/villa")({
  head: () => ({
    meta: [
      { title: "Умная вилла — Smart Group Kazakhstan" },
      { name: "description", content: "Единая нервная система частной резиденции: инженерия, ландшафт, безопасность, гости." },
      { property: "og:title", content: "Умная вилла — Smart Group" },
      { property: "og:description", content: "Единая нервная система частной резиденции: инженерия, ландшафт, безопасность, гости." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("villa")!;
  return <SolutionPage s={s} />;
}
