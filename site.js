const config = window.OVERLAYQA_SITE || { price: "$24", checkoutUrl: "https://www.creem.io/", contact: "mulianju@qq.com" };

const stored = localStorage.getItem("oqa-lang");
const initial = stored || (navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en");
applyLang(initial);

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLang(button.getAttribute("data-lang")));
});

document.querySelectorAll("[data-price]").forEach((node) => {
  node.textContent = config.price;
});
document.querySelectorAll("[data-checkout]").forEach((node) => {
  node.setAttribute("href", config.checkoutUrl);
});
document.querySelectorAll("[data-email]").forEach((node) => {
  node.textContent = config.contact;
  if (node.tagName === "A") node.setAttribute("href", `mailto:${config.contact}`);
});

const layer = document.querySelector("#design-layer");
const opacity = document.querySelector("#opacity");
const blend = document.querySelector("#blend");
const invert = document.querySelector("#invert");
function paint() {
  if (!layer) return;
  layer.style.opacity = String(Number(opacity.value) / 100);
  layer.style.mixBlendMode = blend.value;
  layer.style.filter = invert.checked ? "invert(1)" : "none";
}
if (layer && opacity && blend && invert) {
  opacity.addEventListener("input", paint);
  blend.addEventListener("change", paint);
  invert.addEventListener("change", paint);
  paint();
}

function applyLang(lang) {
  const next = lang === "zh" ? "zh" : "en";
  document.body.classList.remove("lang-en", "lang-zh");
  document.body.classList.add(next === "zh" ? "lang-zh" : "lang-en");
  document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  localStorage.setItem("oqa-lang", next);
}
