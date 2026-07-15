import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface StackedItem {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  route: string;
}

const items: StackedItem[] = [
  {
    title: "Умный Дом",
    eyebrow: "Жилое пространство",
    description:
      "Свет, климат, безопасность и мультимедиа — экосистема, которая чувствует ритм вашей жизни.",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1800&q=85",
    route: "/apartment",
  },
  {
    title: "Умный Офис",
    eyebrow: "Корпоративная среда",
    description:
      "Бронирование, климат, свет и аналитика — пространство, которое помогает команде работать.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85",
    route: "/office",
  },
  {
    title: "Умное здание",
    eyebrow: "Автоматизация здания",
    description:
      "Единый диспетчерский пульт, энергоменеджмент и открытые протоколы — здание управляет собой.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85",
    route: "/building",
  },
  {
    title: "Школы",
    eyebrow: "Образование",
    description:
      "Климат, безопасность и расписание синхронизированы — среда, в которой хочется учиться.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1800&q=85",
    route: "/school",
  },
  {
    title: "Мед. учреждения",
    eyebrow: "Healthcare",
    description:
      "Чистые помещения, безопасность и интеграция с МИС — врач лечит, здание делает остальное.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1800&q=85",
    route: "/hospital",
  },
  {
    title: "Гостиницы",
    eyebrow: "Hospitality",
    description:
      "Mobile key, управление номером и энергоэффективность — сервис, который работает до просьбы.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1800&q=85",
    route: "/hotel",
  },
  {
    title: "Умные Рестораны",
    eyebrow: "F&B",
    description:
      "Сценарии зала, кухонные системы и энергоучёт — атмосфера, которая знает время суток.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85",
    route: "/restaurant",
  },
];

const premiumEase = [0.16, 1, 0.3, 1] as const;

