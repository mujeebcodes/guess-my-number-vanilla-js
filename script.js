const body = document.querySelector("body");
const replay = document.querySelector("header button");
const mystery_num_display = document.querySelector(".mystery-number");
const player_guess = document.querySelector(".user-input input");
const check_button = document.querySelector(".user-input button");
const clue = document.querySelector(".clue");
const score = document.querySelector(".score span");
const highscore = document.querySelector(".highscore span");

let mystery_num = Math.ceil(Math.random() * (20 - 1) + 1);

const playGame = () => {
  if (
    Number(player_guess.value) > 20 ||
    Number(player_guess.value) < 1 ||
    !player_guess.value
  ) {
    clue.textContent = "🤷‍♂️ Please enter a valid number";
    return;
  }

  if (Number(player_guess.value) === mystery_num) {
    clue.textContent = "🎉 Correct number!";
    body.style.backgroundColor = "#60b347";
    highscore.textContent =
      Number(score.innerText) > highscore.textContent
        ? Number(score.innerText)
        : highscore.textContent;
    mystery_num_display.textContent = mystery_num;
  } else if (Number(player_guess.value) < mystery_num) {
    clue.textContent = "📉 Too low!";
    score.textContent = Number(score.innerText) - 1;
  } else {
    clue.textContent = "📉 Too High!";
    score.textContent = Number(score.innerText) - 1;
  }

  if (Number(score.innerText) < 1) {
    clue.textContent = "Game over. Please try again.";
    return;
  }
};

check_button.addEventListener("click", playGame);
replay.addEventListener("click", () => {
  mystery_num_display.textContent = "?";
  clue.textContent = "Start guessing...";
  score.textContent = 20;
  player_guess.value = "";
  mystery_num = Math.floor(Math.random() * (20 - 1) + 2);
});
