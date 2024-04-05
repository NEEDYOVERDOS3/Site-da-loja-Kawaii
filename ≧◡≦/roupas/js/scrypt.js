/*========================CARROSSEL=====================*/

let indiceAtual = 0;

function mostrarImagem() {
  let imagens = document.querySelectorAll('.imagens-carrossel img');
  if (indiceAtual >= imagens.length) {
    indiceAtual = 0;
  } else if (indiceAtual < 0) {
    indiceAtual = imagens.length - 1;
  }

  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = "none";  
  }
  imagens[indiceAtual].style.display = "block";
}
mostrarImagem();

function mudarImagem(direcao) {
  indiceAtual += direcao;
  mostrarImagem();
}