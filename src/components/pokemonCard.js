import React, { useContext, useEffect, useState } from 'react';



const PokemonCard = (props) => {
    return ( 
        <div>
            {props.pokemon.map( p => (
                <p key={p.name}>{p.name}</p>
            ))}
        </div>
  );
}
 
export default PokemonCard;