import React from 'react';

/* IMPORT FROM MATERIAL-UI */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


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


const PokemonCard = (props) => {
    
    const classes = useStyles(); //We need to declare this in order to use 

    return ( 
        <>
        <Card className={classes.root}>
            <div style={{textAlign: 'center'}}>
                <img height='120px' src={props.pokemon.data.sprites.front_default} alt=''/>
                <img height='120px' src={props.pokemon.data.sprites.back_default} alt=''/>
            </div>
            <p><b>Name:</b> {props.pokemon.data.name}</p>
            <p><b>Height:</b> {props.pokemon.data.height}</p>
            <p><b>Weight:</b> {props.pokemon.data.weight}</p>
            <p><b>Base Experience:</b> {props.pokemon.data.base_experience}</p>
            <p><b>Abilities: </b></p> 
            <ul>
                {props.pokemon.data.abilities.map((a,index) =>{ 
                    return (
                        <li key={index}>{a.ability.name}</li>
                    )
                })}
            </ul>
            
        </Card> 
        </>

  );
}
 
export default PokemonCard;