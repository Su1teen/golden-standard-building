import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/building")({
  head: () => ({
    meta: [
      { title: "Умное здание — BMS — Smart Group Kazakhstan" },
      {
        name: "description",
        content: "BMS, единый диспетчерский пульт, энергоменеджмент, открытые протоколы.",
      },
      { property: "og:title", content: "Умное здание — BMS — Smart Group" },
      {
        property: "og:description",
        content: "BMS, единый диспетчерский пульт, энергоменеджмент, открытые протоколы.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("building")!;
  return <SolutionPage s={s} />;
}
