

document.getElementById("welcome").addEventListener("click", showWelcome);
document.getElementById("story").addEventListener("click", showStory);
document.getElementById("howToPlay").addEventListener("click", showHowToPlay);
document.getElementById("pokemons").addEventListener("click", showPokemons1);

const viewOne = document.getElementById("welcomeView");
const viewTwo = document.getElementById("storyView");
const viewThree =document.getElementById("howToPlayView");
const viewFour = document.getElementById("pokemonsView");

function showWelcome(){
	if (viewOne.style.display == 'none') {
		viewOne.style.display = 'block';
	}
	else {
		viewOne.style.display = 'block';

	}

	if (viewTwo.style.display == 'block') {
		viewTwo.style.display = 'none';
	}
	else {
		viewTwo.style.display = 'none';
	}

	if (viewThree.style.display == 'block') {
		viewThree.style.display = 'none';
	}
	else {
		viewThree.style.display = 'none';
	}

	if (viewFour.style.display == 'block') {
		viewFour.style.display = 'none';
	}
	else {
		viewFour.style.display = 'none';
	}
}

function showStory(){
	if (viewOne.style.display == 'block') {
		viewOne.style.display = 'none';
	}
	else {
		viewOne.style.display = 'none';

	}

	if (viewTwo.style.display == 'none') {
		viewTwo.style.display = 'block';
	}
	else {
		viewTwo.style.display = 'block';
	}

	if (viewThree.style.display == 'block') {
		viewThree.style.display = 'none';
	}
	else {
		viewThree.style.display = 'none';
	}

	if (viewFour.style.display == 'block') {
		viewFour.style.display = 'none';
	}
	else {
		viewFour.style.display = 'none';
	}
}

function showHowToPlay(){
	if (viewOne.style.display == 'block') {
		viewOne.style.display = 'none';
	}
	else {
		viewOne.style.display = 'none';
	}
	if (viewTwo.style.display == 'block') {
		viewTwo.style.display = 'none';
	}
	else {
		viewTwo.style.display = 'none';
	}
	if (viewThree.style.display == 'none') {
		viewThree.style.display = 'block';
	}
	else {
		viewThree.style.display = 'block';
	}
	if (viewFour.style.display == 'block') {
		viewFour.style.display = 'none';
	}
	else {
		viewFour.style.display = 'none';

	}
}

function showPokemons1(){
	if (viewOne.style.display == 'block') {
		viewOne.style.display = 'none';
	}
	else {
		viewOne.style.display = 'none';
	}
	if (viewTwo.style.display == 'block') {
		viewTwo.style.display = 'none';
	}
	else {
		viewTwo.style.display = 'none';
	}
	if (viewThree.style.display == 'block') {
		viewThree.style.display = 'none';
	}
	else {
		viewThree.style.display = 'none';
	}
	if (viewFour.style.display == 'none') {
		viewFour.style.display = 'block';
	}
	else {
		viewFour.style.display = 'block';

	}
}


function pokemonIconTemplate(pokemon){
return `
	<div class="poke-box">
		<div class="pokemon-img">
			<img src="${pokemon.img}">
		</div>
		<div class="pokemon-name">
		<a id="show-detail" href="#modal">
			${pokemon.name}
			${pokemon.num}
			</a>
		</div>
		<div id= "modal" class="pokemon-detail">
			<div class="profile-content">
				<a class="close-x" href="#">
				<p>x</p>
				</a>
				<h2>${pokemon.name}/${pokemon.num}
				<br>
				<img src="${pokemon.img}">
				<br>
				(Type: ${pokemon.type})</h2>
				<h3>Type of candy:</h3> 
				<p>-${pokemon.candy}</p>
				<h3>How many candies do you need?:</h3>
				<p>-${pokemon.candy_count}</p>
				<h3>Egg:</h3>
				<p>-${pokemon.egg}</p>
			</div>
		</div>
	</div>
	`;
}

function pokemonIcon (data){
document.getElementById("showTypes").innerHTML = `
<h1>Pokemons (${data.length} results)</h1>
${data.map(pokemonIconTemplate).join("")}`;
}

