// Choisir un mot parmi une liste
const arrayWords = ["Brick", "Construction", "Batman", "Amusing", "Imagination", "Legoman", "Danemark", "Legoland", "Building", "Duplo", "Emmet", "Spaceship"];
let word = arrayWords[Math.floor(Math.random() * arrayWords.length)].toUpperCase();


// .map permet de recréer un tableau à partir d'un tableau
let result = word.split('').map((letter) => {
  return '_';
}); // Comme au morpion, on génère un tableau d'état
let errors = 0;
for (let i = 0; i < result.length; i++) {//On affiche autant de span que de lettres dans le mot
  document.querySelector('#result').innerHTML += `<span class="letter">${result[i]}</span>`;
}


let msg = document.getElementById("message");
msg.innerHTML = "Select a letter";
// faire apparaitre un clavier virtuel
/*for (let i = 65; i < 91; i++) {  document.querySelector(    
  '#keyboard'  
  ).innerHTML += `<button class="key">${String.fromCharCode(i)}</button>`; // fromCharCode permet à partir d'une valeur d'afficher le caractère correspondant
}*/
//Création d'une constante correspondant au boutons
const touches = document.querySelectorAll("#keyboard button");

for (let touche of touches){ 
  touche.addEventListener('click', function(){ 
    this.style.display = 'none';
    let found = false;
    for (let i = 0; i < word.length; i++){
      if (this.innerHTML === word[i]){
        found = true;
        result[i] = word[i];
        //console.log(result);
        document.querySelector('#result').children[i].innerHTML = word[i];
      }
    }
    if (!found){
      errors++;
      console.log('.hang_' + errors);
      document.querySelector('.hang_' + errors).style.opacity = 1;
    }
    if (errors === 12){
      msg.innerHTML = "GAME OVER!";
      document.querySelector('#keyboard').style.opacity = 0;
    }
  });
}