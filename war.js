var War = function(numberOfPlayers) {

  this.players = [new Player(), new Player()];
  this.fullDeck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
                  5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7,
                  8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10,
                  11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14];

  this.initPlayers();
}

War.prototype.initPlayers = function() {
  var index = 0;

  while(index < this.fullDeck.length) {
    this.players[0].addCardToDeck(this.fullDeck[index++])
    this.players[1].addCardToDeck(this.fullDeck[index++])
  }

  this.players[0].shuffleDeck();
  this.players[1].shuffleDeck();
}

War.prototype.topCards = function(number) {
  var cards = [];
  number = number || 1;

  for(var i = 0; i < this.players.length; i++) {
    cards[i] = this.players[i].popCard(number);
  }

  return cards;
}

War.prototype.findWinner = function(cards) {
  var winners = [],
      topCard = 0;

  for(var i = 0; i < this.players.length; i++) {
    if(cards[i] > topCard) {
      winners.push(i);
    }
  }

  // TODO: HANDLE WAR CASES
  return { player: winners[0], cards: cards };
}

War.prototype.battle = function() {
  var cards = topCards(),
      winner = findWinner(cards);

  winner['player'].stashWinnings(winner['cards']);
}

