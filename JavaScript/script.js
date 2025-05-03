// accordion para o sobre mim
document.querySelectorAll(".perguntas").forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    pergunta.classList.toggle("active");

    const resposta = pergunta.nextElementSibling;
    if (resposta.style.maxHeight) {
      resposta.style.maxHeight = null;
      resposta.style.padding = "0 10px";
    } else {
      resposta.style.maxHeight = resposta.scrollHeight + "px";
      resposta.style.padding = "10px";
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
