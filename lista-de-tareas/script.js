// 1. Selección de elementos del DOM mediante sus ID
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// 2. Función para añadir una nueva tarea
function addTask() {
    // Validación: Verifica si el campo de texto está vacío
    if (inputBox.value === '') {
        alert("¡Debes escribir algo primero!");
    } else {
        // Crea un nuevo elemento de lista <li>
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Crea el botón/icono del bote de basura para eliminar la tarea
        let span = document.createElement("span");
        span.innerHTML = "🗑️"; 
        li.appendChild(span);

        // Limpia el campo de entrada después de agregar la tarea
        inputBox.value = "";

        // Guarda el estado actualizado en el almacenamiento local
        saveData();
    }
} // <--- ¡Aquí faltaba cerrar la llave de la función addTask()!

// 3. Listener para gestionar clics dentro de la lista
listContainer.addEventListener("click", function(e) {
  // Si se hace clic en la tarea (LI)
  if (e.target.tagName === "LI") {
    
    // Si está en Blanco ➡️ Cambia a Palomita (checked)
    if (!e.target.classList.contains("checked") && !e.target.classList.contains("unchecked")) {
      e.target.classList.add("checked");
    } 
    // Si está en Palomita ➡️ Cambia a Tache (unchecked)
    else if (e.target.classList.contains("checked")) {
      e.target.classList.remove("checked");
      e.target.classList.add("unchecked");
    } 
    // Si está en Tache ➡️ Vuelve a estar en Blanco
    else if (e.target.classList.contains("unchecked")) {
      e.target.classList.remove("unchecked");
    }
    
    saveData();
  } 
  // Si se hace clic en el bote de basura
  else if (e.target.tagName === "SPAN" || e.target.closest("span")) {
    e.target.closest("li").remove();
    saveData();
  }
}, false);

// 4. Funciones de Persistencia con LocalStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Inicialización: Muestra las tareas guardadas al cargar la página
showTask();