import {getAllPokemons} from '../api/pokemonApi'
import {fakeData} from '../api/__mocks__/pokemonApi'

global.fetch = jest.fn(() =>
  Promise.resolve({json: () => fakeData})
);

describe('getAllPokemons', () =>{
  it("Should call fetch with params", async () => {
    
    /* arrange()
    act()
    assert() */
    const key = ''
    const count = 10
    const urlExpected = `https://pokeapi.co/api/v2/pokemon/?limit=${count}`
    getAllPokemons(key, count)
    expect(fetch).toHaveBeenCalledWith(urlExpected)
    
  })
}
)
  

  
