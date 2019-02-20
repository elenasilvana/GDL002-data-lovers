

function filterType (data, type) {
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

const grass= document.getElementById("typeGrass");
console.log(grass);
grass.addEventListener('click', filterType(POKEMON.pokemon, grass.value));
console.log(filterType(POKEMON.pokemon, grass.value));
