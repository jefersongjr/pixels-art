const palette = document.getElementById('color-palette');

function createColors(color) {
  const div = document.createElement('div');
  div.classList = color;
  div.addEventListener('click', changeSelected);
  return div;
}

function addDivs() {
  for (let index = 1; index <= 4; index += 1) {
    palette.appendChild(createColors('color'));
  }
}

addDivs();

const color1 = document.querySelectorAll('.color')[0];
const color2 = document.querySelectorAll('.color')[1];
const color3 = document.querySelectorAll('.color')[2];
const color4 = document.querySelectorAll('.color')[3];

color1.classList.add('selected');

color1.style.backgroundColor = 'rgb(0, 0, 0)';
color2.style.backgroundColor = 'rgb(0, 128, 255)';
color3.style.backgroundColor = 'rgb(255, 51, 51)';
color4.style.backgroundColor = 'rgb(0, 153,76)';

function changeSelected(event) {
  const pickColor = document.querySelectorAll('.color');
  for (let i = 0; i < pickColor.length; i += 1) {
    pickColor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const board = document.getElementById('pixel-board');

function createBoard(pixel) {
  const div = document.createElement('div');
  div.classList = pixel;
  return div;
}

createBoard();
function appendBoard() {
  for (let index = 1; index <= 25; index += 1) {
    board.appendChild(createBoard('pixel'));
  }
}

appendBoard();
