import {useState, useEffect} from 'react'; //Import the hook
import Title from './components/Title'
import Search from './components/Search'
import PokemonCard from './components/PokemonCard'

import axios from 'axios' //Import axios for GET the data from the API

/* IMPORT FROM MATERIAL-UI */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';






/* STYLE FOR BACKDROP */
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));




function App() {
  const classes = useStyles(); //This is for the material-ui styles 

  const [pokemon, setPokemon] = useState([]) //State for save all the information for every pokemon
  

  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(false)

  const [limit, setLimit] = useState(50)

  const getPokemon = (pokemonUrl) => {
    return axios.get(pokemonUrl)
  }

  

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
        let pokemonRecord = await getPokemon(p.url);
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
      {/* This component will display when the API is loading */}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* End Backdrop */}

      

      <Grid container justify="center">
        <Search 
        limit={limit} 
        setLimit={setLimit} 
        count={count} 
        setLoading={setLoading}
        setPokemon={setPokemon}
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
