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


function fillElements (pokemonList, divElement){
		//qué es divElement?
	for(let i=0; i<pokemonList.length; i++) {
	  let divPokemon = document.createElement("div");
	  //qué es divPokemon.className, qué hace className?
	  divPokemon.className = "pokemon";
	  divPokemon.innerHTML = "<img src=\"" +pokemonList[i].img + "\">";
	  divElement.insertAdjacentElement("beforeend", divPokemon);
	}
}

//menor a mayor
function showPokemons(){
	let pokemonList = POKEMON.pokemon;
	let divPokemonList = document.getElementById('showTypes'); 
	fillElements(pokemonList, divPokemonList);

}

//funcion de prueba para mostrar el tipo
function showFilter(type){
	let divPokemonList = document.getElementById('showTypes');
	const typeResult = window.filterType(POKEMON.pokemon, type.value);
	fillElements(typeResult, divPokemonList);
};


//funciones que muestran el tipo
//llamando funcion de prueba que muestra el tipo, aparece activada sin hacer click
const grass = document.getElementById("typeGrass");
grass.addEventListener("click", showFilter(grass));


/*
//funcion grass que si sirve
function showFilterGrass(){
	const typeResult = window.filterType(POKEMON.pokemon, grass.value);
	let divPokemonList = document.getElementById('showTypes');
	fillElements(typeResult, divPokemonList);
};
*/

const water = document.getElementById("typeWater");
water.addEventListener("click",showFilterWater);

function showFilterWater(){
	const typeResult = window.filterType(POKEMON.pokemon, water.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const ground = document.getElementById("typeGround");
ground.addEventListener("click",showFilterGround);

function showFilterGround(){
	const typeResult = window.filterType(POKEMON.pokemon, ground.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const psychic = document.getElementById("typePsychic");
psychic.addEventListener("click",showFilterPsychic);

function showFilterPsychic(){
	const typeResult = window.filterType(POKEMON.pokemon, psychic.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const ghost = document.getElementById("typeGhost");
ghost.addEventListener("click",showFilterGhost);

function showFilterGhost(){
	const typeResult = window.filterType(POKEMON.pokemon, ghost.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const dark = document.getElementById("typeDark");
dark.addEventListener("click",showFilterDark);

function showFilterDark(){
	const typeResult = window.filterType(POKEMON.pokemon, dark.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const poison = document.getElementById("typePoison");
poison.addEventListener("click",showFilterPoison);

function showFilterPoison(){
	const typeResult = window.filterType(POKEMON.pokemon, poison.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const fighting = document.getElementById("typeFighting");
fighting.addEventListener("click",showFilterFighting);

function showFilterFighting(){
	const typeResult = window.filterType(POKEMON.pokemon, fighting.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const steel = document.getElementById("typeSteel");
steel.addEventListener("click",showFilterSteel);

function showFilterSteel(){
	const typeResult = window.filterType(POKEMON.pokemon, steel.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const bug = document.getElementById("typeBug");
bug.addEventListener("click",showFilterBug);

function showFilterBug(){
	const typeResult = window.filterType(POKEMON.pokemon, bug.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const fire = document.getElementById("typeFire");
fire.addEventListener("click",showFilterFire);

function showFilterFire(){
	const typeResult = window.filterType(POKEMON.pokemon, fire.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const dragon = document.getElementById("typeDragon");
dragon.addEventListener("click",showFilterDragon);

function showFilterDragon(){
	const typeResult = window.filterType(POKEMON.pokemon, dragon.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const flying = document.getElementById("typeFlying");
flying.addEventListener("click",showFilterFlying);

function showFilterFlying(){
	const typeResult = window.filterType(POKEMON.pokemon, flying.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const normal = document.getElementById("typeNormal");
normal.addEventListener("click",showFilterNormal);

function showFilterNormal(){
	const typeResult = window.filterType(POKEMON.pokemon, normal.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const electric = document.getElementById("typeElectric");
electric.addEventListener("click",showFilterElectric);

function showFilterElectric(){
	const typeResult = window.filterType(POKEMON.pokemon, electric.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const rock = document.getElementById("typeRock");
rock.addEventListener("click",showFilterRock);

function showFilterRock(){
	const typeResult = window.filterType(POKEMON.pokemon, rock.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

const ice = document.getElementById("typeIce");
ice.addEventListener("click",showFilterIce);

function showFilterIce(){
	const typeResult = window.filterType(POKEMON.pokemon, ice.value);
	const pokemonNames = typeResult.map((pokemon)=> {
	return pokemon.name;
	});
	document.getElementById('showTypes').innerHTML = pokemonNames;
};

