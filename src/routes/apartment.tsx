import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/apartment")({
  head: () => ({
    meta: [
      { title: "Умная квартира — Smart Group Kazakhstan" },
      { name: "description", content: "Сценарии света, климата, безопасности и мультимедиа для квартиры премиум-класса." },
      { property: "og:title", content: "Умная квартира — Smart Group" },
      { property: "og:description", content: "Сценарии света, климата, безопасности и мультимедиа для квартиры премиум-класса." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("apartment")!;
  return <SolutionPage s={s} />;
}
