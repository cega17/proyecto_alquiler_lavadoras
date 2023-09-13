document.addEventListener("DOMContentLoaded", function() {
    const cambiarContrasenaButton = document.querySelector(".cambiar-contrasena");
    const confirmarCierreButton = document.querySelector(".confirmar-cierre");

    // Event listener para el botón "Cambiar Contraseña"
    cambiarContrasenaButton.addEventListener("click", function() {
        // Aquí puedes implementar la lógica para cambiar la contraseña
        alert("Lógica de cambio de contraseña (simulado)");
    });

    // Event listener para el botón "Sí, Cerrar Sesión"
    confirmarCierreButton.addEventListener("click", function() {
        // Aquí puedes implementar la lógica para cerrar la sesión
        alert("Sesión cerrada con éxito (simulado)");
        window.location.href = "inicio.html"; // Redirige a la página de inicio (cambia la URL según tu estructura)
    });
});
