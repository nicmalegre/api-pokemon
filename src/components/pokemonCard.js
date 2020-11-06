import React, { useContext, useEffect, useState } from 'react';




const PokemonCard = (props) => {
    return ( 
        <>
        <img src={props.pokemon.data.sprites.front_default} alt=''/>
        <img src={props.pokemon.data.sprites.back_default} alt=''/>
        <p key={props.pokemon.data.name}>Name: {props.pokemon.data.name}</p>
        <p key={props.pokemon.data.height}>Height: {props.pokemon.data.height}</p>
        <p key={props.pokemon.data.weight}>Weight: {props.pokemon.data.weight}</p>
        </>

  );
}
 
export default PokemonCard;