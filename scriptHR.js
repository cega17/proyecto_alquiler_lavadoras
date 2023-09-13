document.addEventListener("DOMContentLoaded", function() {
    const listaReservas = document.querySelector(".lista-reservas");
    const detallesReserva = document.getElementById("detalles-reserva");

    // Event listener para el botón "Ver Detalles" de cada reserva
    listaReservas.addEventListener("click", function(event) {
        if (event.target.classList.contains("ver-detalles")) {
            mostrarDetallesReserva(event.target.parentNode);
        }
    });

    // Función para mostrar los detalles de una reserva
    function mostrarDetallesReserva(reserva) {
        // Obtener y mostrar los detalles de la reserva (puedes personalizar esto según tu lógica)
        const detalles = obtenerDetallesReserva(reserva);
        detallesReserva.innerHTML = detalles;
    }

    // Función simulada para obtener los detalles de una reserva
    function obtenerDetallesReserva(reserva) {
        const numeroReserva = reserva.querySelector("h3").textContent;
        const fechaInicio = reserva.querySelector("p:nth-child(2)").textContent;
        const fechaFin = reserva.querySelector("p:nth-child(3)").textContent;
        const totalPagado = reserva.querySelector("p:nth-child(4)").textContent;

        return `
            <h3>${numeroReserva}</h3>
            <p>${fechaInicio}</p>
            <p>${fechaFin}</p>
            <p>${totalPagado}</p>
            <button class="dejar-reseña">Dejar Reseña</button>
        `;
    }
});
