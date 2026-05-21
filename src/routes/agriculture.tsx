import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/agriculture")({
  head: () => ({
    meta: [
      { title: "Умное сельское хозяйство — Smart Group Kazakhstan" },
      { name: "description", content: "Теплицы, полевой мониторинг, хранение, аналитика для агрокомплексов." },
      { property: "og:title", content: "Умное сельское хозяйство — Smart Group" },
      { property: "og:description", content: "Теплицы, полевой мониторинг, хранение, аналитика для агрокомплексов." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("agriculture")!;
  return <SolutionPage s={s} />;
}
