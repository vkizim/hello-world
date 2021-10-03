const startBtn = document.querySelector('#start'),
  screens = document.querySelectorAll('.screen'),
  timeList = document.querySelector('#time-list'),
  timeEl = document.querySelector('#time'),
  board = document.querySelector('#board'),
  colors = ['#8d230f', '#1e434c', '#9b4f0f', '#c99e10', '#6e6702', '#c05805', '#db9501'];
let time = 0,
  score = 0;
startBtn.addEventListener('click', (e) => {
  e.preventDefault;
  screens[0].classList.add('up');
});
timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains('time-btn')) {
    time = +e.target.getAttribute('data-time');
    if (!time) {
      time = getRandomNumber(10, 30);
    }
    screens[1].classList.add('up');
    startGame();
  }
});
board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove();
    createRandomCircle();
  } else {

  }
});


function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);

}



function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame(params) {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Cчет <span class="primary">${score} </span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(10, 60);
  const {
    width,
    height
  } = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size),
    y = getRandomNumber(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `${getRandomColor()}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}