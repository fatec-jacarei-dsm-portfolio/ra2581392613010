const language_key = "data-lang";

async function changeLanguage(lang) {
  const response = await fetch(`./locales/${lang}.json`);

  const translations = await response.json();

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.dataset.lang;

    el.innerHTML = getTranslation(translations, key);
  });
}

function getTranslation(obj, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

function saveLanguage(lang) {
  localStorage.setItem(language_key, lang);
}

function setLanguageUI(lang) {
  const thumb = document.querySelector(".switch-thumb");
  const pt = document.getElementById("lang-pt");
  const en = document.getElementById("lang-en");

  if (lang === "en") {
    thumb.style.transform = "translateX(26px)";
    en.classList.add("active");
    pt.classList.remove("active");
  } else {
    thumb.style.transform = "translateX(0px)";
    pt.classList.add("active");
    en.classList.remove("active");
  }
}

function initLanguage() {
  const savedLanguage = localStorage.getItem(language_key);
  const defaultLang = savedLanguage || document.documentElement.lang || "pt";

  setLanguageUI(defaultLang);
  changeLanguage(defaultLang);
}

document.getElementById("language-switcher").addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "pt" ? "en" : "pt";

  setLanguageUI(newLang);
  changeLanguage(newLang);
  saveLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", initLanguage);

