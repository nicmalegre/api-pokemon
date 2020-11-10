import {useState, useEffect} from 'react'; //Import the hook
import Title from './components/Title'
import Search from './components/Search'
import PokemonCard from './components/PokemonCard'
import Loading from './components/Loading'

import axios from 'axios' //Import axios for GET the data from the API

/* IMPORT FROM MATERIAL-UI */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const  App = () => {
  const [pokemon, setPokemon] = useState([]) //State for save all the information for every pokemon
  const [isError, setIsError] = useState([false]) //State for save if we have an error
  const [loading, setLoading] = useState(false) //State for save if the GET is loading
  const [count, setCount] = useState(0) //State for save the total numbers of pokemons in the api
  const [limit, setLimit] = useState(50) //State for save the limit of the results that we have to show
  

  //For GET all the pokemons the first time
  useEffect(() => { 
    const getAllPokemon = async () =>{
      setLoading(true)
  
      try{
        let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: limit, //quantity of pokemon to fetch
          offset: 0 //quantity of pokemon to skip
        }
      })
      setCount(data.count)
  
      let pokemonData = await Promise.all(data.results.map( async p =>{
        let pokemonRecord = await axios.get(p.url);
        return pokemonRecord
      }))
      
      setPokemon(pokemonData.map( p => {
        return p
      }))
  
      setLoading(false)
      } catch (error){
        console.log(error)
      }    
    }
    getAllPokemon()
  }, [])

  return (
    <>
    <Title />
    <Container style={{marginTop: 10}}>
      <Loading loading={loading}/>
      <Grid container justify="center">
        <Search 
        limit={limit} 
        setLimit={setLimit} 
        count={count} 
        setLoading={setLoading}
        setPokemon={setPokemon}
        isError={isError}
        />
        {pokemon.map( (p,index) => (
          <PokemonCard key={index} pokemon={p}/>
        ))}
      </Grid>
    </Container>
    </>
  );
}

export default App;