/*function pokemonProfileTemplate(pokemon){
	return `
	<div id="pokemonDetail" class="profile">
			<img src="${pokemon.img}">
			<div class="modalContent">
				<h2>${pokemon.name} / Num: ${pokemon.num}
					<br>
					<span>(Type: ${pokemon.type})</span>
				</h2>
				<h3>Type of candy:</h3> 
				<p>-${pokemon.candy}</p>
				<h3>How many candies do you need?:</h3>
				<p>-${pokemon.candy_count}</p>
				<h3>Egg:</h3>
				<p>-${pokemon.egg}</p>
				<h3>Next evolution:</h3>
				<p>-${pokemon.next_evolution}</p>
			</div>
	</div>
	`
}

function pokemonOneProfile(data){
document.getElementById("showTypes").innerHTML = `
${data.map(pokemonProfileTemplate).join("")}`
}*/


//funcion de prueba para mostrar el tipo
function showFilter(type){
	let divPokemonList = document.getElementById('showTypes');
	divPokemonList.innerHTML = "";
	const typeResult = window.filterType(POKEMON.pokemon, type.value);
	pokemonIcon(typeResult);
	return typeResult;
}


//funciones que muestran el tipo
//llamando funcion de prueba que muestra el tipo, aparece activada sin hacer click
const grass = document.getElementById("typeGrass");
grass.addEventListener("click", function () {
	showFilter(grass);
	});

const water = document.getElementById("typeWater");
water.addEventListener("click",function () {showFilter(water);});

const ground = document.getElementById("typeGround");
ground.addEventListener("click",function () {showFilter(ground);});

const psychic = document.getElementById("typePsychic");
psychic.addEventListener("click",function () {showFilter(psychic);});

const ghost = document.getElementById("typeGhost");
ghost.addEventListener("click",function () {showFilter(ghost);});

const dark = document.getElementById("typeDark");
dark.addEventListener("click",function () {showFilter(dark); showText();});

const poison = document.getElementById("typePoison");
poison.addEventListener("click",function () {showFilter(poison);});

const fighting = document.getElementById("typeFighting");
fighting.addEventListener("click",function () {showFilter(fighting);});

const steel = document.getElementById("typeSteel");
steel.addEventListener("click",function () {showFilter(steel); showText();});

const bug = document.getElementById("typeBug");
bug.addEventListener("click",function () {showFilter(bug);});

const fire = document.getElementById("typeFire");
fire.addEventListener("click",function () {showFilter(fire);});

const dragon = document.getElementById("typeDragon");
dragon.addEventListener("click",function () {showFilter(dragon);});

const flying = document.getElementById("typeFlying");
flying.addEventListener("click",function () {showFilter(flying);});

const normal = document.getElementById("typeNormal");
normal.addEventListener("click",function () {showFilter(normal);});

const electric = document.getElementById("typeElectric");
electric.addEventListener("click",function () {showFilter(electric);});

const rock = document.getElementById("typeRock");
rock.addEventListener("click",function () {showFilter(rock);});

const ice = document.getElementById("typeIce");
ice.addEventListener("click",function () {showFilter(ice);});

//boton A-Z 
function showAlphabetical () {
	const allPokemons = POKEMON.pokemon;
	const ordererPokemons = alphabeticalOrder(allPokemons);
	pokemonIcon(ordererPokemons);
	console.log(ordererPokemons);
}
//boton Z-A
function showAlphabeticalInverse () {
	const allPokemons = POKEMON.pokemon;
	const ordererPokemons = alphabeticalInverseOrder(allPokemons);
	pokemonIcon(ordererPokemons);
	console.log(ordererPokemons); 
}

//y cómo obtengo la data que debo pasarle al boton? 
const aToZ = document.getElementById("alphabetical");
aToZ.addEventListener("click", showAlphabetical);

const zToA = document.getElementById("alphabeticalInverse");
zToA.addEventListener("click", showAlphabeticalInverse);

function showText(){
	//const text = ("Este tipo de pokemon no se encuentra en la region de kanto");
	//showTypes.innerHTML= text;
}
