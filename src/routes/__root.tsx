import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FloatingCTA } from "@/components/FloatingCTA";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white text-[#1d1d1f]">
      <div className="text-center">
        <div className="text-[18vw] md:text-[10vw] font-black tracking-tight leading-none text-[#1d1d1f]">
          404
        </div>
        <h2 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight">Страница не найдена</h2>
        <p className="mt-3 text-[#6e6e73]">Возможно, она ещё в проекте.</p>
        <Link to="/" className="btn-primary mt-10">
          На главную
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white text-[#1d1d1f]">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold tracking-tight">Что-то пошло не так</h1>
        <p className="mt-3 text-[#6e6e73] text-sm">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn-primary mt-8"
        >
          Перезагрузить
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Smart Group Kazakhstan — интеллектуальные системы для пространств" },
      {
        name: "description",
        content:
          "Smart Group Kazakhstan — премиальные решения умного дома, BMS и автоматизации зданий в Казахстане.",
      },
      { property: "og:title", content: "Smart Group Kazakhstan" },
      {
        property: "og:description",
        content: "Премиальные решения умного дома и автоматизации зданий.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-white text-[#1d1d1f]">
        <ScrollProgress />
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <FloatingCTA />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
