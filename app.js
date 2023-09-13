// app.js

// Obtener referencias a elementos HTML
const startTimeInput = document.getElementById('start-time');
const endTimeInput = document.getElementById('end-time');
const submitButton = document.getElementById('submit-button');

// Evento click en el botón de reserva
submitButton.addEventListener('click', () => {
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    // Validar la selección de horarios y realizar la reserva
    if (isValidTime(startTime, endTime)) {
        // Aquí puedes agregar la lógica para realizar la reserva en la base de datos o mostrar un mensaje de confirmación.
    } else {
        alert('Por favor, selecciona horarios válidos.');
    }
});

// Función para validar los horarios de inicio y fin
function isValidTime(startTime, endTime) {
    // Implementa la lógica de validación, por ejemplo, asegurándote de que endTime sea posterior a startTime.
    return true; // Cambia esto según tus necesidades.
}
