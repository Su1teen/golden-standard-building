import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

// Shop product images
import azoulahubImg from "@/assets/shop/azoulahub.png";
import dmxDecoderImg from "@/assets/shop/dmx_decoder.png";
import hikvisionCameraImg from "@/assets/shop/hikvision_smartcamera.jpg";
import hometheaterImg from "@/assets/shop/hometheater.png";
import lightPanelImg from "@/assets/shop/light_panel.png";
import smartlocksImg from "@/assets/shop/smartlocks.jpg";
import smartpanelImg from "@/assets/shop/smartpanel.png";
import aliceSpeakerImg from "@/assets/shop/smartspeaker_alisa.jpg";
import sunricherLightImg from "@/assets/shop/sunricher_light_panel.png";
import sunricherTempImg from "@/assets/shop/sunricher_temp_panel.png";

const SHOP_URL =
  "https://project-b9d1a15e-b36b-41f6-8099-3af5c1ac1175.sultansovetov2003.workers.dev/";

interface Product {
  name: string;
  tagline: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    name: "Умная панель управления",
    tagline:
      "Центр управления домом с сенсорным экраном. Свет, климат, сценарии — на расстоянии касания.",
    image: smartpanelImg,
    badge: "Популярное",
  },
  {
    name: "Sunricher · Панель света",
    tagline:
      "Настенный контроллер диммирования и цветовой температуры. Элегантный дизайн, интеграция KNX.",
    image: sunricherLightImg,
    badge: "Sunricher",
  },
  {
    name: "Sunricher · Панель климата",
    tagline: "Сенсорная панель управления температурой и вентиляцией. Точная регулировка до 0.5°C.",
    image: sunricherTempImg,
    badge: "Sunricher",
  },
  {
    name: "Светопанель",
    tagline:
      "Архитектурная панель управления освещением для зон и сценариев. Минималистичный корпус.",
    image: lightPanelImg,
  },
  {
    name: "Домашний кинотеатр",
    tagline:
      "Полная система домашнего кинотеатра: проектор, акустика, управление сценарием одной кнопкой.",
    image: hometheaterImg,
    badge: "Premium",
  },
  {
    name: "Яндекс Алиса",
    tagline:
      "Голосовой ассистент для управления умным домом. Включайте сценарии, музыку и новости голосом.",
    image: aliceSpeakerImg,
    badge: "Яндекс Алиса",
  },
  {
    name: "Hikvision · Умная камера",
    tagline: "IP-камера с AI-аналитикой и ночным видением. Интеграция в систему безопасности дома.",
    image: hikvisionCameraImg,
    badge: "Hikvision",
  },
  {
    name: "Умный замок",
    tagline:
      "Биометрический замок с управлением через приложение. Отпечаток, код, карта или телефон.",
    image: smartlocksImg,
  },
  {
    name: "DMX декодер",
    tagline:
      "Профессиональный DMX-декодер для архитектурного и сценического освещения. Управление RGB/RGBW.",
    image: dmxDecoderImg,
  },
  {
    name: "Azoul Hub",
    tagline:
      "Центральный шлюз для объединения протоколов Zigbee, Z-Wave и Wi-Fi в единую экосистему.",
    image: azoulahubImg,
  },
];

export function ProductCarousel() {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const total = products.length;

  return (
    <div className="pc-root">
      {/* Top bar: progress + arrows */}
      <div className="pc-controls">
        <div className="pc-progress-track">
          <div
            className="pc-progress-fill"
            style={{
              width: `${((activeIndex + 1) / total) * 100}%`,
            }}
          />
        </div>
        <div className="pc-nav">
          <span className="pc-counter">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            className={`pc-arrow${!canScrollPrev ? " disabled" : ""}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Предыдущие"
          >
            <ArrowLeft className="size-[18px]" />
          </button>
          <button
            className={`pc-arrow${!canScrollNext ? " disabled" : ""}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Следующие"
          >
            <ArrowRight className="size-[18px]" />
          </button>
        </div>
      </div>

      {/* Embla viewport */}
      <div className="pc-viewport" ref={emblaRef}>
        <div className="pc-container">
          {products.map((product, i) => (
            <div key={i} className="pc-slide">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA link */}
      <div className="pc-cta-wrap">
        <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="pc-cta">
          Перейти в каталог
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 60);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <a
      ref={ref}
      href={SHOP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`pc-card${visible ? " visible" : ""}`}
      style={{ "--card-delay": `${index * 60}ms` } as React.CSSProperties}
    >
      {/* Image */}
      <div className="pc-card-img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="pc-card-img"
          loading={index < 3 ? "eager" : "lazy"}
        />
        {product.badge && <span className="pc-card-badge">{product.badge}</span>}
        <div className="pc-card-shine" aria-hidden="true" />
      </div>

      {/* Body */}
      <div className="pc-card-body">
        <h3 className="pc-card-name">{product.name}</h3>
        <p className="pc-card-tagline">{product.tagline}</p>
      </div>

      {/* Footer */}
      <div className="pc-card-footer">
        <span className="pc-card-link">
          Подробнее
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </a>
  );
}
