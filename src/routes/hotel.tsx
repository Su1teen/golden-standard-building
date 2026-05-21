import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/hotel")({
  head: () => ({
    meta: [
      { title: "Гостиницы и апарт-отели — Smart Group Kazakhstan" },
      { name: "description", content: "Mobile key, управление номером, PMS-интеграции, экономия энергии до 42%." },
      { property: "og:title", content: "Гостиницы и апарт-отели — Smart Group" },
      { property: "og:description", content: "Mobile key, управление номером, PMS-интеграции, экономия энергии до 42%." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("hotel")!;
  return <SolutionPage s={s} />;
}
