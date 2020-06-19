document.addEventListener('DOMContentLoaded', () => {

    // cards 
const cardArray = [

    {
        name:'cher',
        img: 'images/cher.jpg'
    },
    {
        name:'cher',
        img: 'images/cher.jpg'
    },
    {
        name:'dionne',
        img: 'images/dionne.jpg'
    },
    {
        name:'dionne',
        img: 'images/dionne.jpg'
    },
    {
        name:'murray',
        img: 'images/murray.jpg'
    },
    {
        name:'murray',
        img: 'images/murray.jpg'
    },
    {
        name:'josh',
        img: 'images/josh.jpg'
    },
    {
        name:'josh',
        img: 'images/josh.jpg'
    },
    {
        name:'travis',
        img: 'images/travis.jpg'
    },
    {
        name:'travis',
        img: 'images/travis.jpg'
    },
    {
        name:'tai',
        img: 'images/tai.jpg'
    },
    {
        name:'tai',
        img: 'images/tai.jpg'
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
const playAgain = document.querySelector('#playAgain')
playAgain.addEventListener('click', refreshPage );

function refreshPage(){
    window.location.reload();
} 

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // check for matches

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('You have clicked the same image!').delay(1000);
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!').delay(1000);
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('Way harsh - try again!').delay(1000);
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
      playAgain.style.display = "block";
    }
  }
  // flip the card

  function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
      }
    }
createBoard()
})

