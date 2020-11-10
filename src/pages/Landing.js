import React, {useState} from 'react'; //Import the hook
import {Title, Search, PokemonCard, Loading, Error} from '../components'

//For the GET to the API
import {useQuery} from 'react-query'

/* IMPORT FROM MATERIAL-UI */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

//Import getAllPokemons method from api folder
const {getAllPokemons} = require('../api/pokemonApi')

export const  Landing = () => {
  const [search, setSearch] = useState('') //State for save the search user input
  const [pokemon, setPokemon] = useState([]) //State for save all the information for every pokemon
  const [isError, setIsError] = useState(false) //State for save if we have an error
  const [count, setCount] = useState(0) //State for save the total numbers of pokemons in the api
  const [limit, setLimit] = useState(50) //State for save the limit of the results that we have to show
  const [end, setEnd] = useState(limit)
  const [allResultsPokemon, setAllResultsPokemon] = useState([])

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

    if(search !== ""){ 
      arrayResults = data.results.filter(controlNamePokemon) //If not empty, we apply the filter
    }


   

    if (arrayResults.length > limit){ //If we have more result than the limit, just slice 
      setPokemon(() => arrayResults.slice(0,limit)) //Show only 200 pokemons 
    }else{
      setPokemon(arrayResults)
    }

    setAllResultsPokemon(arrayResults) //Save all the results 
  }
    
  const onError = (error) =>{
    setIsError(true)
  }

  const {isLoading, refetch} = useQuery(['getAllPokemons', count, search, limit], getAllPokemons, {onSuccess, onError}) //Use react-query for get all the pokemons

  const onViewMore = () =>{
    setLimit(limit+50)
    setEnd(end+50)
    setPokemon(allResultsPokemon.slice(0,end))    
  }

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
          <>
          {pokemon.map(({name, url},index) => (
            <PokemonCard key={name} url={url}/>
          ))}
          {(limit >= 200) && (
            <Grid container justify="center">
              <Grid container justify="center" style={{marginTop:20, marginBottom:20}}>
                <Button onClick={onViewMore} variant="contained" >Ver Más ...</Button>
              </Grid>
            </Grid>          
          )}
          </>
        )}
      </Grid>
    </Container>
    </>
  );
}

