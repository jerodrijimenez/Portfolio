import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderHead, k as renderSlot, l as renderComponent } from '../astro_RIpVAP8I.mjs';
/* empty css                          */

const $$Astro$4 = createAstro();
const $$Bars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Bars;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-2qqxh4t5> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> <div data-astro-cid-2qqxh4t5></div> </div> `;
}, "C:/Users/Jorge/Documents/GitHub/Portfolio/src/components/Bars.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" data-theme=""> <head><meta charset="UTF-8"><meta name="description" content="Jorge E description"><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/Jorge/Documents/GitHub/Portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$ThemeMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThemeMode;
  return renderTemplate`${maybeRenderHead()}<article class="push" data-astro-cid-eirrgb6f> <div class="toggle" data-astro-cid-eirrgb6f> <input class="toggle-theme-state" type="checkbox" data-astro-cid-eirrgb6f> <div class="indicator" data-astro-cid-eirrgb6f></div> </div> </article>  `;
}, "C:/Users/Jorge/Documents/GitHub/Portfolio/src/components/ThemeMode.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectSlider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectSlider;
  return renderTemplate`${renderComponent($$result, "swiper-container", "swiper-container", { "class": "mySwiper", "autoplay": "true", "slides-per-view": "auto", "space-between": "30", "grab-cursor": "true", "centered-slides": "true", "loop": "true", "data-astro-cid-w2v4w7qv": true }, { "default": () => renderTemplate` ${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-w2v4w7qv": true }, { "default": () => renderTemplate`Slide 1` })} ${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-w2v4w7qv": true }, { "default": () => renderTemplate`Slide 2` })} ${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-w2v4w7qv": true }, { "default": () => renderTemplate`Slide 3` })} ${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-w2v4w7qv": true }, { "default": () => renderTemplate`Slide 4` })} ${renderComponent($$result, "swiper-slide", "swiper-slide", { "data-astro-cid-w2v4w7qv": true }, { "default": () => renderTemplate`Slide 5` })} ` })}  `;
}, "C:/Users/Jorge/Documents/GitHub/Portfolio/src/components/ProjectSlider.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Jorge Enrique", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="structure" data-astro-cid-j7pv25f6> <article class="about nopush" data-astro-cid-j7pv25f6> <div class="cont" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Bars", $$Bars, { "data-astro-cid-j7pv25f6": true })} <div class="glass" data-astro-cid-j7pv25f6> <div class="content" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Jorge Enrique Rodríguez Jiménez
<br data-astro-cid-j7pv25f6> <a href="mailto:jerodrijimenez@gmail.com" data-astro-cid-j7pv25f6>Email: jerodrijimenez@gmail.com</a> </h1> <h3 data-astro-cid-j7pv25f6>Ing. Ciencias Informáticas</h3> <h2 data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Desarrollo Backend y Ciencias de Datos enfocado en IoT y Sistemas de Gestión Financiera</strong></h2> </div> </div> </div> </article> <article class="projects push" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ProjectSlider", $$ProjectSlider, { "data-astro-cid-j7pv25f6": true })} </span></article> <article class="settings push" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ThemeMode", $$ThemeMode, { "data-astro-cid-j7pv25f6": true })} </article> <article class="image nopush" data-astro-cid-j7pv25f6><div class="imgglass" data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>+5 Años Experiencia</strong></div></article> <article class="whatsapp push" data-astro-cid-j7pv25f6><a href="https://api.whatsapp.com/send?phone=5358627662" target="_blank" data-astro-cid-j7pv25f6><i class="fab fa-whatsapp" data-astro-cid-j7pv25f6></i></a></article> <article class="email push" data-astro-cid-j7pv25f6><a href="mailto:jerodrijimenez@gmail.com" target="_blank" data-astro-cid-j7pv25f6><i class="fa fa-envelope" data-astro-cid-j7pv25f6></i></a></article> <article class="blog push" data-astro-cid-j7pv25f6><a href="/" data-astro-cid-j7pv25f6><span data-astro-cid-j7pv25f6>Blog</span></a></article> <article class="slogan nopush" data-astro-cid-j7pv25f6><h2 data-astro-cid-j7pv25f6>Deseas saber más sobre mi? <a download="jerodrijimenezCV" href="/jerodrijimenezCV.pdf" data-astro-cid-j7pv25f6>Descarga mi CV</a></h2></article> </section> ` })} `;
}, "C:/Users/Jorge/Documents/GitHub/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jorge/Documents/GitHub/Portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
