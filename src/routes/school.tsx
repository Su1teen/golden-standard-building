import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/SolutionPage";
import { getSolution } from "@/lib/solutions";

export const Route = createFileRoute("/school")({
  head: () => ({
    meta: [
      { title: "Умная школа — Smart Group Kazakhstan" },
      { name: "description", content: "Климат и свет в классах, контроль доступа, расписание, видеонаблюдение." },
      { property: "og:title", content: "Умная школа — Smart Group" },
      { property: "og:description", content: "Климат и свет в классах, контроль доступа, расписание, видеонаблюдение." },
    ],
  }),
  component: Page,
});

function Page() {
  const s = getSolution("school")!;
  return <SolutionPage s={s} />;
}
