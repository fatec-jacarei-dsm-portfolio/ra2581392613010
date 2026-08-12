// Criação de variáveis
const menuTrigger = document.getElementById("menu-trigger");
const menu = document.getElementById("menu");
const scrollTop = document.getElementById("scroll-to-top");
const linkToTop = document.getElementById("link-1");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu-list a");
const imageBanner = document.querySelector(".banner-img");

// Evento para o botão de "ir ao topo" aparecer e o menu ficar suspenso.
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollTop.classList.add("active");
    menu.classList.add("float");
  } else {
    scrollTop.classList.remove("active");
    menu.classList.remove("float");
  }
});

// Evento para ir para o topo da página
if (scrollTop) {
  scrollTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
}

if (linkToTop) {
  linkToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
    });
  });
}

// Evento do menu para telas menores aparecer
menuTrigger.addEventListener("click", function () {
  if (menuTrigger.classList.contains("clicked")) {
    menuTrigger.classList.remove("clicked");
    menu.classList.remove("active");
  } else {
    menuTrigger.classList.add("clicked");
    menu.classList.add("active");
  }
});

// Observador para seções
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("green-text");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("green-text");
          }
        });
      }
    });
  },
  {
    threshold: 0.2,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

// Animação de aparecer
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".box").forEach((box) => {
  gsap.fromTo(
    box,
    { x: "100%" },
    {
      x: 0,
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
    },
  );
});

// função para o aria-label seguir o mouse
const skills = document.querySelectorAll(".skill");

skills.forEach((skill) => {
  skill.addEventListener("mousemove", (e) => {
    const rect = skill.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    skill.style.setProperty("--mouse-x", x + "px");
    skill.style.setProperty("--mouse-y", y + "px");
  });
});

// Função para o modal ativar e desativar
const bannerModal = document.getElementById("banner-modal");
const bannerModalTrigger = document.getElementById("banner-modal-trigger");
const closeModalBtn = document.getElementById("close-modal-btn");

bannerModalTrigger.addEventListener("click", function () {
  if (!bannerModal.classList.contains("active")) {
    bannerModal.classList.add("active");
  }
});

closeModalBtn.addEventListener("click", function () {
  bannerModal.classList.remove("active");
});

const copyLinkedin = document.getElementById("copy-linkedin");
const linkedin = document.getElementById("linkedin-contact");

copyLinkedin.addEventListener("click", function () {
  navigator.clipboard.writeText(linkedin.textContent).then(() => {
    copyLinkedin.innerText = "Copiado!";

    setTimeout(() => {
      copyLinkedin.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-copy" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
      </svg>`;
    }, 1500);
  });
});

const copyGithub = document.getElementById("copy-github");
const github = document.getElementById("github-contact");

copyGithub.addEventListener("click", function () {
  navigator.clipboard.writeText(github.textContent).then(() => {
    copyGithub.innerText = "Copiado!";

    setTimeout(() => {
      copyGithub.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-copy" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
      </svg>`;
    }, 1500);
  });
});
