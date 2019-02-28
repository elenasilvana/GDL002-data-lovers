require('../src/data.js');
const POKEMON = require('../src/data/pokemon/pokemon.json');
const pokemonFilterMock = require('../src/data/pokemon/filterOrder.json');
const pokemonFilterInverseOrderMock = require('../src/data/pokemon/filterInverseOrder.json');


describe('filterType', () => {

  it('it should be a function', () => {
    expect(typeof window.filterType).toBe('function');
  });

  it('returns `filterType`', () => {
      expect(window.filterType(POKEMON.pokemon, 'Grass').length).toBe(14);
    });

  it('returns `filterType`', () => {
    expect(window.filterType(POKEMON.pokemon, 'Dark').length).toBe(0);
  });


});

describe('alphabeticalOrder', () => {
  it('it should be a function', () => {
    expect(typeof window.alphabeticalOrder).toBe('function');
  });

  it('returns alphabeticalOrder', () => {
    expect(window.alphabeticalOrder(POKEMON.pokemon)).toEqual(pokemonFilterMock);
  });
  
});

describe('alphabeticalInverseOrder', () => {
  it('it should be a function', () => {
    expect(typeof window.alphabeticalInverseOrder).toBe('function');
  });

  it('returns alphabeticalInverseOrder', () => {
    expect(window.alphabeticalInverseOrder(POKEMON.pokemon)).toEqual(pokemonFilterInverseOrderMock);
  });
  
});
//crear un archivo por cada json de respuesta


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

expect(typeof pokemon).toBe('object')

Cada una de las funciones se debe agregar al objeto window, o un objeto y agregar ahí todas las funciones

window.dataLovers = {
	filterType()
} */