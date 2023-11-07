let timer = 1;
let x = 0;
let gameRunning = false;
let gameInterval;

function toggleGame() {
  const startButton = document.getElementById("startButton");

  if (gameRunning) {
    
    clearInterval(gameInterval);
    startButton.textContent = "Start";
    x = 0;
    updateScore();
    timer = 1;
  } else {
   
    gameInterval = setInterval(randsomPlace, 1300);
    startButton.textContent = "Stop";
  }

  gameRunning = !gameRunning;
}

function randsomPlace() {
  const target = document.getElementById("target");
  const screen = document.getElementById("d1");

  const screenWidth = screen.clientWidth;
  const screenHeight = screen.clientHeight;

  const targetWidth = target.clientWidth;
  const targetHeight = target.clientHeight;

  const maxX = screenWidth - targetWidth;
  const maxY = screenHeight - targetHeight;

  if (timer <= 50) {
    timer++;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
  } else {
    updateScore();
  }
}

function scoreCnt() {
  x++;
  updateScore();
}

function updateScore() {
  const scoreElement = document.getElementById("show");
  scoreElement.innerHTML = "Score: " + x;
}
