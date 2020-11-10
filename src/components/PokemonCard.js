import React, { useState, useEffect } from 'react';

/* IMPORT FROM MATERIAL-UI */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import {useQuery} from 'react-query'
import Skeleton from '@material-ui/lab/Skeleton';

import {Error} from './Error'

//Import getPokemon method from api folder
const {getPokemon} = require('../api/pokemonApi')


/* STYLES FOR THE CARD IMPORT FROM MATERIAL-UI */
const useStyles = makeStyles({
    root: {
      maxWidth: 320,
      minWidth:240,
      display: 'inline-block',
      margin: 15,
      padding: 15,
      
    },
    media: {
      height: 140,
    },
  });


export const PokemonCard = ({name, url}) => {
    
    const classes = useStyles(); //We need to declare this in order to use

    const {data, isLoading, isError} = useQuery(['pokemon-'+name, url], getPokemon) //Use react-query for get all the pokemons
    if (isError) return <Error />
  
    return ( 
        
      <Card className={classes.root}>
        {(isLoading) ? (
          <Grid>
            <Skeleton variant="circle" width={40} height={40} style={{marginBottom:5, display: 'inline-block'}}/>
            <Skeleton variant="circle" width={40} height={40} style={{marginBottom:5, display: 'inline-block'}}/>
            <Skeleton variant="rect" width={210} height={118} />
          </Grid>
        ):(
          <>
            <div style={{textAlign: 'center'}}>
                <img height='120px' src={data.sprites.front_default} alt=''/>
                <img height='120px' src={data.sprites.back_default} alt=''/>
            </div>
            <p><b>Name:</b> {data.name}</p>
            <p><b>Height:</b> {data.height}</p>
            <p><b>Weight:</b> {data.weight}</p>
            <p><b>Base Experience:</b> {data.base_experience}</p>
            <p><b>Abilities: </b></p> 
            <ul>
                {data.abilities.map((a,index) =>{ 
                    return (
                        <li key={index}>{a.ability.name}</li>
                    )
                })}
            </ul>
          </>
        )
        }
      </Card> 

  );
}
 