/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const figures = ["♦", "♥", "♠", "♣"];
  const cont = document.querySelector(".cont");
  const figure1 = document.querySelector(".figure1");
  const number = document.querySelector(".number");
  const figure2 = document.querySelector(".figure2");
  const btnChange = document.querySelector("#change-card");
  const btnSize = document.querySelector("#change-size");
  const timer = document.querySelector("h1");
  const width = document.querySelector("#width");
  const heigth = document.querySelector("#height");
  let count = 10;

  const changeCard = () => {
    count = 10;
    const randomFigure = figures[Math.floor(Math.random() * 4)];
    figure1.innerHTML = randomFigure;
    number.innerHTML = numbers[Math.floor(Math.random() * 13)];
    figure2.innerHTML = randomFigure;

    if (randomFigure == "♣" || randomFigure == "♠") {
      figure1.style.color = "black";
      number.style.color = "black";
      figure2.style.color = "black";
    } else {
      figure1.style.color = "red";
      number.style.color = "red";
      figure2.style.color = "red";
    }
  };

  btnChange.addEventListener("click", changeCard);

  btnSize.addEventListener("click", () => {
    cont.style.width = `${width.value}px`;
    cont.style.height = `${heigth.value}px`;
  });
  let counter = () => {
    if (count > 0) {
      timer.innerHTML = count;
      count--;
      setTimeout(counter, 1000);
    }
  };
  counter();

  setInterval(changeCard, 10000);
};
