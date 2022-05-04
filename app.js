const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]

// Random Selection of Array
cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');
const result = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];


// Create Board
function createBoard () {
    // For Loop
    for (let i = 0; i < cardArray.length; i++) {
        // Create Element
      const card = document.createElement('img');
      // setting Atrributes
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      // Click Event
      card.addEventListener('click', flipCard);
      // Using AppendChild
      grid.appendChild(card);
    }
}

// Call the function
createBoard();

// Check Match
function checkMatch() {
// document.querySelectorAll('#grid img'); big projects
const cards = document.querySelectorAll('img');
const optionOneId = cardsChosenIds[0];
const optionTwoId = cardsChosenIds[1];
console.log(cards);
    console.log('check for a match!');

if (optionOneId == optionTwoId) {
    alert('Same Image, 🤷‍♂️');
}
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Found A Match, Go Sleep Now. 😉');
       cards[optionOneId].setAttribute('src', 'images/white.png');
       cards[optionTwoId].setAttribute('src', 'images/white.png');
       // Remove Clicks
       cards[optionOneId].removeEventListener('click',flipCard);
       cards[optionTwoId].removeEventListener('click',flipCard);
       // recording matches won
       cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Boo! 👎');
    }
    result.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
result.textContent = ' Hooray, You Won a Starrr 🌟';
    }
}

console.log(cardArray);
// Flip card function
function flipCard() {
   // Interact with elements that is clicked. 
   const cardId =  this.getAttribute('data-id');
  // Push an item in an array
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds)
  // reveals clicked block
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500);
  }

}
