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

  var popCard = function() {
    var popped = deck[deck.length - 1];
    this.deck = deck.slice(0, deck.length - 1);

    return popped;
  }
}