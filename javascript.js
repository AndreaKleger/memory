let cards = [];
cards.push("./resources/ape.png");
cards.push("./resources/ape.png");
cards.push("./resources/elephant.png");
cards.push("./resources/elephant.png");

let playingCards = [];

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

function resetCards() {
  let count = 0;
  //first empty array
  playingCards = [];
  let localCards = cards.slice();
  while (localCards.length > 0) {
    count++;
    let randomNr = randomNumber(localCards.length - 1);
    console.log(randomNr);

    let path = localCards[randomNr];
    console.log(path);
    // wir fügen die Pfade jetzt der Reihe nach in den Array ein,
    // aus dem wir später während dem Spiel die Karten beziehen
    playingCards.push(path);

    //jetzt fügen wir auf dem Feld die Kartenrückseiten ein
    document.getElementById("card" + count).src = "./resources/background.png";
    //der bereits gebrauchte Pfad wird aus dem Array entfernt
    localCards.splice(randomNr, 1);
  }
}

function turnCard(cardNr) {
  console.log(playingCards);
  document.getElementById("card" + cardNr).src = playingCards[cardNr - 1];
}
