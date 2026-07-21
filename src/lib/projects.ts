import imgOnlyMoon from "@/assets/projects/onlymoon.jpg";
import imgDaraResidents from "@/assets/projects/dararesidents.jpg";
import imgYesApart from "@/assets/projects/yesapart.jpg";
import imgSatiClub from "@/assets/projects/sati club house.jpg";
import imgRegisHills from "@/assets/projects/regishills.jpg";
import imgDeputat1 from "@/assets/projects/deputat1.jpg";
import imgDeputat2 from "@/assets/projects/deputat2.jpg";
import imgDeputat3 from "@/assets/projects/deputat3.jpg";
import imgDeputat4 from "@/assets/projects/deputat4.jpg";
import imgDeputat5 from "@/assets/projects/deputat5.jpg";
import imgDeputat6 from "@/assets/projects/deputat6.jpg";
import imgDeputat7 from "@/assets/projects/deputat7.jpg";
import imgDeputat8 from "@/assets/projects/deputat8.jpg";
import imgHighvill from "@/assets/projects/highvill.jpg";
import imgEsil from "@/assets/esil.jpg";
import imgMillenium from "@/assets/millenium.jpg";
import imgGreenPark from "@/assets/greenpark.jpg";

export type Project = {
  slug: string;
  title: string;
  image: string;
  images: string[];
  description: string;
  span?: "tall" | "wide";
};

export const projects: Project[] = [
  {
    slug: "only-moon",
    title: "ЖК Only Moon",
    image: imgOnlyMoon,
    images: [imgOnlyMoon],
    description:
      "Жилой комплекс премиум-класса с полной интеграцией систем умного дома: управление освещением, климатом, мультирумом и безопасностью в каждой квартире.",
    span: "tall",
  },
  {
    slug: "dara-residents",
    title: "ЖК DARA Residents",
    image: imgDaraResidents,
    images: [imgDaraResidents],
    description:
      "Современный жилой комплекс с интеллектуальными инженерными системами, включая BMS, контроль доступа и энергоэффективное управление инфраструктурой здания.",
  },
  {
    slug: "yes-apartments",
    title: "Ye's Apartments",
    image: imgYesApart,
    images: [imgYesApart],
    description:
      "Апарт-комплекс с интегрированными системами автоматизации — от умного освещения и климат-контроля до централизованного управления всеми инженерными системами.",
  },
  {
    slug: "sati-club-house",
    title: "ЖК Sati Club House",
    image: imgSatiClub,
    images: [imgSatiClub],
    description:
      "Клубный жилой комплекс с элитной инженерией: сценарное освещение, интеллектуальный климат, система безопасности и управление общедомовой инфраструктурой.",
    span: "tall",
  },
  {
    slug: "regis-hills",
    title: "Regis Hills — коттеджи",
    image: imgRegisHills,
    images: [imgRegisHills],
    description:
      "Коттеджный посёлок с комплексной автоматизацией каждого дома: KNX-освещение, мультизональный климат, периметральная охрана и ландшафтное управление.",
  },
  {
    slug: "deputatskiy-gorodok",
    title: "Частные коттеджи в депутатском городке",
    image: imgDeputat1,
    images: [imgDeputat1, imgDeputat2, imgDeputat3, imgDeputat4, imgDeputat5, imgDeputat6, imgDeputat7, imgDeputat8],
    description:
      "Серия частных резиденций с индивидуальными проектами автоматизации: умный свет, климат, мультирум, охранные системы и интеграция с ландшафтом. Каждый дом — уникальное решение под потребности владельца.",
  },
  {
    slug: "highvill-astana",
    title: "Highvill Astana",
    image: imgHighvill,
    images: [imgHighvill],
    description:
      "Крупный жилой комплекс в Астане с централизованной системой управления зданием, интеллектуальным контролем доступа и энергоэффективными инженерными решениями.",
  },
  {
    slug: "esil-riverside",
    title: "ЖК Esil Riverside",
    image: imgEsil,
    images: [imgEsil],
    description:
      "Жилой комплекс на берегу Есиля с интегрированными системами BMS, автоматизацией общедомовых пространств и умными решениями для каждой квартиры.",
    span: "tall",
  },
  {
    slug: "millenium-park",
    title: "ЖК Миллениум Парк",
    image: imgMillenium,
    images: [imgMillenium],
    description:
      "Масштабный жилой комплекс с полной автоматизацией инженерных систем: управление освещением, вентиляцией, контроль доступа и видеонаблюдение.",
  },
  {
    slug: "green-park",
    title: "ЖК Green Park",
    image: imgGreenPark,
    images: [imgGreenPark],
    description:
      "Современный ЖК с акцентом на энергоэффективность и комфорт: интеллектуальное управление климатом, освещением и системами безопасности.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
