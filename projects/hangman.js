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
var canvasdiv = document.getElementsByClassName('hangman-canvas')[0]


movieinstructions.style.display = 'none';
bookinstructions.style.display = 'none';
songinstructions.style.display = 'none';
phraseinstructions.style.display = 'none';
canvasdiv.style.display = 'none';


function movieselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    canvasdiv.style.display = 'block';
    movieinstructions.style.display = 'block';
}

function bookselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    canvasdiv.style.display = 'block';
    bookinstructions.style.display = 'block';
}

function songselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    canvasdiv.style.display = 'block';
    songinstructions.style.display = 'block';
}

function phraseselect() {
    categories.style.display = 'none';
    chooseCat.style.display = 'none';
    canvasdiv.style.display = 'block';
    phraseinstructions.style.display = 'block';
}


var canvas = document.getElementById('hangman-canvas');
var ctx = canvas.getContext('2d');

    ctx.moveTo(10,180); /*floor*/
    ctx.lineTo(160,180);
    ctx.stroke();

    ctx.fillRect(30,20,4,160) /*vertical bar*/

    ctx.fillRect(30,20,100,4) /*horizontal bar*/

    ctx.moveTo(120,20); /*rope*/
    ctx.lineTo(120,50);
    ctx.stroke();

    ctx.beginPath(); /*head*/
    ctx.arc(120,60,10,0,2*Math.PI);
    ctx.stroke();

    ctx.moveTo(120,70); /*body*/
    ctx.lineTo(120,120);
    ctx.stroke();

    ctx.moveTo(120,80); /*left arm*/
    ctx.lineTo(105,95);
    ctx.stroke();

    ctx.moveTo(120,80); /*right arm*/
    ctx.lineTo(135,95);
    ctx.stroke();

    ctx.moveTo(120,120); /*left leg*/
    ctx.lineTo(105,140);
    ctx.stroke();

    ctx.moveTo(120,120); /*right leg*/
    ctx.lineTo(135,140);
    ctx.stroke();


var movies = [
    'the wolf of wall street',
    'get out',
    'the grand budapest hotel',
    'gone girl',
    'love and other drugs',
    'parasite',
    'ratatouille',
    'pinocchio',
    'scarface',
    'cloudy with a chance of meatballs',
    'journey to the center of the earth',
    'slumdog millionaire',
    'requiem for a dream',
    'a beautiful mind',
    'catch me if you can',
    'good will hunting',
    'the king of comedy',
    'blood diamond',
    'call me by your name',
    'a star is born'
]

var books = [
    'to kill a mockingbird',
    'animal farm',
    'things fall apart',
    'the sun is also a star',
    'love in the time of cholera',
    'war and peace',
    'the great gastby',
    'lord of the flies',
    'wuthering heights',
    'of mice and men',
    'great expectations',
    'the scarlet letter',
    'one hundred years of solitude',
    'don quixote',
    'a tale of two cities',
    'the grapes of wrath',
    'vanity fair',
    'a clockwork orange',
    'the call of the wild',
    'heart of darkness'
]

var songs = [
    'This is America',
    'thinking out loud',
    'we are young',
    'viva la vida',
    'single ladies',
    'we are the world',
    'laugh now cry later',
    'drunk in love',
    'i wanna dance with somebody',
    'rolling in the deep',
    'hollaback girl',
    'call me maybe',
    'shake it off',
    'uptown funk',
    'party rock anthem',
    'we belong together',
    'eye of the tiger',
    'Somebody That I Used To Know',
    'Another One Bites The Dust',
    'Gold Digger'
]

var phrases = [
    'What Comes Around Goes Around',
    'Between a Rock and a Hard Place',
    'Cut To The Chase',
    'Needle in a Haystack',
    'Fight Fire With Fire',
    'Elephant in The Room',
    'Head Over Heels',
    'Hold Your Horses',
    'Break a Leg',
    'Keep Your Eyes Peeled',
    'Let Bygones Be Bygones',
    'Like Father Like Son',
    'Paint The Town Red',
    'Shot In The Dark',
    'Spill The Beans',
    'The Early Bird Gets The Worm',
    'Two Peas in a Pod',
    'Under the Weather',
    'Short End of The Stick',
    'Hard Pill To Swallow'
]