import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const defaultImgsObj = import.meta.glob(
  "@/assets/timeline/default/*.{jpg,jpeg,png,HEIC,heic,JPG}",
  { eager: true, import: "default" },
);
const oldShowroomImgsObj = import.meta.glob(
  "@/assets/timeline/Old showroom/*.{jpg,jpeg,png,HEIC,heic,JPG}",
  { eager: true, import: "default" },
);
const newtechImgsObj = import.meta.glob(
  "@/assets/timeline/newtech/*.{jpg,jpeg,png,HEIC,heic,JPG}",
  { eager: true, import: "default" },
);
const imgs2017Obj = import.meta.glob("@/assets/timeline/2017/*.{jpg,jpeg,png,HEIC,heic,JPG}", {
  eager: true,
  import: "default",
});
const imgs2016Obj = import.meta.glob("@/assets/timeline/2016/*.{jpg,jpeg,png,HEIC,heic,JPG}", {
  eager: true,
  import: "default",
});
const imgs2017HdlObj = import.meta.glob(
  "@/assets/timeline/2017 hdl/*.{jpg,jpeg,png,HEIC,heic,JPG}",
  { eager: true, import: "default" },
);
const imgs2021Obj = import.meta.glob("@/assets/timeline/2021/*.{jpg,jpeg,png,HEIC,heic,JPG}", {
  eager: true,
  import: "default",
});
const imgs2024Obj = import.meta.glob("@/assets/timeline/2024/*.{jpg,jpeg,png,HEIC,heic,JPG}", {
  eager: true,
  import: "default",
});
const imgs2024DubaiObj = import.meta.glob(
  "@/assets/timeline/2024 dubai/*.{jpg,jpeg,png,HEIC,heic,JPG}",
  { eager: true, import: "default" },
);
const imgs2026Obj = import.meta.glob("@/assets/timeline/2026/*.{jpg,jpeg,png,HEIC,heic,JPG}", {
  eager: true,
  import: "default",
});

const toImages = (modules: Record<string, unknown>) => Object.values(modules) as string[];
const withFallback = (images: string[], fallback: string) =>
  images.length > 0 ? images : [fallback];

const defaultImgs = toImages(defaultImgsObj);
const imgs2009 = [...toImages(oldShowroomImgsObj), ...toImages(newtechImgsObj)];
const imgs2017 = toImages(imgs2017Obj);
const imgsHdl = [...toImages(imgs2016Obj), ...toImages(imgs2017HdlObj)];
const imgs2021 = toImages(imgs2021Obj);
const imgs2024 = toImages(imgs2024Obj);
const imgs2024Dubai = toImages(imgs2024DubaiObj);
const imgs2026 = toImages(imgs2026Obj);

interface Milestone {
  id: string;
  year: number;
  yearLabel?: string;
  title: string;
  description: string;
  achievements: string[];
  images: string[];
}

