const arrayWords = ['Brique', 'Construction', 'Batman', 'Amusant']
const keyboard = document.querySelector('.key')

let letter = document.getElementsByClassName("key");
let msg = document.getElementById("message");

msg.innerHTML = "Choisissez un lettre!";

/*Selectionner un mot aléatoire contenu dans le tableau "arrayWords"*/
let word=arrayWords[Math.floor(Math.random() * arrayWords.length - 1)];


for (let i = 0; i < word.length; i++) {
document.addEventListener('click', function(){
    if (word.includes(letter) ){
        document.getElementsByClassName("word").innerHTML = 
        word.substring(letter) ;
    }
    /*if (!word.includes(letter) ){
        document.getElementsByClassName("pendu").innerHTML = */
        // morceau d'image svg
    }
});
}
