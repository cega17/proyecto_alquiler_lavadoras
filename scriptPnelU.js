document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const contenido = document.getElementById("contenido");

    // Event listeners para los enlaces del menú
    menu.addEventListener("click", function(event) {
        event.preventDefault();
        const enlace = event.target.getAttribute("href").substring(1); // Obtener el nombre del enlace sin el #
        cargarContenido(enlace);
    });

    // Función para cargar contenido en el panel
    function cargarContenido(pagina) {
        // Simplemente como ejemplo, aquí puedes cargar el contenido de las páginas usando AJAX o de la manera que prefieras
        if (pagina === "historial") {
            contenido.innerHTML = "<h3>Historial de Reservas</h3><p>Aquí se mostraría el historial de tus reservas.</p>";
        } else if (pagina === "perfil") {
            contenido.innerHTML = "<h3>Perfil del Usuario</h3><p>Aquí se mostrarían los detalles de tu perfil.</p>";
        } else if (pagina === "editar-perfil") {
            contenido.innerHTML = "<h3>Editar Perfil</h3><p>Aquí podrías editar tu perfil.</p>";
        } else if (pagina === "cerrar-sesion") {
            // Redirigir al usuario a la página de inicio de sesión o cerrar la sesión (dependiendo de tu implementación)
            window.location.href = "login.html"; // Cambia esto según tu enfoque
        }
    }
});
