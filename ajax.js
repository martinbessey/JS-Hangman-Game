
/ Lecture via AJAX (asynchronous Javascript & XML)
document.querySelector('button').addEventListener('click', function () {
	// on utilise l'API Fetch (voir la doc) pour faire une requete sur une URL (par défaut, la requete est en GET)
	//Cette requete nous renvoie une Promise (voir la doc) avec une réponse
	fetch('https://jsonplaceholder.typicode.com/users')
		// on traite la Promise en passant en parametre de la fonction la réponse récupérée (body de la réponse) et on en récupère le JSON
		// Cette réponse renvoie une autre Promise
		.then((response) => response.json())
		// on traite la Promise en passant en parametre de la fonction les données récupérées
		.then((data) => {
			for (let user of data) {
				document.querySelector('div').innerHTML += `
        <div class="user" id="user_${user.id}">
          <h1>${user.name}</h1>
          <p>${user.email}</p>
          <p>${user.website}</p>
          <p>${user.company.name}</p>
        </div>
        `;
			}
		});
});

document.querySelector('form').addEventListener('submit', function (e) {
	e.preventDefault();
	let userId = 1;
	let userName = document.querySelector('#name').value;

	// On effectue une requete fetch sur une URL donnée, et on lui rajoute des paramètres de requete
	fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
		method: 'PATCH', // Méthode de la requete HTTP
		// mode: 'cors',
		body: JSON.stringify({ name: userName }), // On passe les infos en body de la requete HTTP
		headers: {
			// On y insère des headers
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		// Comme avant, on récupère une Promise et on la traite, etc.
		.then((response) => response.json())
		.then(
			(data) =>
				(document.querySelector('#user_1').children[0].innerHTML = data.name)
		);
});
