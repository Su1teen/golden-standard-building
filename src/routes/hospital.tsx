import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/hospital")({
  head: () => ({
    meta: [
      { title: "Медицинские учреждения — Smart Group Kazakhstan" },
      {
        name: "description",
        content: "Чистые помещения, безопасность, энергоэффективность, интеграция с МИС.",
      },
      { property: "og:title", content: "Медицинские учреждения — Smart Group" },
      {
        property: "og:description",
        content: "Чистые помещения, безопасность, энергоэффективность, интеграция с МИС.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("hospital")!;
  return <SolutionPage s={s} />;
}
