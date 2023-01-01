const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const currentColorEl = document.querySelector('.current-color');

btn.addEventListener('click', () => {
    const randomHexColor = getRandomHexColor();
    document.body.style.backgroundColor = randomHexColor;
    currentColorEl.textContent = randomHexColor;
});

function getRandomHexColor() {
    let randomHexColor = '#';
    for (let i = 0; i < 6; i++) {
        randomHexColor += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    return randomHexColor;
}