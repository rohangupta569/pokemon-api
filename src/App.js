import Loading from "./components/loading";
import Pokemoncard from "./components/pokemoncard";
import './App.css';
import React,{useState,useEffect} from "react";
import {getAllPokemon,getpokemon} from "./functions/function";

function App() {
  const [pokemonlist,setpokemonlist]=useState([]);
  const [nextbuttonlink,setnextbuttonlink]=useState("");
  const [prevbuttonlink,setprevbuttonlink]=useState("");
  const [currpageurl,setcurrpageurl]=useState("https://pokeapi.co/api/v2/pokemon");
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    async function fetchdata()
    {
    setloading(true);
    
  
    let response=await getAllPokemon(currpageurl);
    console.log(response);
    setnextbuttonlink(response.next)
    setprevbuttonlink(response.previous)
    let pokemondetailsarray=await Promise.all(response.results.map(async (pokemon)=>{
     let eachpokemon=await getpokemon(pokemon.url);
     //console.log(eachpokemon);
     return eachpokemon;
    }))
    setpokemonlist(pokemondetailsarray);
    console.log(pokemondetailsarray);
    setloading(false);

    }
    fetchdata();
},[currpageurl])
  
  


  if(loading)
  {
    return(
      <div>
        <Loading/>
      </div>
    )
    }
    return (
    <div className="App">
      <h1>Here is List of All Pokemons</h1>
      <h3>Using PokemonAPI</h3>
      <h6>Fetched from <a href={currpageurl}>HERE</a> </h6>
      <div className="ShowPokemons">
      {pokemonlist.map((pokemon)=>{
        return(
          <div>
            <Pokemoncard pokemon={pokemon}/>
          </div>
        )
      })}
      </div>
      <div className="buttons">
        <button onClick={()=>{
          console.log(prevbuttonlink);
          if(prevbuttonlink)
          {
            
            setcurrpageurl(prevbuttonlink);
          }
        }}>Prev</button>
        <button onClick={()=>{
          if(nextbuttonlink)
          {
           
            setcurrpageurl(nextbuttonlink);
          }
        }}>Next</button>
      </div>
    </div>
  );
}

export default App;