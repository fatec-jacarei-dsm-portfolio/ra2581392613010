const themeBtn = document.querySelector("[data-theme-toggle]");
var bannerImg = document.querySelector(".banner-img");
var swipeAnimation = document.querySelector(".swipe-animation");
const html = document.querySelector("html");
const hCaptcha = document.getElementById("h-captcha");

/* 
-=-=-=-=-=-=-
ALTERA SPRITE
-=-=-=-=-=-=-
*/
function updateBanner(theme) {
  if (theme === "dark") {
    bannerImg.setAttribute("src", `${bannerImg.dataset.bannerDark}`);
    swipeAnimation.setAttribute("src", `${swipeAnimation.dataset.bannerDark}`);
  } else {
    bannerImg.setAttribute("src", `${bannerImg.dataset.bannerLight}`);
    swipeAnimation.setAttribute("src", `${swipeAnimation.dataset.bannerLight}`);
  }
}

/*
-=-=-=-=-=-=-=-
ALTERA AIMAÇÃO  
-=-=-=-=-=-=-=-
*/

// Função para animação
function updateAnimation(theme) {
  let animationInterval;

  const darkFrames = [
    "assets/img/cartoon-pic-d-0.png",
    "assets/img/cartoon-pic-d-1.png",
    "assets/img/cartoon-pic-d-2.png",
    "assets/img/cartoon-pic-d-3.png",
  ];

  const lightFrames = [
    "assets/img/cartoon-pic-l-0.png",
    "assets/img/cartoon-pic-l-1.png",
    "assets/img/cartoon-pic-l-2.png",
    "assets/img/cartoon-pic-l-3.png",
  ];

  bannerImg.addEventListener("mouseenter", (event) => {
    const frames = theme === "dark" ? darkFrames : lightFrames;

    let currentFrame = 0;

    clearInterval(animationInterval);

    animationInterval = setInterval(() => {
      bannerImg.src = frames[currentFrame];

      currentFrame++;

      if (currentFrame >= frames.length) {
        currentFrame = 0;
      }
    }, 140);
  });

  bannerImg.addEventListener("mouseleave", () => {
    clearInterval(animationInterval);
    const theme = document.documentElement.getAttribute("data-theme");
    bannerImg.src = theme === "dark" ? darkFrames[2] : lightFrames[2];
  });
}

/* 
-=-=-=-=-=-
DEFINE TEMA
-=-=-=-=-=-
 */

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  updateBanner(theme);
  updateAnimation(theme);
}

/*
-=-=-=-=-=-=-=-=-
PEGA TEMA INICIAL
-=-=-=-=-=-=-=-=-
*/

function getInitialTheme(theme) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

/*
-=-=-=-=-=-=-
INICIA O TEMA
-=-=-=-=-=-=-
*/

const initialTheme = getInitialTheme();

setTheme(initialTheme);

themeBtn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  const titleTheme = currentTheme === "dark" ? "Modo Escuro" : "Modo Claro";

  setTheme(newTheme);
});
