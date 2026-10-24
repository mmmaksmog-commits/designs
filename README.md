# 🎨 Галерея дизайнов

**Шесть полноценных сайтов в разных стилях. Каждый открывается и работает: это не скриншоты, а живые адаптивные страницы.**

### ▶️ [Смотреть галерею](https://mysik-portfolio.vercel.app/designs/)

| # | Стиль | Пример | Шрифты |
|---|---|---|---|
| 01 | Минимализм | [ОСЬ, архитектурное бюро](https://mysik-portfolio.vercel.app/designs/works/minimal.html) | Inter Tight |
| 02 | Необрутализм | [ГРОМ, музыкальный фестиваль](https://mysik-portfolio.vercel.app/designs/works/brutal.html) | Rubik Mono One, Rubik |
| 03 | Glassmorphism | [Орбита, SaaS-продукт](https://mysik-portfolio.vercel.app/designs/works/glass.html) | Manrope |
| 04 | Люкс | [Сапфир, ресторан](https://mysik-portfolio.vercel.app/designs/works/luxury.html) | Cormorant Garamond, Montserrat |
| 05 | Киберпанк | [PIXEL ARENA, компьютерный клуб](https://mysik-portfolio.vercel.app/designs/works/neon.html) | Russo One, Exo 2 |
| 06 | Эко | [Зерно, кофейня и пекарня](https://mysik-portfolio.vercel.app/designs/works/eco.html) | Lora, Nunito |

Все бренды вымышлены.

## Особенности

- **Живые превью** через масштабированные `iframe`: в карточке виден настоящий сайт
- **Переключатель «ПК / Телефон»** на каждой карточке показывает, как сайт адаптируется
- Фильтры по сфере бизнеса, светлая и тёмная тема
- Все иллюстрации нарисованы на CSS: ноль картинок, быстрая загрузка
- Каждый сайт — один HTML-файл без зависимостей

## Как добавить дизайн

1. Положи страницу в `works/` и подключи `back.css` (плашка «← Все дизайны»).
2. Добавь объект в `js/data.js`.

## Запуск локально

```bash
git clone https://github.com/mmmaksmog-commits/designs.git
cd designs
python3 -m http.server 8000
```
