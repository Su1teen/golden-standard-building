## Smart Group Kazakhstan — полный сайт

Сборка ведётся на текущем стеке (TanStack Start + Tailwind v4 + Motion). Дизайн — выбранный «Midnight architectural gold»: чёрный фон #050505, золотой акцент #C5A059, Inter + JetBrains Mono, крупная архитектурная типографика, тонкая золотая линия прогресса под навбаром, жидкое стекло, плавающая золотая CTA‑пилюля.

### Дизайн‑система (src/styles.css)

- Перезаписать токены: `--background #050505`, `--foreground #F5F5F7`, `--primary #C5A059`, `--muted #71717A`, `--border rgba(255,255,255,.08)`.
- Подключить Inter (400/500/800) и JetBrains Mono из Google Fonts.
- Keyframes: `unfold`, `line-draw`, `fade-up`, `breathe-in`, `stagger`, `count`, `glass-shift`. Easing `--ease-out-expo: cubic-bezier(.19,1,.22,1)`.
- Утилиты: `.glass`, `.glass-strong`, `.gold-line`, `.reveal`, `.hero-grad` (radial gold), `.bento-card`, `.numeral`.

### Общие компоненты (src/components/)

- `Navbar.tsx` — фиксированный, liquid glass, лого слева, навигация по центру (Решения / Проекты / Процесс / Блог / О нас / Контакты), золотая CTA «Обсудить проект». IntersectionObserver переключает светлую/тёмную тему стекла. Мобильное меню — fullscreen overlay со stagger.
- `ScrollProgress.tsx` — золотая линия 1px под навбаром, растёт через `scroll()` timeline + fallback на JS.
- `FloatingCTA.tsx` — золотая пилюля «Обсудить проект» внизу, появляется после ухода hero (IntersectionObserver на hero).
- `Footer.tsx` — 4 колонки: бренд+соцсети, 12 решений, компания, контакты+WhatsApp; нижняя строка copyright + политика.
- `Reveal.tsx` — обёртка scroll‑reveal (unfold).
- `Counter.tsx` — счётчик от 0 при появлении.
- `SolutionHero.tsx`, `SolutionStory.tsx`, `SolutionCapabilities.tsx`, `SolutionAudience.tsx`, `SolutionNumbers.tsx`, `SolutionCTA.tsx` — переиспользуемые блоки для 12 страниц‑решений.
- `ContactForm.tsx` — стеклянная карточка с валидацией.
- `solutionsData.ts` — единый источник контента 12 решений (slug, заголовок‑трансформация, история, способности, аудитория, цифры).

### Маршруты (src/routes/)

- `__root.tsx` — оборачивает Navbar + ScrollProgress + FloatingCTA + Outlet + Footer, шрифты, мета по умолчанию.
- `index.tsx` — главная: hero на 100vh с массивным «Дом, который понимает вас», золотым eyebrow, тремя счётчиками; bento из 12 решений; About split; 6 асимметричных причин; 6‑шаговая золотая timeline; 3 редакционные карточки блога; стеклянная форма; футер уже из root.
- `apartment.tsx`, `villa.tsx`, `office.tsx`, `residential.tsx`, `building.tsx`, `mall.tsx`, `hotel.tsx`, `restaurant.tsx`, `hospital.tsx`, `school.tsx`, `factory.tsx`, `agriculture.tsx` — 12 страниц решений, единая арка (Hero трансформации → Что система делает → Способности как визуальная история → Для кого → Цифры → CTA), каждая со своим `head()` (title, description, og).
- `about.tsx` — манифест компании.
- `projects.tsx` — портфолио с фильтрами по типу объекта.
- `process.tsx` — 6 этапов с золотой линией + FAQ‑аккордеон на 8 вопросов.
- `blog.tsx` — featured + сетка из 10 карточек с категориями.
- `blog-post.tsx` — `/blog/$slug` шаблон статьи: sticky TOC, pull‑quote, related.
- `contact.tsx` — split: контакты слева, glass‑форма справа, WhatsApp CTA, карта‑плейсхолдер.

### Анимации и взаимодействие

- Заголовки: `unfold` по буквам/словам через CSS + IntersectionObserver.
- Секции‑изображения: `breathe-in` (scale 0.96 → 1).
- Счётчики: `requestAnimationFrame` от 0 при входе во вьюпорт.
- Карточные сетки: stagger через CSS custom property `--i`.
- Hero: параллакс фона (translateY от scrollY) медленнее текста.
- Навбар: liquid‑glass; темная/светлая адаптация — observer над секциями с `data-theme`.
- Hover: лифт карточек, золотая линия под ссылками, дыхание кнопок.

### Контент

Все тексты на русском, в духе «одна мысль на экран». Без перечислений‑буллетов, краткие сильные предложения. Для каждой из 12 страниц — своя «трансформация» (утро в квартире, отклик виллы, самоуправляемый офис, гость отеля до запроса, врач без забот о здании и т.д.).

### Изображения

Без внешних URL. Кинематографические CSS‑градиенты (radial dark + золотое тепло) как фон‑плейсхолдеры hero и карточек.

### Технические детали

- Не редактируем `src/routeTree.gen.ts` — генерируется автоматически после создания файлов в `src/routes/`.
- Удалить плейсхолдер из `src/routes/index.tsx`.
- Каждая страница имеет уникальный `head()` (title, description, og:title, og:description).
- Никаких внешних библиотек анимаций — Motion уже доступен; используем его + CSS keyframes.
- Lucide иконки (уже в проекте) для тонких акцентов.

### Порядок реализации

1. styles.css (DNA дизайн‑системы).
2. solutionsData.ts + общие компоненты (Navbar, Footer, ScrollProgress, FloatingCTA, Reveal, Counter, Form, Solution\* блоки).
3. \_\_root.tsx (shell + хром).
4. index.tsx (главная).
5. 12 страниц решений.
6. about / projects / process / blog / blog.$slug / contact.
7. Проверка превью, правки контраста и адаптива.
