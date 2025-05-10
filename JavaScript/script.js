// accordion para o sobre mim
document.querySelectorAll(".perguntas").forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;

    // Fecha todas as outras perguntas
    document.querySelectorAll(".perguntas").forEach((outraPergunta) => {
      const outraResposta = outraPergunta.nextElementSibling;

      if (outraPergunta !== pergunta) {
        outraPergunta.classList.remove("active");
        outraResposta.style.maxHeight = null;
        outraResposta.style.padding = "0 5px";
      }
    });

    // Alterna a pergunta clicada
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
