import {useState, useEffect} from 'react'; //Import the hook
import PokemonCard from './components/pokemonCard'
import Title from './components/title'
import axios from 'axios' //Import axios for GET the data from the API

/* IMPORT FROM MATERIAL-UI */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import { FormControl, Select} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';




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
  const [search, setSearch] = useState(null) //State for save the user input

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

  const handleChangeInput = (event) =>{
    setSearch(event.target.value)
    
  }

  const handleChangeSelect = (event) => {
    setLimit(event.target.value);
    filterItems(event.target.value)
  };

  
  const controlNamePokemon = (pokemon) =>{
    return ((pokemon.name).toLowerCase().indexOf(search.toLowerCase()) > -1 )
  }

  const filterItems = async (limite) =>{
    setLoading(true)

    try{
      let {data} = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          limit: ( ((search === "") || (search === null)) ? limite : count ) , //quantity of pokemon to fetch
          offset: 0 //quantity of pokemon to skip
        }
      })
      
      let arrayResults
      if((search === "") || (search === null)){
        arrayResults = data.results
      }else{
        arrayResults = data.results.filter(controlNamePokemon)
      }

      if (arrayResults.length > limit){
        arrayResults = arrayResults.slice(0,limit)
        console.log(arrayResults)
      }
      
      let pokemonData = await Promise.all(arrayResults.map( async p =>{
        let pokemonRecord = await getPokemon(p.url);
        return pokemonRecord
      }))
      
      setPokemon(pokemonData.map( p => {
        return p
      }))

      setLoading(false)
    } 
    catch (error){
      console.log(error)
    } 
  }


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
        <Grid item xs={12} style={{marginBottom: 40}}>
          <p style={{fontSize: '24px', fontWeight: 'lighter'}}>El que quiere Pokemon, que los busque.</p>
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
          
          <FormControl variant="outlined" className={classes.formControl} size='small' style={{marginLeft: 50, marginTop: 10}}>
          <label>Size:</label>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={limit}
                onChange={handleChangeSelect}
                size="small"
              >
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={150}>150</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={500}>500</MenuItem>
                <MenuItem value={750}>750</MenuItem>
                <MenuItem value={750}>750</MenuItem>
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={count}>All</MenuItem>
              </Select>
            </FormControl>
        </Grid>
        {/* <Grid item xs={12}>
          <Grid container justify="left">
            <FormControl variant="outlined" className={classes.formControl} size='small'>
              <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={size}
                onChange={handleChangeSelect}
                label="Size"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid> */}

        {pokemon.map( (p,index) => (
          <PokemonCard key={index} pokemon={p}/>
        ))}
      </Grid>
    </Container>
    </>
  );
}

export default App;
