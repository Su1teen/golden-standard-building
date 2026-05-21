import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Умный жилой комплекс — Smart Group Kazakhstan" },
      { name: "description", content: "ЖК как сервис: единое приложение, доступ, оплаты, инженерия здания." },
      { property: "og:title", content: "Умный жилой комплекс — Smart Group" },
      { property: "og:description", content: "ЖК как сервис: единое приложение, доступ, оплаты, инженерия здания." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("residential")!;
  return <SolutionPage s={s} />;
}
