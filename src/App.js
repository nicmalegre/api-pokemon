import React, {useState} from 'react'; //Import the hook
import {Title, Search, PokemonCard, Loading, Error} from './components/'


import axios from 'axios' //Import axios for GET the data from the API

import {useQuery} from 'react-query'

/* IMPORT FROM MATERIAL-UI */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//Import getAllPokemons method from api
const {getAllPokemons} = require('./api/pokemonApi')

const  App = () => {
  const [search, setSearch] = useState('') //State for save the search user input
  const [pokemon, setPokemon] = useState([]) //State for save all the information for every pokemon
  const [isError, setIsError] = useState(false) //State for save if we have an error
  const [count, setCount] = useState(0) //State for save the total numbers of pokemons in the api
  const [limit, setLimit] = useState(50) //State for save the limit of the results that we have to show

  //Function to filter the names of the pokemons
  const controlNamePokemon = (pokemon) =>{
    return ((pokemon.name).toLowerCase().indexOf(search.toLowerCase()) > -1 )
}

  //Function for GET the information detail from every pokemon
  const onSuccess = async (data) => {
    let arrayResults = data.results
    if(count !== data.count){
      setCount(data.count)
    }

    if(search !== ""){ //If the input is empty, we have to search in all the api
      arrayResults = data.results.filter(controlNamePokemon) //If not empty, we apply the filter
    }

    if (arrayResults.length > limit){ //If we have more result than the limit, just slice 
      arrayResults = arrayResults.slice(0,limit)
    }

    //When we find all names that matches, we GET the detail data from every pokemon
    const pokemonData = await Promise.all(arrayResults.map( async p =>{
        const pokemonRecord = await axios.get(p.url);
        return pokemonRecord
    }))

    setPokemon(pokemonData)
  }

  const onError = (error) =>{
    setIsError(true)
  }
  const {isLoading, refetch} = useQuery(['getAllPokemons', count, search, limit], getAllPokemons, {onSuccess, onError}) //Use react-query for get all the pokemons


  return (
    <>
    <Title />
    <Container style={{marginTop: 10}}>
      <Error isError={isError} />
      <Loading loading={isLoading}/>
      <Grid container justify="center">
        <Search 
        limit={limit} 
        setLimit={setLimit} 
        count={count} 
        onSearch={refetch}
        setSearch={setSearch}
        />
        {(Object.keys(pokemon).length === 0) ? (
          <p style={{fontWeight: 'light'}}>No se han encontrado resultados con coincidan con su busqueda.</p>
        ):(
          pokemon.map( (p,index) => (
            <PokemonCard key={index} pokemon={p}/>
          ))
        )}
      </Grid>
    </Container>
    </>
  );
}

export default App;
