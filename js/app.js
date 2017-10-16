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
    //empties out the parent ul and then appends the new shuffled children to the DOM
    $('.deck').empty().append(array);
    //call the cardClickHandlers function to make sure we are now listening for clicks on the list objects
    addCardClickHandlers();
}

function addCardClickHandlers(){
    //setup event listener for when card is clicked
    $('.deck li').click(function(){
        //start the timer function
        timer()
        //looks at the cards length to determine if another card can be opened by checking length and class
        if(openCards.length !== 2 && !$(this).hasClass('open')){
            //call showSymbol function
            showSymbol(this);
            //call openCardList function
            openCardList(this);
        };
    });
};

//display the cards symbol
function showSymbol(card){
    $(card).addClass('show').addClass('open');
}
//array of open cards
var openCards = [];
//match counter
var matches = 0;
//move counter
var moveCounter = 0;

function openCardList(card){
    //have to traverse the DOM to get to the second part of the i tags class(part following the fa) and push the class to the openCards list for comparison
    $(card).find('i').attr('class').split(/\s+/).forEach(function(clz){
        if(clz !== 'fa'){
            openCards.push(clz);
        };  
    });
    //if the cards array length is equal to two then check if index 0 and index 1 are a match
    if(openCards.length === 2){
        //if index0 and index1 of the openCards array are a match then add the match class
        if(openCards[0] === openCards[1]){
            $('.' + openCards[0]).parent('li').addClass('match');
            //increment the match counter
            matches += 1;
            //clear out the openCards array to ensure functionality for next comparision
            openCards = [];
        //if index0 and index1 are not a match then remove the show class and open class to flip cards back over after a delay
         } else {
            window.setTimeout(function(){
                openCards.forEach(function(clz){
                    $('.'+ clz).parent('li').removeClass('show').removeClass('open');
                    //clear the openCards array to ensure functionality for next comparision
                    openCards = [];
                });
            }, 1000);
        } 
        //increment the moves counter and update the moves display and star display based off of the move counter
        moveCounter += 1;
        counterDisplay();
        stars();
        allMatched();
    }
}
//increment move counter and display it on the page
function counterDisplay(){
    $('.moves').text(moveCounter);
}

//if all cards match display a message (modal) with the final score
function allMatched(){
    //if matches are equal to 8 then display modal
    if(matches === 8){
        //stop timer and record time 
        //add time and star rating info to the dialog
        //open dialog
        $('#dialog').dialog('open');
         //stop timer
    };
};

//set up modal
$( "#dialog" ).dialog({
    autoOpen: false,
    buttons: {
        Yes: function() {
            reset();
            $(this).dialog('close');
        }
    }
});

//stars function tracks how many stars the player has
function stars(){
    switch(moveCounter){
        //9 moves then start rating moves to 2 stars
        case 9:
        $('.stars li').find('i').eq(0).addClass('hidden');
        break;
        //16 moves and start rating moves to 1 star
        case 16:
        $('.stars li').find('i').eq(1).addClass('hidden');
        break;
        //24 moves and star rating is zero
        case 24:
        $('.stars li').find('i').eq(2).addClass('hidden');
        break;
    }
};

//set function for reset button
function reset(){
    $('.card').removeClass('show').removeClass('match').removeClass('open');
    shuffle();
    moveCounter = 0;
    //reset the counterDisplay function
    counterDisplay();
    matches = 0;
    //reset stars to 3
    $('.stars li').find('i').removeClass('hidden');
}

//event listener for reset button
$('.restart').click(function(){
    reset();
})

//timer
function timer(){

}

