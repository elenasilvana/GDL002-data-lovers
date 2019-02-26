function filterType (data, type) {        //data: debe ser un arreglo de objetos POKEMON.pokemon
             const arrType = [];
        for(let i = 0; i < data.length; i++){
           if((data[i].type.indexOf(type)) > -1)
           {
                arrType.push(data[i]);
              }
             }
              return arrType;
    }



    const grass= document.getElementById("typeGrass");
    console.log(grass);
grass.addEventListener('click', showType);
function showType(grass){
  let typeResult= filterType(POKEMON.pokemon, grass.value);
  console.log(grass.value);
  document.getElementById("root").innerHTML= typeResult;
  console.log("hola");
}
//console.log(filterType(POKEMON.pokemon, grass.value));
