// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


const names = [];

function writeCards(names) {
    const newNames = [];
    for (let i = 0; i < names.length; i++) {
      console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      newNames.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newNames;
  }

  writeCards(names);

function countDown(){

    let count = 10;
    while (count >= 0 ) {
      console.log(count--);
}

}