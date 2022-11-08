const palette = document.getElementById('color-palette');
const boardSize = 5;

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
const randomColor1 = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(
  Math.random() * 254
)} , ${Math.floor(Math.random() * 254)})`;

const randomColor2 = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(
  Math.random() * 254
)} , ${Math.floor(Math.random() * 254)})`;
const randomColor3 = `rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(
  Math.random() * 254
)} , ${Math.floor(Math.random() * 254)})`;

color1.style.backgroundColor = 'rgb(0, 0, 0)';
color2.style.backgroundColor = randomColor1;
color3.style.backgroundColor = randomColor2;
color4.style.backgroundColor = randomColor3;

function changeSelected(event) {
  const pickColor = document.querySelectorAll('.color');
  for (let i = 0; i < pickColor.length; i += 1) {
    pickColor[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const board = document.getElementById('pixel-board');
const inputBoardSize = document.getElementById('board-size');
const btnVqv = document.getElementById('generate-board');
const errorMsg = document.getElementById('error');


function createBoard() {
  const div = document.createElement('div');
  div.classList = 'pixel';
  div.addEventListener('click', print);
  return div;
}

function createRow(length) {
  const row = document.createElement('li');
  row.className = 'row';
  for (let i = 0; i < length; i += 1) {
    row.appendChild(createBoard());
  }
  return row;
}

function appendBoard(size) {
  let currentSize = size;
  if (currentSize < 5) {
    currentSize = 5;
    errorMsg.innerHTML = 'Selecione um valor entre 5 e 50';
  } else if (currentSize > 50) {
    currentSize = 50;
    errorMsg.innerHTML = 'Selecione um valor entre 5 e 50';
  }
  for (let i = 0; i < currentSize; i += 1) {
    board.appendChild(createRow(currentSize));
  }
  }

function changeBoard() {
  if (!inputBoardSize.value) {
    alert('Board inválido!');
  } else {
    board.innerHTML = '';
    errorMsg.innerHTML = '';
    appendBoard(inputBoardSize.value);
  }
    }
  

// referência de pesquisa=  https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

btnVqv.addEventListener('click', changeBoard)

function print(event) {
  const getCollor = document.querySelector('.selected');
  const setPrint = window.getComputedStyle(getCollor);
  const printPixel = setPrint.getPropertyValue('background-color');
  const errorMsg = document.getElementById('size-error');

  event.target.style.backgroundColor = printPixel;
}

const btnClear = document.querySelector('#clear-board');
const pixels = document.getElementsByClassName('pixel');
function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

btnClear.addEventListener('click', clearBoard);

function onLoadPage() {
  appendBoard(boardSize);
}

window.onload = onLoadPage;