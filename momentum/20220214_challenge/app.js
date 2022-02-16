const randomGameForm = document.querySelector("#randomGameForm"); // eslint-disable-line no-unused-vars
const playBtn = document.querySelector("#playBtn");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");

function playRandomGame(event) {
  const maxNumber = parseInt(document.querySelector("#maxNumber").value, 10);
  const guessNumber = parseInt(
    document.querySelector("#guessNumber").value,
    10
  );
  const randNummber = rand(maxNumber);

  if (maxNumber < guessNumber) {
    alert("범위는 0 이상 " + maxNumber + "이하로 입력하여주세요.");
  } else {
    result1.classList.remove("hidden");
    const resultText =
      "You chose:" + guessNumber + ", the machine chose: " + randNummber;
    result1.innerText = resultText;

    result2.classList.remove("hidden");
    if (randNummber === guessNumber) {
      result2.innerText = "You win!";
    } else {
      result2.innerText = "You lost!";
    }
  }
}

playBtn.addEventListener("click", playRandomGame);

//랜덤함수지정
function rand(max) {
  return parseInt(Math.random() * (max + 1), 10);
}