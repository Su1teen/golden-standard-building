import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Рестораны и кафе — Smart Group Kazakhstan" },
      {
        name: "description",
        content: "Сценарии зала, кухонные системы, видеонаблюдение, энергоучёт.",
      },
      { property: "og:title", content: "Рестораны и кафе — Smart Group" },
      {
        property: "og:description",
        content: "Сценарии зала, кухонные системы, видеонаблюдение, энергоучёт.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("restaurant")!;
  return <SolutionPage s={s} />;
}
