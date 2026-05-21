import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/factory")({
  head: () => ({
    meta: [
      { title: "Умный завод — Smart Group Kazakhstan" },
      { name: "description", content: "SCADA, энергоучёт, промбезопасность, интеграция с MES и ERP." },
      { property: "og:title", content: "Умный завод — Smart Group" },
      { property: "og:description", content: "SCADA, энергоучёт, промбезопасность, интеграция с MES и ERP." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("factory")!;
  return <SolutionPage s={s} />;
}
