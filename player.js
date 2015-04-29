var Player = function() {

  this.deck = [];
  this.discard = [];

  return this;
}

Player.prototype.bottomOfDeck = function() {
  return this.deck.length === 0 && this.discard.length > 0;
}

Player.prototype.isOut = function() {
  return this.deck.length === 0 && this.discard.length === 0;
}

Player.prototype.popCard = function(number) {
  var popped = null;

  while(number-- > 0) {
    if(this.bottomOfDeck()) { this.makeStashDeck(); }
    else if(this.isOut()) { return popped; }

    popped = this.deck[this.deck.length - 1];
    this.deck = this.deck.slice(0, this.deck.length - 1);
  }
  
  return popped;
}

Player.prototype.makeStashDeck = function() {
  this.deck = this.discard;
  this.discard = [];
}

Player.prototype.setDeck = function(deck) {
  this.deck = deck;
  this.discard = [];
}

Player.prototype.stashWinnings = function(winnings) {
  this.discard.concat(winnings);
}

Player.prototype.addCardToDeck = function(card) {
  this.deck.push(card);
}

Player.prototype.shuffleDeck = function() {
  var deckClone = this.deck.slice(0),
      newDeck = [],
      deckCount = deckClone.length,
      index, length;

  while(newDeck.length < deckCount) {
    index = parseInt(Math.random() * deckClone.length);
    value = deckClone[index];
    
    deckClone = deckClone.slice(0, index).concat(deckClone.slice(index + 1, deckClone.length));
    newDeck.push(value);
  }

  this.deck = newDeck;
}
