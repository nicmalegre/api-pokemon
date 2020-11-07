import {useState, useEffect} from 'react'; //Import the hook
import PokemonCard from './components/pokemonCard'
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

  const [data, setData] = useState(null) //State for save the user input
  const [pokemon, setPokemon] = useState([]) //State for save all the information for every pokemon
  const [search, setSearch] = useState(null) //State for save the user input
  const [count, setCount] = useState(null) 
  const [loading, setLoading] = useState(false)

  const getPokemon = (pokemonUrl) => {
    return axios.get(pokemonUrl)
  }

  const getAllPokemon = async () =>{
    setLoading(true)

    try{
      let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: 20, //quantity of pokemon to fetch
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

  useEffect(() => {
    getAllPokemon()
  }, [])

  const handleChangeInput = (event) =>{
    setSearch(event.target.value)
    
  }

  
  const controlNamePokemon = (pokemon) =>{
    return ((pokemon.name).toLowerCase().indexOf(search.toLowerCase()) > -1 )
  }

  const filterItems = async () =>{
    setLoading(true)

    try{
      let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: count, //quantity of pokemon to fetch
          offset: 0 //quantity of pokemon to skip
        }
      })

      let arrayResults = data.results.filter(controlNamePokemon)

      let pokemonData = await Promise.all(arrayResults.map( async p =>{
        let pokemonRecord = await getPokemon(p.url);
        return pokemonRecord
      }))
      
      setPokemon(pokemonData.map( p => {
        return p
      }))
      console.log(pokemon)

      setLoading(false)
    } 
    catch (error){
      console.log(error)
    } 
  }


  return (
    <Container>
      {/* This component will display when the API is loading */}
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* End Backdrop */}

      <Grid container justify="center">
        <Grid item xs={12}>
          <h1>Pokemon Finder</h1>
          <p>El que quiere Pokemon que los busque</p>
        </Grid>

        <Grid item xs={12} style={{marginBottom: 40}}>
          <Grid container justify="center">
              <TextField 
              id="outlined-basic" 
              variant="outlined"  
              size='small' 
              style={{width: '70%', marginRight: 20}} 
              label='Ingrese el nombre a buscar'
              onChange={handleChangeInput}
              />
              <Button variant="contained" color="primary" onClick={filterItems} style={{width: '20%'}}>
                Search
              </Button>
          </Grid>
        </Grid>
        {pokemon.map( p => (
          <PokemonCard pokemon={p}/>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
