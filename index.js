let timer = 1;
let x = 0;

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

    setTimeout(randsomPlace, 1300);
  } else {
    updateScore();
  }
}

function scoreCnt() {
  x++;
  updateScore();
}

function updateScore() {
  if (timer <= 50) {
    const scoreElement = document.getElementById("show");
    scoreElement.innerHTML = "score: " + x;
  } else {
    const scoreElement = document.getElementById("show");
    scoreElement.innerHTML = "score: 0";
  }
}
