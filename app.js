const cardArray = [
  {
    name: "fries",
    img: "./images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },

  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
];
let cardChossen = [];
let cardsChosenIds = [];
const cardsWon = [];

class Sort {
  constructor(arr) {
    this.arr = arr;
  }

  sort() {
    return this.arr.sort(() => 0.5 - Math.random());
  }
}

class Board {
  _createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChossen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardChossen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChossen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log("check for match");

  if (optionOneId === optionTwoId) {
    cards[[optionOneId]].setAttribute("src", "images/blank.png");
    cards[[optionTwoId]].setAttribute("src", "images/blank.png");
    alert(" You have clicked the same image");
  }

  if (cardChossen[0] === cardChossen[1]) {
    alert("You found a match");
    cards[[optionOneId]].setAttribute("src", "images/white.png");
    cards[[optionTwoId]].setAttribute("src", "images/white.png");
    cards[[optionOneId]].removeEventListener("click", flipCard);
    cards[[optionTwoId]].removeEventListener("click", flipCard);
    cardsWon.push(cardChossen);
  } else {
    cards[[optionOneId]].setAttribute("src", "images/blank.png");
    cards[[optionTwoId]].setAttribute("src", "images/blank.png");
    alert("sorry try again");
  }
  resultDisplay.innerHTML = cardsWon.length;
  cardChossen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you found them all!!";
  }
}

const sortArr = new Sort(cardArray);

const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const board = new Board();
board._createBoard();
