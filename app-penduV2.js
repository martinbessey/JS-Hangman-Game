// Choisir un mot parmi une liste
const arrayWords = ["Brick", "Construction", "Batman", "Amusing", "Imagination", "Legoman", "Danemark", "Legoland", "Building", "Duplo", "Emmet", "Spaceship"];
let word = arrayWords[Math.floor(Math.random() * arr.length)].toUpperCase();

word = word.toUpperCase();


// .map permet de recréer un tableau à partir d'un tableau
let result = word.split('').map((letter) => '_'); // Comme au morpion, on génère un tableau d'état
let errors = 0;
for (let i = 0; i < result.length; i++) {
  document.querySelector(
    '#affichage'
  ).innerHTML += `<span class="letter">${result[i]}</span>`;
}


let msg = document.getElementById("message");


const touches = document.querySelectorAll('#keyboard button');
for(let touche of touches){​​
  touche.addEventListener('click', function(){​​
    this.style.display = 'none';
    let found = false;
    for (let i = 0; i < word.length; i++){​​
      if (this.innerHTML === word[i]){​​
        found = true;
        result[i] = word[i];
        //console.log(trouve);
        document.querySelector('#result').children[i].innerHTML = word[i];
      }​​
    }​​
    if (!found) {​​
      errors++;
      console.log('.hang_' + errors);
      document.querySelector('.hang_' + errors).style.opacity = 1;
    }​​
    if (errors === 7) {​​
      msg.innerHTML = "GAME OVER!";
    }​​
  });
}​​