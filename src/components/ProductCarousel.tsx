import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import horizonThermostatImg from "@/assets/product-horizon-thermostat.png";

type Category = "climate" | "light" | "security" | "multimedia";

interface Product {
  name: string;
  brand: string;
  image: string;
  description: string;
}

const categories: { id: Category; label: string; icon: string }[] = [
  { id: "climate", label: "Климат", icon: "🌡" },
  { id: "light", label: "Освещение", icon: "💡" },
  { id: "security", label: "Безопасность", icon: "🔒" },
  { id: "multimedia", label: "Мультимедиа", icon: "🎵" },
];

const products: Record<Category, Product[]> = {
  climate: [
    {
      name: "Horizon Thermostat",
      brand: "HDL / Horizon",
      description:
        "Умный термостат с сенсорным TFT-дисплеем. Интеграция KNX/BACnet, управление фанкойлом, тёплым полом и приточной вентиляцией.",
      // Generated: actual thermostat product photo
      image: horizonThermostatImg,
    },
    {
      name: "Fancoil Controller",
      brand: "Siemens",
      description:
        "Контроллер фанкойла с поддержкой BACnet MS/TP. Точная двухзонная регулировка температуры для коммерческих объектов.",
      // Fan coil unit / HVAC equipment
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    },
    {
      name: "CO₂ & IAQ Sensor",
      brand: "Elsner",
      description:
        "Многофункциональный датчик KNX: CO₂, VOC, влажность, температура. Автоматически запускает вентиляцию при превышении норм.",
      // Small wall sensor / IoT device
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80",
    },
    {
      name: "Chiller Management Unit",
      brand: "Johnson Controls",
      description:
        "Промышленный контроллер чиллера с мониторингом в реальном времени. Оптимизирует потребление энергии до 35%.",
      // Industrial HVAC chiller equipment
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
    {
      name: "Recuperator Unit",
      brand: "Systemair",
      description:
        "Приточно-вытяжная установка с рекуперацией тепла. КПД 85%, интеграция через Modbus RTU и KNX.",
      // Air handling / ventilation unit
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      name: "Floor Heating Controller",
      brand: "DEVI / Danfoss",
      description:
        "Электрический тёплый пол с интеллектуальным расписанием. Поддержка KNX, экономия электроэнергии до 20%.",
      // Underfloor heating system
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    },
  ],
  light: [
    {
      name: "Grafik T Keypad",
      brand: "Lutron",
      description:
        "Элегантный настенный диммер Lutron с металлической отделкой. Управляет группами сцен одним касанием, поддержка Caséta и RadioRA.",
      // Modern wall light switch / keypad
      image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&q=80",
    },
    {
      name: "DALI Gateway",
      brand: "Tridonic",
      description:
        "DALI-2 шлюз для интеграции профессионального освещения в системы KNX и BACnet. До 64 адресуемых устройств на шину.",
      // DIN rail / electrical module
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      name: "iRidi Touch Panel",
      brand: "Iridium / KNX",
      description:
        "7-дюймовый сенсорный выключатель KNX с OLED-дисплеем. Управление светом, шторами, климатом в одном устройстве.",
      // Tablet / smart panel on wall
      image: "https://images.unsplash.com/photo-1586920740099-f3e6f874736b?w=800&q=80",
    },
    {
      name: "LED Driver 48V",
      brand: "Mean Well",
      description:
        "Профессиональный DMX/DALI-совместимый драйвер для архитектурного освещения. Защита IP67, диммирование 0.1–100%.",
      // Architectural LED lighting strip
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d6?w=800&q=80",
    },
    {
      name: "Occupancy Sensor",
      brand: "Steinel",
      description:
        "360° датчик присутствия KNX с детектором движения и освещённости. Автоматизирует свет в переговорных и open-space.",
      // Ceiling presence / motion sensor
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    },
    {
      name: "Smart Blind Actuator",
      brand: "Hager",
      description:
        "KNX привод для управления жалюзи, рулонными шторами и маркизами. Солнечный автомат и защита от ветра.",
      // Window blinds / smart shades
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    },
  ],
  security: [
    {
      name: "iRidi Control Panel",
      brand: "Iridium",
      description:
        "Щит управления Iridium KNX для комплексной автоматизации. Объединяет освещение, безопасность и мультимедиа в единую систему.",
      // Electrical switchboard / automation panel
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      name: "Video Intercom 8MP",
      brand: "Dahua / Hikvision",
      description:
        "IP-видеодомофон с распознаванием лиц, 8MP камерой и интеграцией в BMS. Открытие двери по лицу без карты.",
      // Video doorbell / intercom panel on door
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    },
    {
      name: "Access Control Reader",
      brand: "HID Global",
      description:
        "RFID/BLE-считыватель с поддержкой Mobile Access. Интеграция через OSDP с контроллером доступа Lenel или Genetec.",
      // Door access keypad / card reader
      image: "https://images.unsplash.com/photo-1558048853-1b8b47de4d67?w=800&q=80",
    },
    {
      name: "AI Analytics Camera",
      brand: "Axis",
      description:
        "4K IP-камера с аналитикой на борту: толпа, перекрытый выход, оставленные предметы. ONVIF + интеграция в VMS.",
      // Security surveillance camera
      image: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=800&q=80",
    },
    {
      name: "Smart Lock Cylinder",
      brand: "SALTO / Aperio",
      description:
        "Беспроводной цилиндровый замок BLE. Mobile key, аварийный режим, интеграция с PMS отеля. Не требует кабельной проводки.",
      // Smart door lock / deadbolt
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    },
    {
      name: "Fire Detection Panel",
      brand: "Bosch FPA-5000",
      description:
        "Адресная пожарная сигнализация с интеграцией BACnet в BMS. Мониторинг 250+ зон, автоматическое дымоудаление.",
      // Fire alarm control panel
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    },
  ],
  multimedia: [
    {
      name: "Crestron DM NVX",
      brand: "Crestron",
      description:
        "AV-over-IP система передачи 4K/60 по сети 1GbE. Нулевая задержка, шифрование AES-128, матрица до 1000×1000 портов.",
      // AV rack / network equipment
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      name: "Multiroom Amplifier",
      brand: "Sonos Amp",
      description:
        "Стереоусилитель Sonos 125Вт для мультирум-аудио. Поддержка AirPlay 2, Spotify Connect, интеграция с KNX и Control4.",
      // Hi-fi amplifier / audio equipment
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    },
    {
      name: "Control4 EA-5",
      brand: "Control4",
      description:
        "Центральный контроллер умного дома Control4 EA-5. Управляет аудио, видео, освещением, климатом и безопасностью.",
      // Smart home controller / tablet interface
      image: "https://images.unsplash.com/photo-1586920740099-f3e6f874736b?w=800&q=80",
    },
    {
      name: "4K Media Player",
      brand: "Kaleidescape",
      description:
        "Premium 4K HDR медиаплеер с DTS:X и Dolby Atmos. Библиотека фильмов в максимальном качестве для домашнего кинотеатра.",
      // Home cinema / media center
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80",
    },
    {
      name: "Distributed Audio Matrix",
      brand: "QSC",
      description:
        "Профессиональная DSP-матрица QSC Q-SYS для коммерческих объектов. 128×128 каналов, AoIP Dante, управление с планшета.",
      // Professional audio mixing / DSP rack
      image: "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=800&q=80",
    },
    {
      name: "Smart Projector Screen",
      brand: "Screen Innovations",
      description:
        "Моторизованный экран с управлением KNX/RS-232. Zero-G UST-ткань, интеграция в сценарии «Кино», «Конференция».",
      // Projection screen / home theater
      image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=800&q=80",
    },
  ],
};

export function ProductCarousel() {
  const [activeCategory, setActiveCategory] = useState<Category>("climate");
  const [prevCategory, setPrevCategory] = useState<Category | null>(null);
  const [animating, setAnimating] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    slidesToScroll: 1,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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

  const handleCategoryChange = (cat: Category) => {
    if (cat === activeCategory || animating) return;
    setAnimating(true);
    setPrevCategory(activeCategory);
    setTimeout(() => {
      setActiveCategory(cat);
      setAnimating(false);
      emblaApi?.scrollTo(0, false);
    }, 220);
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const currentProducts = products[activeCategory];

  return (
    <div className="product-carousel-root">
      {/* Category tabs */}
      <div className="carousel-tabs" role="tablist" aria-label="Категории оборудования">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            id={`carousel-tab-${cat.id}`}
            className={`carousel-tab${activeCategory === cat.id ? " active" : ""}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            <span className="carousel-tab-icon">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Embla container */}
      <div className={`carousel-track-wrapper${animating ? " carousel-exit" : " carousel-enter"}`}>
        <div className="carousel-viewport" ref={emblaRef}>
          <div className="carousel-container">
            {currentProducts.map((product, i) => (
              <div key={`${activeCategory}-${i}`} className="carousel-slide">
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className={`carousel-arrow carousel-arrow-prev${!canScrollPrev ? " disabled" : ""}`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Предыдущие"
        >
          <ArrowLeft className="size-5" />
        </button>
        <button
          className={`carousel-arrow carousel-arrow-next${!canScrollNext ? " disabled" : ""}`}
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Следующие"
        >
          <ArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`product-card${visible ? " visible" : ""}`}
      style={{ "--card-delay": `${index * 60}ms` } as React.CSSProperties}
    >
      <div className="product-card-image-wrap">
        <img src={product.image} alt={product.name} className="product-card-image" loading="lazy" />
        <div className="product-card-brand-badge">{product.brand}</div>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>
      </div>
    </div>
  );
}
