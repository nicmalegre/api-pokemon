import React, { useContext, useEffect, useState } from 'react';



const PokemonCard = (props) => {
    return ( 
        <div>
            {props.pokemon.map( p => (
                <>
                <p key={p.data.name}>Name: {p.data.name}</p>
                <p key={p.data.name}>Height: {p.data.height}</p>
                <p key={p.data.name}>Weight: {p.data.weight}</p>
                </>
            ))}
        </div>
  );
}
 
export default PokemonCard;