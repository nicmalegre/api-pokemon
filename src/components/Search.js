import React from 'react'

//Import from Material-ui
import { FormControl, Select} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


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
            <FormControl variant="outlined"  size='small'>
              
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
          
          
        </Grid>
    )


}

export default Search;