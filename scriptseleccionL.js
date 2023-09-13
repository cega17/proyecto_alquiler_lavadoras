document.addEventListener("DOMContentLoaded", function() {
    const botonesDespachar = document.querySelectorAll(".despachar");

    // Event listener para los botones de despacho
    botonesDespachar.forEach(function(boton) {
        boton.addEventListener("click", function() {
            const lavadoraSeleccionada = boton.getAttribute("data-lavadora");
            despacharLavadora(lavadoraSeleccionada);
        });
    });

    // Función para despachar una lavadora (simulado)
    function despacharLavadora(modelo) {
        // Implementa la lógica de despacho aquí (puede ser una solicitud al servidor, etc.)
        alert(`Lavadora ${modelo} despachada con éxito.`);
    }
});
