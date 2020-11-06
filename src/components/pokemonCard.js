import React, { useContext, useEffect, useState } from 'react';

/* IMPORT FROM MATERIAL-UI */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';


/* STYLES FOR THE CARD IMPORT FROM MATERIAL-UI */
const useStyles = makeStyles({
    root: {
      maxWidth: 320,
      minWidth:300,
      display: 'inline-block',
      margin: 15,
      padding: 15,
      
    },
    media: {
      height: 140,
    },
  });


const PokemonCard = (props) => {
    
    const classes = useStyles(); //We need to declare this in order to use 

    return ( 
        <>
        <Card className={classes.root}>
            <div style={{textAlign: 'center'}}>
                <img height='120px' src={props.pokemon.data.sprites.front_default} alt=''/>
                <img height='120px' src={props.pokemon.data.sprites.back_default} alt=''/>
            </div>
            <p key={props.pokemon.data.name}><b>Name:</b> {props.pokemon.data.name}</p>
            <p key={props.pokemon.data.height}><b>Height:</b> {props.pokemon.data.height}</p>
            <p key={props.pokemon.data.weight}><b>Weight:</b> {props.pokemon.data.weight}</p>
            <p key={props.pokemon.data.base_experience}><b>Base Experience:</b> {props.pokemon.data.base_experience}</p>
            <p><b>Abilities: </b>
                <ul>
                    {props.pokemon.data.abilities.map(a =>{ 
                        return (
                            <li key={a.ability.name}>{a.ability.name}</li>
                        )
                    })}
                </ul>
            </p> 
        </Card> 
        </>

  );
}
 
export default PokemonCard;