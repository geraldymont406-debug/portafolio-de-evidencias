function agregaImagen() {
var URL = document.getElementById('imagenURL').value;
var pie = document.getElementById('pieFoto').value;
var galeria = document.getElementById('galeriaImagenes');
if (URL && pie) {
var div = document.createElement('div');
var img = document.createElement('img');
var p = document.createElement('p');
img.src = URL;
img.width = 300;
img.height = 250;
p.textContent = pie;
div.appendChild(img);
div.appendChild(p);
galeria.appendChild(div);
// Limpieza de campos
document.getElementById('imagenURL').value = "";
document.getElementById('pieFoto').value = "";
} else {
alert("por favor introduce imagen y pie");
}
}