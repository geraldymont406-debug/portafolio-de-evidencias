// 1. LISTA DE ACTIVIDADES (Con fecha, módulo, título, descripción y ruta)
const actividades = [
  {
    id: "01",
    titulo: "Vivero",
    modulo: "Módulo 1: Fundamentos Web",
    fecha: "2026-02-10",
    descripcion: "Página web para un vivero con catálogo de plantas y cuidados básicos.",
    ruta: "vivero/index.html"
  },
  {
    id: "02",
    titulo: "Pastelería",
    modulo: "Módulo 1: Fundamentos Web",
    fecha: "2026-02-18",
    descripcion: "Diseño de sitio web para una pastelería con menú de postres.",
    ruta: "pastel/index.html"
  },
  {
    id: "03",
    titulo: "Página de Música con Flexbox",
    modulo: "Módulo 2: Diseños con Flexbox",
    fecha: "2026-03-02",
    descripcion: "Interfaz de reproductor/plataforma de música maquetada con Flexbox.",
    ruta: "flexbox-musica/index.html"
  },
  {
    id: "04",
    titulo: "Página Mágica de Videojuegos",
    modulo: "Módulo 2: Diseños con Flexbox",
    fecha: "2026-03-12",
    descripcion: "Landing page temática de videojuegos utilizando distribución en Flexbox.",
    ruta: "flexbox-videojuegos/index.html"
  },
  {
    id: "05",
    titulo: "Catálogo de Relojes con Flexbox",
    modulo: "Módulo 2: Diseños con Flexbox",
    fecha: "2026-03-20",
    descripcion: "Catálogo e inventario de relojes maquetado con Flexbox.",
    ruta: "catalogo-relojes/index.html"
  },
  {
    id: "06",
    titulo: "Práctica General de Flexbox",
    modulo: "Módulo 2: Diseños con Flexbox",
    fecha: "2026-03-28",
    descripcion: "Ejercicio integrador maquetando una estructura web completa.",
    ruta: "paginaflexbox/index.html"
  }
];

// 2. FUNCIÓN PARA GENERAR Y DIBUJAR LAS TARJETAS EN EL HTML
function cargarTarjetas(lista = actividades) {
  const container = document.getElementById("cardsContainer");
  if (!container) return;
  
  container.innerHTML = "";

  lista.forEach(act => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span class="card-tag">Actividad #${act.id}</span>
        <small style="font-size: 0.8rem; font-weight: 600;">📅 ${act.fecha}</small>
      </div>
      
      <p style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.2rem;">
        ${act.modulo}
      </p>

      <h3 style="margin-bottom: 0.5rem;">${act.titulo}</h3>
      <p style="font-size: 0.9rem; margin-bottom: 1rem;">${act.descripcion}</p>
      
      <button class="btn-open" onclick="abrirModal('${act.titulo}', '${act.ruta}')">
        Abrir Ejercicio ✨
      </button>
    `;
    container.appendChild(card);
  });
}

// 3. FUNCIÓN PARA ABRIR LA VENTANA MODAL CON EL EJERCICIO EN VIVO
function abrirModal(titulo, ruta) {
  const modalTitle = document.getElementById("modalTitle");
  const projectIframe = document.getElementById("projectIframe");
  const modalOverlay = document.getElementById("modalOverlay");

  if (modalTitle) modalTitle.innerText = titulo;
  if (projectIframe) projectIframe.src = ruta;
  if (modalOverlay) modalOverlay.style.display = "flex";
}

// 4. FUNCIÓN PARA CERRAR LA VENTANA MODAL
function cerrarModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const projectIframe = document.getElementById("projectIframe");

  if (modalOverlay) modalOverlay.style.display = "none";
  if (projectIframe) projectIframe.src = "";
}

// 5. FUNCIÓN DEL BUSCADOR EN TIEMPO REAL
function filtrarActividades() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const texto = input.value.toLowerCase();
  const filtradas = actividades.filter(act => 
    act.titulo.toLowerCase().includes(texto) ||
    act.descripcion.toLowerCase().includes(texto) ||
    act.modulo.toLowerCase().includes(texto)
  );

  cargarTarjetas(filtradas);
}

// Cargar todo al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  cargarTarjetas();
});