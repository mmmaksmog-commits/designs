// Каталог дизайнов. Чтобы добавить новый — положи страницу в works/ и добавь объект сюда.

// Куда ведёт кнопка «Хочу такой» — раздел контактов в портфолио.
export const CONTACT_URL = '/#contact';

export const designs = [
  {
    slug: 'minimal',
    brand: 'ОСЬ',
    title: 'Минимализм',
    kind: 'Архитектурное бюро',
    category: 'business',
    description: 'Много воздуха, крупная типографика и строгая сетка. Подходит студиям, бюро и брендам, которые хотят выглядеть дорого и спокойно.',
    palette: ['#f4f3ef', '#111111', '#77756e', '#bdb7aa'],
    fonts: 'Inter Tight',
  },
  {
    slug: 'brutal',
    brand: 'ГРОМ',
    title: 'Необрутализм',
    kind: 'Музыкальный фестиваль',
    category: 'events',
    description: 'Толстые рамки, жёсткие тени, кислотные цвета и бегущая строка. Дерзко и запоминается — для событий, медиа и молодёжных брендов.',
    palette: ['#ffe500', '#0a0a0a', '#ff3d7f', '#3d5afe'],
    fonts: 'Rubik Mono One, Rubik',
  },
  {
    slug: 'glass',
    brand: 'Орбита',
    title: 'Glassmorphism',
    kind: 'SaaS-продукт',
    category: 'tech',
    description: 'Матовое стекло, светящиеся градиенты и макет интерфейса прямо на первом экране. Классика для IT-продуктов и стартапов.',
    palette: ['#070816', '#7c5cff', '#22d3ee', '#f472b6'],
    fonts: 'Manrope',
  },
  {
    slug: 'luxury',
    brand: 'Сапфир',
    title: 'Люкс',
    kind: 'Ресторан',
    category: 'food',
    description: 'Глубокий чёрный, золото, антиква и неторопливый ритм. Для ресторанов, отелей, ювелирных и премиальных услуг.',
    palette: ['#0d0c0a', '#c9a96a', '#ece6da', '#16140f'],
    fonts: 'Cormorant Garamond, Montserrat',
  },
  {
    slug: 'neon',
    brand: 'PIXEL ARENA',
    title: 'Киберпанк',
    kind: 'Компьютерный клуб',
    category: 'events',
    description: 'Неон, ретро-сетка, глитч-эффекты и рубленые кнопки. Для геймерских проектов, клубов и ночных мероприятий.',
    palette: ['#07020f', '#ff2bd6', '#00f0ff', '#b6ff3b'],
    fonts: 'Russo One, Exo 2',
  },
  {
    slug: 'eco',
    brand: 'Зерно',
    title: 'Эко',
    kind: 'Кофейня и пекарня',
    category: 'food',
    description: 'Тёплые природные цвета, мягкие формы и живые иллюстрации на CSS. Для кафе, локальных брендов и эко-продуктов.',
    palette: ['#f7f1e6', '#3f5d3a', '#d0794b', '#6b4a32'],
    fonts: 'Lora, Nunito',
  },
];

export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'business', name: 'Бизнес' },
  { id: 'tech', name: 'IT' },
  { id: 'food', name: 'Еда' },
  { id: 'events', name: 'События' },
];
