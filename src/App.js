import {useState, useEffect} from 'react'; //Import the hook
import PokemonCard from './components/pokemonCard'
import axios from 'axios' //Import axios for GET the data from the API

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon', {
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
  })
  }, [])



  

  return (
    <PokemonCard pokemon={pokemon} />
  );
}

export default App;
