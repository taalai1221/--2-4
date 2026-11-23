const countText = document.getElementById('count');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

let count = 0;

btnIncrement.addEventListener('click', () => {
    count++;
    countText.textContent = count;
    countText.style.color = 'green';
});

btnDecrement.addEventListener('click', () => {
    if (count > 0) {
        count--;
        countText.textContent = count;
        countText.style.color = 'red';
    }
});

const box = document.getElementById('box');
const coords = document.getElementById('coords');

box.addEventListener('mousemove', (event) => {
    coords.textContent = `x: ${event.offsetX} y: ${event.offsetY}`;
});

const colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = colorInput.value;
});