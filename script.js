/**@type {any} */
const post = document.getElementById("titulo");
post.style.left = '500px'    //x
post.style.top = '50px'      //y

const posd = document.getElementById("descricao");
posd.style.left = '350px'    //x
posd.style.top = '100px'     //y

const posn = document.getElementById("nota1");
posn.style.left = '500px'    //x
posn.style.top = '200px'     //y

const posn2 = document.getElementById("nota2");
posn2.style.left = '500px'   //x
posn2.style.top = '300px'    //y

const posm = document.getElementById("mensagem");
posm.style.left = '100px'   //x
posm.style.top = '420px'    //y

const posn3 = document.getElementById("nota3");
posn3.style.left = '500px'   //x
posn3.style.top = '400px'    //y

const posnm = document.getElementById("nm");
posnm.style.left = '500px'   //x
posnm.style.top = '500px'    //y

const posb = document.getElementById("calcule");
posb.style.left = '600px'    //x
posb.style.top = '600px'     //y

const posr = document.getElementById("resultado");
posr.style.left = '100px'   //x
posr.style.top = '300px'     //y

const vn1 = /**@type {HTMLInputElement} */ (posn);
const vn2 = /**@type {HTMLInputElement} */ (posn2);
const vn3 = /**@type {HTMLInputElement} */ (posn3);
const vnm = /**@type {HTMLInputElement} */ (posnm);

function teste() {
    const vvn1 = parseFloat(vn1.value);
const vvn2 = parseFloat(vn2.value);
const vvn3 = parseFloat(vn3.value);
const vvnm = parseFloat(vnm.value);
let resut = [vvnm * 4] - [vvn1 + vvn2 + vvn3]
    if (resut <= 0) {
        document.getElementById("resultado").textContent = "pontos faltando: 0"
        document.getElementById("mensagem").textContent = "você já passou!"
    }
if (resut > 0 && resut < 4) {
     document.getElementById("resultado").textContent = "pontos faltando: " + resut;
document.getElementById("mensagem").textContent = "falta pouco!"
}
if (resut >= 4 && resut < 7) {
     document.getElementById("resultado").textContent = "pontos faltando: " + resut;
document.getElementById("mensagem").textContent = "você vai precisar estudar bastante..."
}
if (resut >= 7 && resut < 9) {
     document.getElementById("resultado").textContent = "pontos faltando: " + resut;
document.getElementById("mensagem").textContent = "você vai ter que mudar de vida."
}
if (resut >= 9) {
     document.getElementById("resultado").textContent = "pontos faltando: " + resut;
document.getElementById("mensagem").textContent = "faça um milagre!"
}
}
