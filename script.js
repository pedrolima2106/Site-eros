var imgPrincipal = "imgs/gato.png";
var imgProxima = "imgs/cao.png";

function proxima(){
    document.getElementById("imghome").src = imgPrincipal;
    let xi = imgPrincipal;
    imgPrincipal = imgProxima;
    imgProxima = xi;
}