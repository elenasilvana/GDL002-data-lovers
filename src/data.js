// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



window.dataLovers = {
  filterOne: function filterType (data, type) {

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
},
};
