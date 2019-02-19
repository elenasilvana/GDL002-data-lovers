
//variable que representa el tipo planta
const typeGrass = 'Grass';

//filtrado para tipo planta
const arrType = [];
for(let i = 0; i < POKEMON.pokemon.length; i++){

	for(let j = 0; j < POKEMON.pokemon[i].type.length; j++){

		if(POKEMON.pokemon[i].type[j] === typeGrass) {
			//arreglo que se llena con los pokemones de tipo
			arrType.push(POKEMON.pokemon[i].name);
		}

	}

}
