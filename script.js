const palette = document.getElementById('color-palette');
function createColors(color) {
  const div = document.createElement('div');
  div.classList = color;
  return div;
}

function addDivs() {
  for (let index = 1; index <= 4; index += 1) {
    palette.appendChild(createColors(`color color${index}`));
  }
}

addDivs();
