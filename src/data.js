// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;



//variable que representa el tipo planta
const typeGrass = 'Grass';

//filtrado para tipo planta
const arrType = [];
for(let i = 0; i < POKEMON.pokemon.length; i++){

	for(let j = 0; j < POKEMON.pokemon[i].type.length; j++){

		if(POKEMON.pokemon[i].type[j] === typeGrass) {
			//arreglo que se llena con los pokemones de tipo
			arrType.push(POKEMON.pokemon[i]);
		}

	}

}

function filterType (data, type) {

	//data: debe ser un arreglo de objetos POKEMON.pokemon
	//type debe ser un string 

	const arrType = [];
	for(let i = 0; i < data.length; i++){

		for(let j = 0; j < data[i].type.length; j++){

			if(data[i].type[j] === type) {
				//arreglo que se llena con los pokemones de tipo
				arrType.push(data[i]);
				break;
			}

		}

	}

	return arrType;
}


filterType(POKEMON.pokemon, 'typeGhost')

//abstracción in progress
function filterType (data, type) {

	//data: debe ser un arreglo de objetos POKEMON.pokemon
	//type debe ser un string 

	const arrType = [];
	for(let i = 0; i < data.length; i++){

		if((data[i].type.indexOf(type)) > -1) {
			arrType.push(data[i]);

		}

	}

	return arrType;
}
