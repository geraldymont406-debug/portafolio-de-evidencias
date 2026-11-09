const actividades = [
  { id: "01", titulo: "Vivero", modulo: "Módulo 1", fecha: "2026-09-08", descripcion: "Página web para un vivero con catálogo de plantas y cuidados básicos.", ruta: "vivero/index.html" },
  { id: "02", titulo: "Pastelería", modulo: "Módulo 1", fecha: "2026-09-18", descripcion: "Diseño de sitio web para una pastelería con menú de postres.", ruta: "pastel/index.html" },
  { id: "03", titulo: "Página de Música con Flexbox", modulo: "Módulo 1", fecha: "2026-09-22", descripcion: "Interfaz de reproductor/plataforma de música maquetada con Flexbox.", ruta: "flexbox-musica/index.html" },
  { id: "04", titulo: "Página de Videojuegos", modulo: "Módulo 1", fecha: "2026-09-22", descripcion: "Landing page temática de videojuegos utilizando distribución en Flexbox.", ruta: "flexbox-videojuegos/index.html" },
  { id: "05", titulo: "Catálogo de Relojes con Flexbox", modulo: "Módulo 1", fecha: "2026-09-23", descripcion: "Catálogo e inventario de relojes maquetado con Flexbox.", ruta: "catalogo-relojes/index.html" },
  { id: "06", titulo: "Práctica General de Flexbox", modulo: "Módulo 1", fecha: "2026-09-23", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "paginaflexbox/index.html" },
  { id: "07", titulo: "Ejercicios básicos de JavaScript", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "ejercicios-basicos-js/index.html" },
  { id: "08", titulo: "Calculo de Bono", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "bono/index.html" },
  { id: "09", titulo: "Distancia entre dos puntos", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "distancia-entre-puntos/index.html" },
  { id: "10", titulo: "Recicladora", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "recicladora/index.html" },
  { id: "11", titulo: "My-To-Do-List", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "my-to-do-list/index.html" },
  { id: "12", titulo: "Cocina económica", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "cocina-economica/index.html" },
  { id: "13", titulo: "Cartonería", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "catrinas/index.html" },
  { id: "14", titulo: "Galeria de imágenes", modulo: "Módulo 1", fecha: "2026-10-08", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "galeria-imagenes/index.html" },
  { id: "15", titulo: "Lista de tareas", modulo: "Módulo 1", fecha: "2026-10-29", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "lista-de-tareas/index.html" },
  { id: "16", titulo: "Practica de EventListeners en Java Script", modulo: "Módulo 1", fecha: "2026-10-29", descripcion: "Ejercicio integrador maquetando una estructura web completa.", ruta: "event-listeners/index.html" }
];

function cargarTarjetas(lista = actividades) {
  const container = document.getElementById("cardsContainer");
  if (!container) return;
  
  container.innerHTML = "";

  lista.forEach(act => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-content">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="card-tag">Actividad #${act.id}</span>
          <small style="font-size: 0.8rem; font-weight: 600;">📅 ${act.fecha}</small>
        </div>
        
        <p style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.2rem;">
          ${act.modulo}
        </p>

        <h3 style="margin-bottom: 0.4rem;">${act.titulo}</h3>
        <p style="font-size: 0.85rem;">${act.descripcion}</p>
      </div>
      
      <div class="card-buttons">
        <button class="btn-open" onclick="abrirModal('${act.titulo}', '${act.ruta}', '${act.id}')">
          Abrir Ejercicio ✨
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function abrirModal(titulo, ruta, id) {
  const modalTitle = document.getElementById("modalTitle");
  const projectIframe = document.getElementById("projectIframe");
  const codeContent = document.getElementById("codeContent");
  const modalOverlay = document.getElementById("modalOverlay");

  if (modalTitle) modalTitle.innerText = titulo;
  if (projectIframe) projectIframe.src = ruta;

  // Extraemos el código completo desde la etiqueta <template> correspondiente en el HTML
  const template = document.getElementById(`code-${id}`);
  if (codeContent && template) {
    codeContent.textContent = template.innerHTML.trim();
  } else if (codeContent) {
    codeContent.textContent = "Código no disponible.";
  }

  cambiarPestana('preview');
  if (modalOverlay) modalOverlay.style.display = "flex";
}

function cambiarPestana(tipo) {
  const panePreview = document.getElementById("panePreview");
  const paneCode = document.getElementById("paneCode");
  const btnPrev = document.getElementById("tabPreviewBtn");
  const btnCode = document.getElementById("tabCodeBtn");

  if (tipo === 'preview') {
    panePreview.classList.add("active");
    paneCode.classList.remove("active");
    btnPrev.classList.add("active");
    btnCode.classList.remove("active");
  } else {
    paneCode.classList.add("active");
    panePreview.classList.remove("active");
    btnCode.classList.add("active");
    btnPrev.classList.remove("active");
    
    // Aplica los colores de Prism.js de forma garantizada
    const codeEl = document.getElementById("codeContent");
    if (codeEl && window.Prism) {
      Prism.highlightElement(codeEl);
    }
  }
}

function cerrarModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const projectIframe = document.getElementById("projectIframe");

  if (modalOverlay) modalOverlay.style.display = "none";
  if (projectIframe) projectIframe.src = "";
}

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

document.addEventListener("DOMContentLoaded", () => {
  cargarTarjetas();
});