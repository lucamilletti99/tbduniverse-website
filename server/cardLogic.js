const { decks } = require('cards');

// Create a standard 52 card deck
const deck = new decks.StandardDeck();

//shuffle the newly created deck
deck.shuffleAll();

function getHand(){
    hand userHand = deck.draw(2);
    return userHand;
}

function playBlackJack(){
    hand userHand = getHand();
    hand dealerHand = deck.draw(1);    
}
