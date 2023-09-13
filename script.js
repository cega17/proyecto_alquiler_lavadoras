document.addEventListener("DOMContentLoaded", function() {
    const fechaInicioInput = document.getElementById("fecha-inicio");
    const fechaFinInput = document.getElementById("fecha-fin");
    const resumenFechaInicio = document.getElementById("resumen-fecha-inicio");
    const resumenFechaFin = document.getElementById("resumen-fecha-fin");
    const totalAPagar = document.getElementById("total-a-pagar");
    const realizarPagoButton = document.getElementById("realizar-pago");

    // Actualizar el resumen de la reserva cuando se cambian las fechas
    fechaInicioInput.addEventListener("change", actualizarResumen);
    fechaFinInput.addEventListener("change", actualizarResumen);

    // Función para actualizar el resumen de la reserva
    function actualizarResumen() {
        const fechaInicio = new Date(fechaInicioInput.value);
        const fechaFin = new Date(fechaFinInput.value);

        // Calcular la duración en horas
        const duracionHoras = Math.abs((fechaFin - fechaInicio) / 3600000);

        resumenFechaInicio.textContent = fechaInicio.toLocaleString();
        resumenFechaFin.textContent = fechaFin.toLocaleString();
        totalAPagar.textContent = (duracionHoras * 5).toFixed(2); // Precio por hora: $5.00
    }

    // Función para realizar el pago (Debes implementar la lógica de pago aquí)

    realizarPagoButton.addEventListener("click", function() {
        alert("¡Pago realizado con éxito! (Simulado)");
    });
});
