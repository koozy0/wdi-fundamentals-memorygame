// variables
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

// function for game logic
// only execute if 2 cards in play
// if 2 cards are the same, match found
// e;se try again
var checkForMatch = function()
{
	if(cardsInPlay.length === 2)
	{
		if(cardsInPlay[0] === cardsInPlay[1])
		{
			console.log("You found a match!");
		}
		else
		{
			console.log("Sorry, try again.");
		}
	}
}

// function to flip card, store and print card flipped
var flipCard = function(cardId)
{
	var cardFlipped = cards[cardId];
	cardsInPlay.push(cardFlipped);
	console.log("User flipped " + cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);
