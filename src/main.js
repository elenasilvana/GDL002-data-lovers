
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

const  elPokemon = dataLovers.filterType(POKEMON.pokemon, "Grass");

const pokemonNames = elPokemon.map((pokemon)=> {
return pokemon.name;
});

document.getElementById('root').innerHTML = pokemonNames

/*
notes

const arrByName = []; 

for(let i = 0; i < POKEMON.pokemon.length; i++){
	arrByName.push(POKEMON.pokemon[i].name);
}

arrByName.sort();



POKEMON.pokemon.filter(function(el) { //el es equivalente al pokemon
return el.name.sort()
});

window.dataLovers = {

filterType: function ()
}


expect(window.dataLovers.filterType(POKEMON.pokemon, 'Fire'))
