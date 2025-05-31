function revelarMensagem() {
  const mensagem = document.getElementById("mensagemEscondida");
  const imagem = document.getElementById("imagemEscondida");
  const mensagemFinal = document.getElementById("mensagemFinal");
  mensagem.classList.toggle("hidden");
  imagem.classList.toggle("hidden");    
  mensagemFinal.classList.toggle("hidden");    
}

