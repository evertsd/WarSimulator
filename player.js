var Player = function() {

  var deck = [];
  var discard = [];

  var setDeck = function(deck) {
    this.deck = deck;
    this.discard = [];
  }

  var stashWinnings = function(winnings) {
    this.discard.concat(winnings);
  }
}