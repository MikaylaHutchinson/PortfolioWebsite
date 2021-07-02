var chooseCat = document.getElementsByClassName('hangman-choosecategory')[0];
var oneplayerbtn = document.getElementsByClassName('hangman-1player')[0];
var twoplayerbtn = document.getElementsByClassName('hangman-2players')[0];


chooseCat.style.display = 'none';




function oneplayerselect() {
    chooseCat.style.display = 'block';
    oneplayerbtn.style.display = 'none';
    twoplayerbtn.style.display = 'none';   
}