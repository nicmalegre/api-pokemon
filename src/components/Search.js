import React, {useState} from 'react'

import axios from 'axios'

import {useQuery} from 'react-query'

//Import from Material-ui
import { FormControl, Select} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const {getAllPokemons} = require('../api/pokemonApi')




const Search = ({limit, count, setLoading, setLimit, setPokemon}) => {
    const [search, setSearch] = useState(null) //State for save the user input

    const {data, status} = useQuery(['getAllPokemons', count], getAllPokemons) //Use react-query for get all the pokemons

    //Function for filter the name of the pokemons
    const controlNamePokemon = (pokemon) =>{
        return ((pokemon.name).toLowerCase().indexOf(search.toLowerCase()) > -1 )
    }
    
    //Function to control the chanfe of the input search
    const handleChangeInput = (event) =>{
        setSearch(event.target.value)
    }

    //Function to control the select change
    const handleChangeSelect = (event) => {
        setLimit(event.target.value);
        /* filterItems() */
    };
    
    //Function to control when the user click on search
    //Filter the names and then, get the data of every pokemon
    let arrayResults = []
    const filterItems = async () =>{
        if(status ==="success"){
            if((search === "")||(search === null)){
                arrayResults = data.results
            }else{
                arrayResults = data.results.filter(controlNamePokemon)
            }

            if (arrayResults.length > limit){
                arrayResults = arrayResults.slice(0,limit)
                console.log(arrayResults)
            }

            let pokemonData = await Promise.all(arrayResults.map( async p =>{
                let pokemonRecord = await axios.get(p.url);
                return pokemonRecord
            }))
            
            setPokemon(pokemonData.map( p => {
                return p
            }))
        }
        
    }

    return (
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
          
          <FormControl variant="outlined"  size='small' style={{marginLeft: 50, marginTop: 10}}>
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
                <MenuItem value={1000}>1000</MenuItem>
                <MenuItem value={count}>All</MenuItem>
              </Select>
            </FormControl>
            {console.log(status)}
            {(status === 'loading') && (<h1>Loading ...</h1>)}
        </Grid>
    )


}

export default Search;