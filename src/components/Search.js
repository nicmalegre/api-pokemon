import React from 'react'

//Import from Material-ui
import { FormControl, Select} from '@material-ui/core/';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


export const Search = ({limit, count,setLimit, onSearch, setSearch}) => {

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
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={75}>75</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                
                {(limit >= 200) && (
                  <MenuItem value={limit}>{limit}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          
          
        </Grid>
    )


}
