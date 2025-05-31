function revelarMensagem() {
  const mensagem = document.getElementById("mensagemEscondida");
  const imagem = document.getElementById("imagemEscondida");
  const mensagemFinal = document.getElementById("mensagemFinal");
  const arrow = document.getElementById("arrow");

  // Alterna a visibilidade dos elementos
  mensagem.classList.toggle("hidden");
  imagem.classList.toggle("hidden");
  mensagemFinal.classList.toggle("hidden");

  // Se a mensagem está visível, mostra a seta. Se não, esconde.
  if (!mensagem.classList.contains("hidden")) {
    arrow.classList.remove("hidden");
  } else {
    arrow.classList.add("hidden");
  }
}

function girarCard() {
  const card = document.getElementById("card");
  const arrowBack = document.getElementById("arrow-back");
  card.classList.toggle("girado");
  setTimeout(() => {
    if (card.classList.contains("girado")) {
      arrowBack.classList.remove("hidden"); // Mostra seta de voltar
    } else {
      arrowBack.classList.add("hidden"); // Esconde seta de voltar
    }
  }, 400); // tempo para coincidir com o flip
}