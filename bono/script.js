const imagen = document.getElementById("imagen");
const btnImagen = document.getElementById("btnImagen");
btnImagen.addEventListener("click", function () {
    if (datos.style.display === "none") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
});
