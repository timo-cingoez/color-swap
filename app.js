const colors = ['red', 'green', 'blue', 'purple', 'orange'];
const button = document.getElementById('btn');
const currentColorEl = document.querySelector('.current-color');

button.addEventListener('click', () => {
    const randomColor = getRandomColor(document.body.style.backgroundColor);
    document.body.style.backgroundColor = randomColor;
    currentColorEl.textContent = randomColor;
});

function getRandomColor(currentColor) {
    const randomColors = colors.slice(0);
    for (let i = 0; i < randomColors.length; i++) {
        if (randomColors[i] === currentColor) {
            randomColors.splice(i, 1);
            break;
        }
    }
    return randomColors[Math.floor(Math.random() * randomColors.length)];
}