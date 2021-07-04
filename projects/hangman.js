var chooseCat = document.getElementsByClassName('hangman-choosecategory')[0];
var oneplayerbtn = document.getElementsByClassName('hangman-1player')[0];
var twoplayerbtn = document.getElementsByClassName('hangman-2players')[0];
var playerbtns = document.getElementsByClassName('hangman-playerbtns')[0]
var categories = document.getElementsByClassName('hangman-categoriescontainer')[0]


chooseCat.style.display = 'none';
categories.style.display = 'none';


function oneplayerselect() {
    chooseCat.style.display = 'block';
    categories.style.display = 'block';
    playerbtns.style.display = 'none';   
}


var movieinstructions = document.getElementsByClassName('hangman-movieinstructions')[0]
var bookinstructions = document.getElementsByClassName('hangman-bookinstructions')[0]
var songinstructions = document.getElementsByClassName('hangman-songinstructions')[0]
var phraseinstructions = document.getElementsByClassName('hangman-phraseinstructions')[0]


movieinstructions.style.display = 'none';
bookinstructions.style.display = 'none';
songinstructions.style.display = 'none';
phraseinstructions.style.display = 'none';


function movieselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    movieinstructions.style.display = 'block';
}

function bookselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    bookinstructions.style.display = 'block';
}

function songselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    songinstructions.style.display = 'block';
}

function phraseselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    phraseinstructions.style.display = 'block';
}


var canvas = document.getElementById('hangman-canvas');
var ctx = canvas.getContext('2d');

    ctx.moveTo(20,280);
    ctx.lineTo(260,280);
    ctx.stroke();

    ctx.fillRect(50,30,6,250)

    ctx.fillRect(50,30,130,6)
