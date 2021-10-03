const board = document.querySelector('#board'),
  SQUARES_NUMBER = 500,
  colors = ['#8d230f', '#1e434c', '#9b4f0f', '#c99e10', '#6e6702', '#c05805', '#db9501'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.classList.add('start');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));
  board.append(square);
  setTimeout(() => {
    square.classList.remove('start');
  }, 0);


}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  //You may leave this style empty
  element.style.backgroundColor = '';
  element.style.boxShadow = '';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}