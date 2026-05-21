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
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-[20vw] md:text-[12vw] font-extrabold tracking-tighter text-[#C5A059] leading-none">
          404
        </div>
        <h2 className="mt-6 text-2xl font-extrabold tracking-tight">Страница не найдена</h2>
        <p className="mt-3 text-mute">Возможно, она ещё в проекте.</p>
        <Link
          to="/"
          className="mt-10 inline-flex bg-[#C5A059] text-[#050505] px-6 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-xs"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-extrabold tracking-tighter">Что-то пошло не так</h1>
        <p className="mt-3 text-mute text-sm">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 bg-[#C5A059] text-[#050505] px-6 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-xs"
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
      { property: "og:description", content: "Премиальные решения умного дома и автоматизации зданий." },
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
      <div className="min-h-screen flex flex-col bg-[#050505] text-fg">
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
