var imgPrincipal = "../imgs/gato.png";
var imgProxima = "../imgs/cao.png";

function proxima(){
    document.getElementById("imghome").src = imgPrincipal;
    let xi = imgPrincipal;
    imgPrincipal = imgProxima;
    imgProxima = xi;
}



/*let slideAtual = 0;

function mudarSlide(direcao) {
    const slider = document.getElementById("slider");
    slideAtual += direcao;

    if (slideAtual < 0) slideAtual = 1; // volta pro segundo
    if (slideAtual > 1) slideAtual = 0; // volta pro primeiro

    slider.style.transform = `translateX(-${slideAtual * 100}%)`;
}*/