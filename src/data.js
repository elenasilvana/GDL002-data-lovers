
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

window.filterType = filterType;

