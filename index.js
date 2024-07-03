
function writeCards(cards, event){
    const newArray = [];
    for (let i = 0; i < cards.length; i++) {
        newArray.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return newArray
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

const countDown = number => {
    while (number >= 0){
        console.log(number)
        number--
    }
}
countDown(5)
