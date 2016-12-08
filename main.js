
var Card = function (suit, value) {
  this.suit = suit
  this.value = value
}

Card.prototype.display = function () {
  return `${this.value} of ${this.suit}`
}


function Deck () {
  var suits = [ "Clubs", "Spades", "Hearts", "Diamonds" ]
  var values = [ "Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King" ]

  var cards = []
  suits.forEach(suit => {
    values.forEach(value => {
  Card.call(this, suit, value)
      var card = new Card(suit, value)
      cards.push(card)
    })
  })
  this.cards = cards
}

Deck.prototype.deal = function () {
  this.dealt = []
  var cardSelector = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1)[0]
  var cardSelector2 = this.cards.splice(Math.floor(Math.random()*this.cards.length), 1)[0]
  this.dealt.push(cardSelector)
  this.dealt.push(cardSelector2)
}

var deck = new Deck()

deck.deal()
deck.dealt

function Hand (player) {
  this.player = player
  this.cards = deck.dealt
}

Hand.prototype.show = function() {
  return `${this.player}'s hand has a ${this.cards[0].display()} and ${this.cards[1].display()}`
}
