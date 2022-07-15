import React from "react";

function Pokemoncard({pokemon})
{
return(
    <div className="pokemoncard">
        <div className="pokemonname">{pokemon.name}</div>
        <div className="cardimg">
            <img src={pokemon.sprites.front_default}/>
        </div>
        <div className="pokemondetails">Height:{pokemon.height} Weight:{pokemon.weight}</div>
        <div className="pokemondetails">id:{pokemon.id}</div>
        <div className="pokemondetails">type: {pokemon.types[0].type.name}</div>

    </div>
)
}
export default Pokemoncard;