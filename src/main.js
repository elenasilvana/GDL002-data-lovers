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
*/