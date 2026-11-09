function calcularDistancia() {

class Punto {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distancia(punto) {
    const dx = punto.x - this.x;
    const dy = punto.y - this.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
} // Fin de la clase

  let p1 = new Punto(document.getElementById("x1").value, document.getElementById("y1").value);
  let p2 = new Punto(document.getElementById("x2").value, document.getElementById("y2").value);
  document.getElementById("resultado").innerHTML = "Distancia: " + p1.distancia(p2);
} // <-- Esta última llave cierra todo