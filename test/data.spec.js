require('../src/data.js');
const pokemon = require ('../src/data/pokemon/pokemon.json');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

/* antes de correr los test se corren los linters

.eslintrc configura los globals

globals : 
example : false
dataLovers: false

require(./elarchivo); 

const pokemon = require (../la ruta al archivo) 
para el set de datos que elijamos se necesita agregar esa definición

describe('pokemon', () => {it ('' )}

API Application Programmin interface 
un termino generico que se usa para amplia variedad de cosas... 

puede ser la descriipción de la solución
un server al cual le pedimos data 

en el ccaso de describe e it, 

expect(typeof pokemon).tobe('object')

Cada una de las funciones se debe agregar al objeto window, o un objeto y agregar ahí todas las funciones

window.dataLovers = {
	filterType()
} */