const milestones: Milestone[] = [
  {
    id: "sgk",
    year: 0,
    yearLabel: "SGK",
    title: "Что такое Smart Group Kazakhstan",
    description:
      "Инженерная компания, которая проектирует, строит и обслуживает интеллектуальные системы управления зданиями и пространствами. Мы создаём технологии, которые работают так хорошо, что о них не нужно думать.",
    achievements: [
      "Полный цикл: проект → монтаж → программирование → сервис",
      "Работа с современными инженерными протоколами и решениями",
      "450+ реализованных объектов в Казахстане и Центральной Азии",
    ],
    images: withFallback(
      defaultImgs,
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=85",
    ),
  },
  {
    id: "2009",
    year: 2009,
    title: "Основание и первые проекты",
    description:
      "Официальная регистрация бренда SGK заложила фундамент нашего инженерного подхода. Первый шоурум позволил клиентам вживую увидеть технологии и концепцию по-настоящему умного пространства.",
    achievements: [
      "Регистрация бренда Smart Group Kazakhstan",
      "Открытие первого флагманского шоурума",
      "Реализация первых коммерческих проектов",
    ],
    images: withFallback(
      imgs2009,
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85",
    ),
  },
  {
    id: "2014",
    year: 2014,
    title: "Масштабирование и крупные партнёры",
    description:
      "Презентация комплексных решений для BI Group и других ведущих застройщиков региона. SGK перешла от частных объектов к системной работе на корпоративном и девелоперском уровне.",
    achievements: [
      "Презентация технологий для BI Group",
      "Выход на рынок крупных девелоперских проектов",
      "Разработка стандартов массового внедрения BMS",
    ],
    images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85"],
  },
  {
    id: "2017-knx",
    year: 2017,
    title: "Международные стандарты",
    description:
      "Важный этап признания компетенций SGK: компания стала официальным участником ассоциации KNX. В Астане открылся новый офис для управления более масштабными проектами в столице.",
    achievements: [
      "Вступление в международную ассоциацию KNX",
      "Открытие представительства в Астане",
      "Реализация знаковых архитектурных проектов",
    ],
    images: withFallback(
      imgs2017,
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85",
    ),
  },
  {
    id: "2017-hdl",
    year: 2017,
    title: "Партнёрство с HDL",
    description:
      "SGK выстроила прямое партнёрство с заводом HDL для реализации новых масштабных проектов компании.",
    achievements: ["Прямое партнёрство с заводом HDL", "Новые масштабные проекты SGK"],
    images: withFallback(
      imgsHdl,
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=85",
    ),
  },
  {
    id: "2021",
    year: 2021,
    title: "Новые горизонты",
    description:
      "Опыт и стандарты качества SGK оказались востребованы за пределами страны: компания завершила первый крупный проект в Санкт-Петербурге, представила инновации на Kazbuild и открыла обновлённый шоурум.",
    achievements: [
      "Первый международный проект в Санкт-Петербурге",
      "Участие в выставке Kazbuild в Алматы",
      "Открытие обновлённого шоурума",
    ],
    images: withFallback(
      imgs2021,
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85",
    ),
  },
  {
    id: "2024-rnd",
    year: 2024,
    title: "Наука и инновации",
    description:
      "SGK начала системное внедрение R&D, инвестируя в прикладную науку и разработку собственных аппаратно-программных комплексов для задач автоматизации.",
    achievements: [
      "Системное внедрение R&D",
      "Инвестиции в прикладную науку",
      "Разработка собственных аппаратно-программных комплексов",
    ],
    images: withFallback(
      imgs2024,
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85",
    ),
  },
  {
    id: "2024-dubai",
    year: 2024,
    title: "Международная экспансия",
    description:
      "Открытие офиса в Дубае вывело SGK на международный уровень и положило начало работе над крупными премиальными проектами за пределами Казахстана.",
    achievements: [
      "Открытие офиса в Дубае, ОАЭ",
      "Начало системной международной работы",
      "Работа над крупными проектами премиум-класса",
    ],
    images: withFallback(
      imgs2024Dubai,
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85",
    ),
  },
  {
    id: "2026",
    year: 2026,
    title: "Эра собственного производства",
    description:
      "Новый масштаб и независимость: SGK запускает собственное производство оборудования, открывает крупный учебный центр и шоурум умного дома в Центральной Азии и выходит на европейский рынок с офисом в ЕС.",
    achievements: [
      "Запуск собственного инженерного производства",
      "Крупный учебный центр и шоурум умного дома в Центральной Азии",
      "Открытие нового офиса в Европейском Союзе",
      "Запуск собственной аккредитованной поверочной лаборатории",
      "Контракт об эксклюзивном дистрибьюторстве на территории РК",
    ],
    images: withFallback(
      imgs2026,
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1600&q=85",
    ),
  },
];

const premiumEase = [0.16, 1, 0.3, 1] as const;

