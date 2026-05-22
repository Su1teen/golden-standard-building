import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/mall")({
  head: () => ({
    meta: [
      { title: "Торговые и бизнес-центры — Smart Group Kazakhstan" },
      {
        name: "description",
        content: "Сценарный свет, аналитика потоков, экономия энергии для ТЦ и БЦ.",
      },
      { property: "og:title", content: "Торговые и бизнес-центры — Smart Group" },
      {
        property: "og:description",
        content: "Сценарный свет, аналитика потоков, экономия энергии для ТЦ и БЦ.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("mall")!;
  return <SolutionPage s={s} />;
}
