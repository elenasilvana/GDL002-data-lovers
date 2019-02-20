document.getElementById("welcome").addEventListener("click", showWelcome);
document.getElementById("story").addEventListener("click", showStory);
document.getElementById("howToPlay").addEventListener("click", showHowToPlay);
document.getElementById("pokemons").addEventListener("click", showPokemons);

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

function showPokemons(){
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

let grass = document.getElementById("typeGrass");
//document.getElementById("typeGrass")
grass.addEventListener("click",showFilter);
//grass.addEventListener("click", function (){
	//console.log(window.filterType(POKEMON.pokemon, grass.value));

function showFilter(){
	const typeResult = window.filterType(POKEMON.pokemon, grass.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

