document.addEventListener('DOMContentLoaded', function() {
    const numbersContainer = document.getElementById('numbers');
    const selectedNumbersInput = document.getElementById('selected-numbers');
    const resetButton = document.getElementById('reset-btn');
    const dateTimeDisplay = document.getElementById('date-time');

    // Crear los botones de selección de números
    for (let i = 0; i <= 9; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.classList.add('number');
        numberDiv.addEventListener('click', function() {
            if (!numberDiv.classList.contains('selected')) {
                numberDiv.classList.add('selected');
                updateSelectedNumbers();
            }
        });
        numbersContainer.appendChild(numberDiv);
    }

    // Actualizar el campo de números seleccionados
    function updateSelectedNumbers() {
        const selectedNumbers = document.querySelectorAll('.number.selected');
        const selectedValues = Array.from(selectedNumbers).map(num => num.textContent).join(', ');
        selectedNumbersInput.value = selectedValues;
    }

    // Resetear la selección de números
    resetButton.addEventListener('click', function() {
        const selectedNumbers = document.querySelectorAll('.number.selected');
        selectedNumbers.forEach(num => num.classList.remove('selected'));
        selectedNumbersInput.value = '';
    });

    // Mostrar la fecha y hora actuales
    function updateDateTime() {
        const now = new Date();
        dateTimeDisplay.textContent = now.toLocaleString();
    }
    updateDateTime();
    setInterval(updateDateTime, 1000); // Actualizar cada segundo
});
