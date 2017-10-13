//wait for DOM to load then call reset for initial shuffle of cards
$(function(){
    reset();
})

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle() {
    var array = $('.deck li');
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    //empties out the parent ul and then appends the new shuffled children
    $('.deck').empty().append(array);
    addCardClickHandlers();
}

function addCardClickHandlers(){
    //setup event listener for when card is clicked
    $('.deck li').click(function(){
        if(openCards.length !== 2 && !$(this).hasClass('open')){
            //call showSymbol function
            showSymbol(this);
            //call openCardList function
            openCardList(this);
        };
    });
};

//display the cards symbol (maybe this as a toggleClass?)
function showSymbol(card){
    $(card).addClass('show').addClass('open');
}
//add card to a list of open cards
//if list already has another card check to see if the two cards match
var openCards = [];
var matches = 0;
var moveCounter = 0;

function openCardList(card){
    $(card).find('i').attr('class').split(/\s+/).forEach(function(clz){
        if(clz !== 'fa'){
            openCards.push(clz);
        };  
    });
    if(openCards.length === 2){
        if(openCards[0] === openCards[1]){
            $('.' + openCards[0]).parent('li').addClass('match');
            matches += 1;
            openCards = [];
         } else {
            window.setTimeout(function(){
                openCards.forEach(function(clz){
                    $('.'+ clz).parent('li').removeClass('show').removeClass('open');
                    console.log(clz);
                    openCards = [];
                });
            }, 2000);
        } 
        moveCounter += 1;
    }
}
//increment move counter and display it on the page
function counterDisplay(){


}
//if all cards match display a message (modal) with the final score
function allMatched(){
    //stop timer

}

//set function for reset button
function reset(){
    //reset the board
    shuffle();
    $('deck li').removeClass('show').removeClass('match').removeClass('open');
    moveCounter = 0;
    matches = 0;
}

//timer


