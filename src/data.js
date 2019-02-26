// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//window.dataLovers = {


	//ejemplo:  filterType(POKEMON.pokemon, 'typeGhost')

	//abstracción in progress
const filterType = (data, type) =>{
		console.log("filterType");
		//data: debe ser un arreglo de objetos POKEMON.pokemon
		//type debe ser un string

		const arrType = [];
		for(let i = 0; i < data.length; i++){

			if((data[i].type.indexOf(type)) > -1) {
				arrType.push(data[i]);

			}

		}

		return arrType;
	};

//};

//orden alfabético

const alphabeticalOrder = (arrNames, arrObj) => {

	const arrAlphabetical = []; 
	for(let i = 0; i < arrNames.length; i++){

		for(let j = 0; j < arrObj.length ; j++ ){
			//console.log(pokemonNames[i], arrPokemons[j].name);
			if (arrNames[i] === arrObj[j].name){
				arrAlphabetical.push(arrObj[j]);
			}
		}

	}
};

window.alphabeticalOrder = alphabeticalOrder;
window.filterType = filterType;

/*

const arrAlphabetical = []; 
	for(let i = 0; i < pokemonNames.length; i++){

		for(let j = 0; j < arrPokemons.length ; j++ ){
			//console.log(pokemonNames[i], arrPokemons[j].name);
			if (pokemonNames[i] === arrPokemons[j].name){
				arrAlphabetical.push(arrPokemons[j]);
			}
		}

	}

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
*/
