/*
 * Create a list that holds all of your cards
 */
var cards = [{
        id: 1,
        icon: 'fa fa-paper-plane-o',
        match: 3},
    {
        id: 2,
        icon: 'fa fa-diamond',
        match: 4
    },
    {
        id: 3,
        icon:'fa fa-paper-plane-o',
        match: 1
    },
    {   
        id: 4,
        icon: 'fa fa-diamond',
        match: 2
    }]

//Display cards
$('.start').click(function(){
 //on click of start button call the shuffle function to shuffle the array
    shuffle(cards);
    console.log(cards);
//loop through each card and created its HTML
//add each cards HTML to the page
})


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//setup event listener for when card is clicked
$('li').click(function(){
//call showSymbol function
//call openCardList function

})
//display the cards symbol (maybe to this as a toggleClass?)
function showSymbol(){

}
//add card to a list of open cards
//if list already has another card check to see if the two cards match
function openCardList(){
//if cards match then call lockCards function and add the match class
//if cards do not match then remove them from the list and call showSymbol function to hide symbol
}
//lock cards in an open postion if they match from the openCardsList
function lockCards(){

}
//increment move counter and display it on the page
var moveCounter = 0;
function counterDisplay(){

}
//if all cards match display a message with the final score
function allMatched(){

}
