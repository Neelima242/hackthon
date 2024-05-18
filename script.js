document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('diceCanvas');
    const context = canvas.getContext('2d');

    function drawDice(number) {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the border of the dice
        context.strokeStyle = 'red';
        context.lineWidth = 3;
        context.strokeRect(10, 10, 180, 180);

        // Draw the number in the center of the dice
        context.fillStyle = 'grey';
        context.font = '100px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(number, canvas.width / 2, canvas.height / 2);
    }

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        drawDice(randomNumber);
    }

    // Initial dice face
    drawDice(1);

    // Listen for space key press
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            rollDice();
        }
    });
});