function ImageSlideshow({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (images.length < 2 || reduceMotion) return;

    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [images.length, reduceMotion]);

  const changeSlide = (direction: number) => {
    setCurrent((index) => (index + direction + images.length) % images.length);
  };

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#111214] shadow-[0_32px_90px_-32px_rgba(0,0,0,0.8)] sm:aspect-[16/11] lg:rounded-[2rem]">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`${title}, изображение ${current + 1}`}
          className="absolute inset-0 size-full object-cover"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.06, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985, filter: "blur(5px)" }}
          transition={{ duration: 0.9, ease: premiumEase }}
          loading="lazy"
          draggable={false}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.02)_35%,rgba(10,10,12,0.6)_100%)]" />

      {images.length > 1 && (
        <>
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
            <div className="flex flex-1 gap-1.5" aria-hidden="true">
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className="group/dot h-5 flex-1 py-2"
                  onClick={() => setCurrent(index)}
                  aria-label={`Показать изображение ${index + 1}`}
                >
                  <span
                    className={`block h-px transition-colors duration-500 ${
                      index === current ? "bg-white" : "bg-white/25 group-hover/dot:bg-white/50"
                    }`}
                  />
                </button>
              ))}
            </div>
            <div className="flex gap-2 opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100">
              <button
                type="button"
                onClick={() => changeSlide(-1)}
                className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
                aria-label="Предыдущее изображение"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => changeSlide(1)}
                className="grid size-10 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black"
                aria-label="Следующее изображение"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MilestoneStory({
  milestone,
  index,
  onEnter,
}: {
  milestone: Milestone;
  index: number;
  onEnter: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="relative flex min-h-[82vh] scroll-mt-24 flex-col justify-center border-t border-white/10 py-16 first:border-t-0 sm:min-h-[88vh] sm:py-24 lg:min-h-screen lg:py-28"
      onViewportEnter={() => onEnter(index)}
      viewport={{ amount: 0.35, margin: "-12% 0px -36% 0px" }}
      initial={reduceMotion ? false : { opacity: 0.35, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: premiumEase }}
    >
      <div className="sticky top-20 z-20 -mx-1 mb-8 flex items-center justify-between bg-[#1d1d1f]/85 px-1 py-3 backdrop-blur-xl lg:hidden">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[#86a8c4]">
          {String(index + 1).padStart(2, "0")} / {String(milestones.length).padStart(2, "0")}
        </span>
        <span className="text-4xl font-black tracking-[-0.06em] text-white">
          {milestone.yearLabel ?? milestone.year}
        </span>
      </div>

      <motion.div
        initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.15, ease: premiumEase }}
      >
        <ImageSlideshow images={milestone.images} title={milestone.title} />
      </motion.div>

      <div className="grid gap-8 pt-9 sm:pt-12 xl:grid-cols-[minmax(0,1fr)_minmax(250px,0.65fr)] xl:gap-14">
        <div>
          <motion.span
            className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#86a8c4]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.65, delay: 0.12, ease: premiumEase }}
          >
            Этап {String(index + 1).padStart(2, "0")}
          </motion.span>
          <motion.h3
            className="max-w-[14ch] text-[clamp(2rem,5vw,4.75rem)] font-black leading-[0.98] tracking-[-0.055em] text-white"
            initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.85, delay: 0.18, ease: premiumEase }}
          >
            {milestone.title}
          </motion.h3>
          <motion.p
            className="mt-6 max-w-[58ch] text-[15px] leading-[1.75] text-white/55 sm:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.75, delay: 0.28, ease: premiumEase }}
          >
            {milestone.description}
          </motion.p>
        </div>

        <motion.ul
          className="self-end border-t border-white/15"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.32 } },
          }}
        >
          {milestone.achievements.map((achievement, achievementIndex) => (
            <motion.li
              key={achievement}
              className="grid grid-cols-[2rem_1fr] gap-3 border-b border-white/10 py-4 text-sm leading-relaxed text-white/60"
              variants={{
                hidden: { opacity: 0, x: 18 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: premiumEase },
                },
              }}
            >
              <span className="font-mono text-[10px] text-[#0071e3]">
                {String(achievementIndex + 1).padStart(2, "0")}
              </span>
              {achievement}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}

export function CompanyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeMilestone = milestones[activeIndex];
  const activeYear = activeMilestone.yearLabel ?? activeMilestone.year;
  const progress = ((activeIndex + 1) / milestones.length) * 100;

  return (
    <section
      id="company-timeline"
      className="relative isolate overflow-clip bg-[#1d1d1f] text-white"
      aria-label="История компании"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 10% 18%, rgba(0,113,227,0.12), transparent 28%), radial-gradient(circle at 92% 72%, rgba(134,168,196,0.08), transparent 30%)",
        }}
      />

      <header className="relative mx-auto max-w-[1500px] px-5 pb-14 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <motion.p
          className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#86a8c4]"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: premiumEase }}
        >
          Наша история · с 2009 года
        </motion.p>
        <motion.h2
          className="max-w-[13ch] text-[clamp(3rem,8.6vw,8.5rem)] font-black leading-[0.9] tracking-[-0.07em]"
          initial={reduceMotion ? false : { opacity: 0, y: 48, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, delay: 0.08, ease: premiumEase }}
        >
          Более 20 лет развития и инноваций
        </motion.h2>
      </header>

      <div className="relative mx-auto grid max-w-[1500px] px-5 sm:px-8 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.7fr)] lg:gap-16 lg:px-12 xl:gap-24">
        <aside className="relative hidden lg:block">
          <div className="sticky top-28 flex h-[calc(100vh-9rem)] flex-col justify-between pb-16">
            <div>
              <div className="mb-8 flex items-center gap-4 font-mono text-[11px] tracking-[0.18em] text-white/30">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                <span className="h-px w-10 bg-white/15" />
                <span>{String(milestones.length).padStart(2, "0")}</span>
              </div>
              <div className="relative min-h-[9rem] overflow-hidden xl:min-h-[11rem]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeYear}
                    className="absolute inset-x-0 top-0 text-[clamp(6.5rem,12vw,12rem)] font-black leading-[0.75] tracking-[-0.09em] text-white"
                    initial={
                      reduceMotion ? { opacity: 1 } : { opacity: 0, y: 90, filter: "blur(16px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={
                      reduceMotion ? { opacity: 0 } : { opacity: 0, y: -90, filter: "blur(16px)" }
                    }
                    transition={{ duration: 0.78, ease: premiumEase }}
                  >
                    {activeYear}
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={activeMilestone.id}
                  className="mt-7 max-w-[20ch] text-sm font-medium leading-relaxed text-white/50"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: premiumEase }}
                >
                  {activeMilestone.title}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-end gap-5">
              <div className="relative h-24 w-px overflow-hidden bg-white/10">
                <motion.div
                  className="absolute inset-x-0 top-0 bg-[#0071e3]"
                  animate={{ height: `${progress}%` }}
                  transition={{ duration: 0.7, ease: premiumEase }}
                />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                Scroll to explore
              </span>
            </div>
          </div>
        </aside>

        <div>
          {milestones.map((milestone, index) => (
            <MilestoneStory
              key={milestone.id}
              milestone={milestone}
              index={index}
              onEnter={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
