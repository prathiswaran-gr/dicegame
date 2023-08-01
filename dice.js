function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function getWinner(num1, num2) {
  if (num1 == num2) {
    return "Draw";
  } else if (num1 > num2) {
    return "Player 1 Wins!";
  } else {
    return "Player 2 Wins!";
  }
}
function onRefreshButtonClicked() {
  var playerOneDiceValue = generateRandomNumber();
  var playerTwoDiceValue = generateRandomNumber();
  document.querySelector("h1").innerHTML = getWinner(
    playerOneDiceValue,
    playerTwoDiceValue
  );
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/dice" + playerOneDiceValue + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/dice" + playerTwoDiceValue + ".png");
}
onRefreshButtonClicked();