function StageContent({
  item,
  index,
  mobile = false,
}: {
  item: StackedItem;
  index: number;
  mobile?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-between ${mobile ? "z-40" : "z-20"} ${
        mobile ? "p-5 sm:p-7" : "p-7 xl:p-10"
      }`}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delayChildren: 0.38, staggerChildren: 0.09 },
        },
      }}
    >
      <motion.div
        className="flex items-start justify-between"
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: premiumEase },
          },
        }}
      >
        <span className="font-mono text-[11px] tracking-[0.22em] text-white/55">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <Link
          to={item.route}
          onClick={(event) => event.stopPropagation()}
          className="group/link grid size-11 place-items-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
          aria-label={`Перейти: ${item.title}`}
        >
          <ArrowUpRight className="size-[18px] transition-transform duration-500 group-hover/link:rotate-45" />
        </Link>
      </motion.div>

      <div>
        <motion.span
          className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9fc4e0]"
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: premiumEase },
            },
          }}
        >
          {item.eyebrow}
        </motion.span>
        <motion.h3
          className={`max-w-[12ch] font-black leading-[0.95] tracking-[-0.055em] text-white ${
            mobile ? "text-[clamp(2.25rem,10vw,4.5rem)]" : "text-[clamp(2.6rem,5vw,5.5rem)]"
          }`}
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(7px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.82, ease: premiumEase },
            },
          }}
        >
          {item.title}
        </motion.h3>
        <motion.p
          className="mt-4 max-w-[50ch] text-sm leading-[1.7] text-white/70 sm:text-[15px]"
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.72, ease: premiumEase },
            },
          }}
        >
          {item.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function DesktopAccordion({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <LayoutGroup id="solutions-desktop">
      <div className="hidden h-[min(74vh,760px)] min-h-[620px] w-full gap-[2px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#d8d8dc] p-[2px] shadow-[0_30px_90px_-50px_rgba(0,0,0,0.55)] lg:flex">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.article
              key={item.route}
              layout
              className={`relative isolate min-w-0 overflow-hidden bg-[#171719] text-white outline-none ${
                index === 0 ? "rounded-l-[1.8rem]" : ""
              } ${index === items.length - 1 ? "rounded-r-[1.8rem]" : ""}`}
              style={{ flex: isActive ? "1 1 0%" : "0 0 clamp(76px, 6.4vw, 98px)" }}
              transition={{ layout: { duration: reduceMotion ? 0 : 0.86, ease: premiumEase } }}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveIndex(index);
              }}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{
                  clipPath: isActive ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
                }}
                transition={{ duration: reduceMotion ? 0 : 0.95, ease: premiumEase }}
              >
                <motion.img
                  src={item.image}
                  alt=""
                  className="size-full object-cover"
                  initial={false}
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: reduceMotion ? 0 : 1.25, ease: premiumEase }}
                  loading={index < 2 ? "eager" : "lazy"}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.08)_20%,rgba(8,8,10,0.82)_100%)]" />
              </motion.div>

              <motion.div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(134,168,196,0.13),transparent_45%)]"
                animate={{ opacity: isActive ? 0 : 1 }}
                transition={{ duration: 0.55, ease: premiumEase }}
              />

              <AnimatePresence initial={false}>
                {!isActive && (
                  <motion.button
                    type="button"
                    className="absolute inset-0 z-10 flex flex-col items-center justify-between py-7"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.32, ease: premiumEase }}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-label={`Развернуть: ${item.title}`}
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rotate-180 text-sm font-semibold tracking-[-0.01em] text-white/75 [writing-mode:vertical-rl]">
                      {item.title}
                    </span>
                    <span className="h-8 w-px bg-white/15" />
                  </motion.button>
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {isActive && <StageContent item={item} index={index} />}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

function MobileAccordion({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <LayoutGroup id="solutions-mobile">
      <div className="flex flex-col gap-2 lg:hidden">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.article
              key={item.route}
              layout
              className="relative isolate overflow-hidden rounded-[1.4rem] bg-[#171719] text-white shadow-[0_18px_48px_-34px_rgba(0,0,0,0.7)]"
              transition={{ layout: { duration: reduceMotion ? 0 : 0.8, ease: premiumEase } }}
            >
              <button
                type="button"
                className={`relative z-30 flex w-full items-center justify-between px-5 text-left ${
                  isActive ? "h-[27rem] sm:h-[32rem]" : "h-[5.5rem]"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-expanded={isActive}
              >
                {!isActive && (
                  <>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-bold tracking-[-0.03em] text-white/85">
                      {item.title}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full border border-white/15 text-lg font-light text-white/50">
                      +
                    </span>
                  </>
                )}
              </button>

              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{
                  clipPath: isActive ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
                }}
                transition={{ duration: reduceMotion ? 0 : 0.92, ease: premiumEase }}
              >
                <motion.img
                  src={item.image}
                  alt=""
                  className="size-full object-cover"
                  initial={false}
                  animate={{ scale: isActive ? 1 : 1.12 }}
                  transition={{ duration: reduceMotion ? 0 : 1.15, ease: premiumEase }}
                  loading={index < 2 ? "eager" : "lazy"}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,10,0.08)_10%,rgba(8,8,10,0.88)_100%)]" />
              </motion.div>

              <AnimatePresence initial={false}>
                {isActive && <StageContent item={item} index={index} mobile />}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </LayoutGroup>
  );
}

export function StackedCards() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] py-20 sm:py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] opacity-70"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 82% 0%, rgba(134,168,196,0.2), transparent 34%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <header className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <div>
            <Reveal className="mb-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#6e6e73]">
              Направления · 7 решений
            </Reveal>
            <Reveal
              as="h2"
              delay={100}
              className="max-w-[13ch] text-[clamp(2.8rem,7.8vw,8rem)] font-black leading-[0.9] tracking-[-0.07em] text-[#1d1d1f]"
            >
              Пространство, которое работает на{"\u00a0"}человека.
            </Reveal>
          </div>
          <Reveal
            as="p"
            delay={200}
            className="max-w-[46ch] text-[15px] leading-[1.7] text-[#6e6e73] lg:pb-2"
          >
            От квартиры до промышленного комплекса. Каждое направление — инженерная экосистема,
            созданная для конкретных задач.
          </Reveal>
        </header>

        <DesktopAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <MobileAccordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </section>
  );
}
