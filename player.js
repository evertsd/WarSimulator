var Player = function() {

  var deck = [];
  var discard = [];

  return this;
}

Player.prototype.bottomOfDeck = function() {
  return this.deck.length === 0 && this.discard.length > 0;
}

Player.prototype.isOut = function() {
  return this.deck.length === 0 && this.discard.length === 0;
}

Player.prototype.popCard = function() {
  var popped = null;
  if(this.bottomOfDeck()) { this.makeStashDeck(); }
  else if(this.isOut()) { return popped; }

  popped = this.deck[this.deck.length - 1];
  this.deck = this.deck.slice(0, this.deck.length - 1);

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



