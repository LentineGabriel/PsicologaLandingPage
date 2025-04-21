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

// accordion para o faq
const questions = document.querySelectorAll(".faq-pergunta");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});