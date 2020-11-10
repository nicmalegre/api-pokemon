import React, {useState} from 'react'

import axios from 'axios'

import {useQuery} from 'react-query'

//Import from Material-ui
import { FormControl, Select} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//Import getAllPokemons method from api
const {getAllPokemons} = require('../api/pokemonApi')




const Search = ({limit, count,setLimit, onSearch, setSearch}) => {
    
    //Save the input state in the search state
    const handleChangeInput = (event) =>{
        setSearch(event.target.value)
    }

    //When the select change, we save the new limit
    const handleChangeSelect = (event) => {
        setLimit(event.target.value);
    };
    

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
              <Button variant="contained" color="primary" onClick={onSearch} style={{width: '20%'}}>
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
        </Grid>
    )


}

export default Search;