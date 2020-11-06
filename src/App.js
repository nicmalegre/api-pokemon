import {useState, useEffect} from 'react'; //Import the hook
import PokemonCard from './components/pokemonCard'
import axios from 'axios' //Import axios for GET the data from the API






function App() {
  const [pokemon, setPokemon] = useState([])

  const getPokemon = (pokemonUrl) => {
    /* return new Promise((resolve, reject) =>{
      axios.get(pokemonUrl)
    }) */
    return axios.get(pokemonUrl)
  }

  const getAllPokemon = async () =>{
    /* axios.get('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: 100, //quantity of pokemon to fetch
        offset: 0 //quantity of pokemon to skip
      }
    })
    .then(res => {
      setPokemon(res.data.results.map(p => p))
    })
    .catch(function (error) {
      console.log(error);
    }) */

    let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')

    
    let pokemonData = await Promise.all(data.results.map( async p =>{
      let pokemonRecord = await getPokemon(p.url);
      return pokemonRecord
    }))
    
    setPokemon(pokemonData.map( p => {
      return p
    }))

  }

  useEffect(() => {
    getAllPokemon()
  }, [])


  return (
    <>
    <PokemonCard pokemon={pokemon}/>
    </>
  );
}

export default App;
