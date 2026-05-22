import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/office")({
  head: () => ({
    meta: [
      { title: "Умный офис — Smart Group Kazakhstan" },
      {
        name: "description",
        content:
          "Бронирование, климат, доступ, аналитика — здание работает само, команда занимается делом.",
      },
      { property: "og:title", content: "Умный офис — Smart Group" },
      {
        property: "og:description",
        content:
          "Бронирование, климат, доступ, аналитика — здание работает само, команда занимается делом.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("office")!;
  return <SolutionPage s={s} />;
}
