import { Link } from "@tanstack/react-router";
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
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1600&q=80",
    route: "/apartment",
  },
  {
    title: "Умный Офис",
    eyebrow: "Корпоративная среда",
    description:
      "Бронирование, климат, свет и аналитика — пространство, которое помогает команде работать.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    route: "/office",
  },
  {
    title: "Умное здание",
    eyebrow: "Автоматизация здания",
    description:
      "Единый диспетчерский пульт, энергоменеджмент и открытые протоколы — здание управляет собой.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    route: "/building",
  },
  {
    title: "Школы",
    eyebrow: "Образование",
    description:
      "Климат, безопасность и расписание синхронизированы — среда, в которой хочется учиться.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    route: "/school",
  },
  {
    title: "Мед. учреждения",
    eyebrow: "Healthcare",
    description:
      "Чистые помещения, безопасность и интеграция с МИС — врач лечит, здание делает остальное.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80",
    route: "/hospital",
  },
  {
    title: "Гостиницы",
    eyebrow: "Hospitality",
    description:
      "Mobile key, управление номером и энергоэффективность — сервис, который работает до просьбы.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&q=80",
    route: "/hotel",
  },
  {
    title: "Умные Рестораны",
    eyebrow: "F&B",
    description:
      "Сценарии зала, кухонные системы и энергоучёт — атмосфера, которая знает время суток.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    route: "/restaurant",
  },
];

export function StackedCards() {
  return (
    <section className="sc-section section-mid">
      <div className="sc-header">
        <Reveal className="sc-header-eyebrow">Направления · 7 решений</Reveal>
        <Reveal as="h2" delay={120} className="sc-header-title">
          Пространство, которое работает на{"\u00a0"}человека.
        </Reveal>
        <Reveal as="p" delay={240} className="sc-header-sub">
          От квартиры до промышленного комплекса. Каждое направление — инженерная экосистема,
          созданная для конкретных задач.
        </Reveal>
      </div>

      <div className="sc-stack" aria-label="Направления автоматизации">
        {items.map((item, i) => (
          <Link
            key={item.route}
            to={item.route}
            className="sc-card"
            style={
              {
                "--i": i,
                top: `calc(10% + ${i * 40}px)`,
                zIndex: i + 1,
              } as React.CSSProperties
            }
          >
            <img
              src={item.image}
              alt={item.title}
              className="sc-card-bg"
              loading={i < 2 ? "eager" : "lazy"}
            />
            <div className="sc-card-overlay" aria-hidden="true" />
            <div className="sc-card-content">
              <div className="sc-card-top">
                <span className="sc-card-index">{String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight className="sc-card-arrow" />
              </div>
              <div className="sc-card-bottom">
                <span className="sc-card-eyebrow">{item.eyebrow}</span>
                <h3 className="sc-card-title">{item.title}</h3>
                <p className="sc-card-desc">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
