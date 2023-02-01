const sugestaoInput = document.getElementById("sugestao");
const bia = document.getElementById("bia");
const win = document.getElementById("ganhou");
const lose = document.getElementById("perdeu");
const submitButton = document.querySelector("button");

const randomNumber = Math.floor(Math.random() * 100) + 1;
const correctNumber = randomNumber;

const attempts = [];

submitButton.addEventListener('click', function () {
  const userGuess = Number(sugestaoInput.value);

  if (attempts.includes(userGuess)) {
    alert("Você já tentou este número antes");
    return;
  }

  if (userGuess > randomNumber) {
    alert("O número que você digitou é maior");
  } else if (userGuess < randomNumber) {
    alert("O número que você digitou é menor");
  }

  if (attempts.length < 10) {
    attempts.push(userGuess);

    if (attempts.includes(correctNumber)) {
      win.style.display = "block";
      bia.style.display = "none";
      lose.style.display = "none";
      alert("Parabéns, você ganhou!");
    }
  } else {
    alert("Você perdeu");
    attempts.length = 0;
    lose.style.display = "block";
    bia.style.display = "none";
    win.style.display = "none";
  }

  document.getElementById("resultado").innerHTML = attempts;
});
