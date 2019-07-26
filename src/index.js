

document.getElementById("welcome").addEventListener("click", showWelcome);
document.getElementById("story").addEventListener("click", showStory);
document.getElementById("howToPlay").addEventListener("click", showHowToPlay);
document.getElementById("pokemons").addEventListener("click", showPokemons1);

const viewOne = document.getElementById("welcomeView");
const viewTwo =document.getElementById("storyView");
const viewThree =document.getElementById("howToPlayView");
const viewFour = document.getElementById("pokemonsView");

function showWelcome(){
	viewOne.style.display = 'block';
	viewTwo.style.display = 'none';
	viewThree.style.display = 'none';
	viewFour.style.display = 'none';

}

function showStory(){
	viewOne.style.display = 'none'
	viewTwo.style.display = 'block';
	viewThree.style.display = 'none';
	viewFour.style.display = 'none';
}

function showHowToPlay(){
	
	viewOne.style.display = 'none';
	viewTwo.style.display = 'none';
	viewThree.style.display = 'block';
	viewFour.style.display = 'none';
}

function showPokemons1(){
	viewOne.style.display = 'none';
	viewTwo.style.display = 'none';
	viewThree.style.display = 'none';
	viewFour.style.display = 'block';

}

function goTop(){
	window.scrollTo(0,0);
}

function pokemonIconTemplate(pokemon){
	return `
	<div class="poke-box">
		<div class="pokemon-name">
			<img src="${pokemon.img}">
			${pokemon.name.toUpperCase()}
		</div>
		<div class="detail">
			<img src="${pokemon.img}">
			<h2>${pokemon.name} / ${pokemon.num}
			<br>
			Tipo: ${pokemon.type}</h2>
			<h3>Dulce con el que evoluciona:</h3> 
			<p>-${pokemon.candy}.</p>
			<h3>Caramelos que necesitas para su siguiente Evolución:</h3>
			<p>-${pokemon.candy_count}.</p>
			<h3>${pokemon.name} aparece en huevos de:</h3>
			<p>-${pokemon.egg}.</p>
		</div>
	</div>
`; 
}

function pokemonIcon (data){
	document.getElementById("showTypes").innerHTML = `
	<p>Conoce los pokemones de tipo: (${data.length} resultados)</p>
	${data.map(pokemonIconTemplate).join("")}`;
}

//funcion de prueba para mostrar el tipo
function showFilter(type){
	let divPokemonList = document.getElementById('showTypes');
	divPokemonList.innerHTML = "";
	const typeResult = window.filterType(POKEMON.pokemon, type);
	console.log(typeResult);
	const mesage = "No se encuentran Pokemones de este tipo en la primera generación";
	if(typeResult.length === 0) {
		divPokemonList.innerHTML = mesage;
	}
	else {
	pokemonIcon(typeResult);	
	}
	//return typeResult;
}
 

const buttonsType = document.querySelectorAll('.btn-type');

buttonsType.forEach((button)=>{
	button.addEventListener('click', (e)=>{showFilter(e.target.value)});
})

let alphabeticalSwitch = document.getElementById("alphabetical-Switch");
alphabeticalSwitch.addEventListener('change', function() {
		if (alphabeticalSwitch.checked){
			showAlphabetical();
		}
		else {
			showAlphabeticalInverse();
		};});

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


function showModaResult () {
const resultModa = moda(POKEMON.pokemon);
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
document.getElementById("showTypes").innerHTML= templateModa;

}

const botonModaDescendente = document.getElementById("moda-descendente");
botonModaDescendente.addEventListener("click", showModaResult);
