// mobile menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  addLinkEvents() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.animateLinks();
      });
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
      this.addLinkEvents();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li a"
);
mobileNavbar.init();


// accordion para o sobre mim
document.querySelectorAll(".perguntas").forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;

    document.querySelectorAll(".perguntas").forEach((outraPergunta) => {
      const outraResposta = outraPergunta.nextElementSibling;

      if (outraPergunta !== pergunta) {
        outraPergunta.classList.remove("active");
        outraResposta.style.maxHeight = null;
        outraResposta.style.padding = "0 5px";
      }
    });

    const isActive = pergunta.classList.contains("active");
    if (isActive) {
      pergunta.classList.remove("active");
      resposta.style.maxHeight = null;
      resposta.style.padding = "0 5px";
    } else {
      pergunta.classList.add("active");
      resposta.style.maxHeight = resposta.scrollHeight + "px";
      resposta.style.padding = "5px";
    }
  });
});

// efeito nos depoimentos


// efeito carrosel no consultorio
let nextbutton = document.getElementById("next");
let prevbutton = document.getElementById("prev");
let posts = document.querySelectorAll(".post");
let ativo = 0;
let primeirapossicao = 0;
let ultimapossicao = posts.length - 1;

function mostrarPost(index) {
  posts.forEach((post, i) => {
    post.classList.remove("ativo");
    if (i === index) {
      post.classList.add("ativo");
    }
  });
}

nextbutton.onclick = () => {
  ativo = ativo + 1 > ultimapossicao ? primeirapossicao : ativo + 1;
  mostrarPost(ativo);
};

prevbutton.onclick = () => {
  ativo = ativo - 1 < primeirapossicao ? ultimapossicao : ativo - 1;
  mostrarPost(ativo);
};

// accordion para o faq
const questions = document.querySelectorAll(".faq-pergunta");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
