/*const asd = require('../src/data/pokemon/pokemon.json');
console.log(asd);*/

//menu bar
const menuOption = document.querySelectorAll('.menu a');

//button
const goTopButton = document.getElementsByClassName('go-top')[0];

//const HOLI = require('../src/data/pokemon/pokemon');
const btnModa = document.getElementsByClassName('btn-moda')[0];
console.log(btnModa);
btnModa.addEventListener("click", showModaResult);

function modaRes(){
console.log('holi mundi');
}

//screen element
const one = document.getElementsByClassName('view-one')[0];
const two = document.getElementsByClassName('view-two')[0];
const three = document.getElementsByClassName('view-three')[0];
const four= document.getElementsByClassName('view-four')[0];

function screenOne(){
	one.style.display = 'block';
	two.style.display = 'none';
	three.style.display = 'none';
	four.style.display = 'none';
}

function screenTwo(){
	one.style.display = 'none'
	two.style.display = 'block';
	three.style.display = 'none';
	four.style.display = 'none';
}

function screenThree(){
	one.style.display = 'none';
	two.style.display = 'none';
	three.style.display = 'block';
	four.style.display = 'none';
}

function screenFour(){
	one.style.display = 'none';
	two.style.display = 'none';
	three.style.display = 'none';
	four.style.display = 'block';
}

//call the screen from the option menu selected
function menuSelection(e){
	const selectedScreen = `screen${e.target.id}`;
	window[selectedScreen]();
}

menuOption.forEach((element)=>{
	element.addEventListener('click', menuSelection);
})

function goTop(){
	window.scrollTo(0,0);
}

goTopButton.addEventListener('click', goTop);

function pokemonIconTemplate(pokemon){
	return `
	<div class="poke-box">
		<div class="pokemon-name">
			<img src="${pokemon.img}">
		</div>
		<div class="detail">
		<h2>Conoce a</h2>
		<h2>${pokemon.name}</h2>
			<img src="${pokemon.img}">
			<p>#${pokemon.num}</p>
			<p>Tipo: ${pokemon.type}</p>
			<p>Dulce con el que evoluciona:</p> 
			<p>-${pokemon.candy}.</p>
		</div>
	</div>
`; 
}

function pokemonIcon (data, message){
	if(message === undefined){
		message = "";
		console.log(message);
	}
	const pokemonresult = document.getElementsByClassName('show-pokemons-result')[0];
	pokemonresult.innerHTML = `<h3> ${message} <h3>
	${data.map(pokemonIconTemplate).join("")}`;
}


function showFilter(type){
	console.log(type);
	const pokemonresult = document.getElementsByClassName('show-pokemons-result')[0];
	pokemonresult.innerHTML = "";
	const typeResult = window.filterType(POKEMON.pokemon, type);
	console.log(typeResult);
	let message;
	
	if(typeResult === 0){
		message= `No se encontraron Pokemones de tipo ${type} en la primera generación`;
		pokemonIcon(typeResult, message);
	}
	else if(typeResult){
		message = `Conoce los pokemones de tipo ${type} (${typeResult.length} resultados)`;
		pokemonIcon(typeResult, message); 
	}

	/*
	typeResult.length === 0 ?  message= `No se encontraron Pokemones de tipo ${type} en la primera generación` : message = `Conoce los pokemones de tipo ${type} (${typeResult.length} resultados)` 
	pokemonIcon(typeResult, message);*/

}
 
const buttonsType = document.querySelectorAll('.btn-type');

buttonsType.forEach((button)=>{
	//button.addEventListener('click', (e)=>{showFilter(e.target.value)});
button.addEventListener('click', (e)=>{
	console.log(e.target.id);
	showFilter(e.target.id)
});

})


let alphabeticalSwitch = document.getElementById("alphabetical-Switch");
alphabeticalSwitch.addEventListener('change', function() {
		if (alphabeticalSwitch.checked){
			showAlphabetical();
		}
		else {
			showAlphabeticalInverse();
		};
	});

//boton A-Z
function showAlphabetical () {
	const allPokemons = POKEMON.pokemon;
	const ordererPokemons = alphabeticalOrder(allPokemons);
	pokemonIcon(ordererPokemons);
}

//boton Z-A
function showAlphabeticalInverse () {
	const allPokemons = POKEMON.pokemon;
	const ordererPokemons = alphabeticalInverseOrder(allPokemons);
	console.log(ordererPokemons);
	pokemonIcon(ordererPokemons);
}

//y cómo obtengo la data que debo pasarle al boton?
const aToZ = document.getElementById("alphabetical");
aToZ.addEventListener("click", showAlphabetical);

const zToA = document.getElementById("alphabeticalInverse");
zToA.addEventListener("click", showAlphabeticalInverse);


function showModaResult() {
const resultModa = window.moda(POKEMON.pokemon);
console.log(resultModa);
const templateModa= `
<div class="moda">
	<p><img class="icon-img" src="https://i.postimg.cc/J0KBD2WJ/poison.png">
	<br>
	Venenoso: ${resultModa.Poison}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/1zN6CBph/water.png">
		<br>
		Agua: ${resultModa.Water}</h3>
	<p><img class="icon-img" src="https://i.postimg.cc/MT7BxGP9/normal.png">
	<br>
	Normal: ${resultModa.Normal}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/k4s5fRhP/flying.png">
	<br>
	Volador: ${resultModa.Flying}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/g0vjLTVJ/grass.png">
		<br>
		Planta: ${resultModa.Grass}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/2SLVr63n/ground.png">
		<br>
		Tierra: ${resultModa.Ground}</h3>
	<p><img class="icon-img" src="https://i.postimg.cc/8kbv0jr5/psychic.png">
		<br>
		Psiquico: ${resultModa.Psychic}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/0NLGPF8y/bug.png">
		<br>
		Bicho: ${resultModa.Bug}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/L5s874rY/fire.png">
		<br>
		Fuego: ${resultModa.Fire}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/dVfrjpZj/rock.png">
		<br>
		Roca: ${resultModa.Rock}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/zXXhZ8nk/electric.png">
		<br>
		Electrico: ${resultModa.Electric}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/DzVmZTbH/fighting.png">
		<br>
		Lucha: ${resultModa.Fighting}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/brqtvj4p/ice.png">
		<br>
		Hielo: ${resultModa.Ice}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/yxr8z4Hf/dragon.png">
		<br>
		Dragón: ${resultModa.Dragon}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/MTqT7m5Y/ghost.png">
		<br>
		Fantasma: ${resultModa.Ghost}</p>
	<p><img class="icon-img" src="https://i.postimg.cc/rpdC6M2H/dark.png">
		<br>
		Siniestro: 0</p>
	<p><img class="icon-img" src="https://i.postimg.cc/cHy3V3mK/steel.png">
		<br>
		Acero: 0</p>
</div>`;
const pokemonresult = document.getElementsByClassName('show-pokemons-result')[0];
pokemonresult.innerHTML= templateModa;

}


