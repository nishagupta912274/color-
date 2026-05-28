const color = ['white', 'red', 'green', 'orange', 'aqua', 'crimson', 'blue'];

let i = 0;

let box = document.getElementById('box');
let btn = document.getElementById('btn');
let colorName = document.getElementById('colorName');

function change() {

    if (i < color.length - 1) {
        i++;
    } else {
        i = 0;
    }

    btn.innerHTML = 'Change ' + i;

    box.style.backgroundColor = color[i];

    colorName.innerText = color[i];
}
