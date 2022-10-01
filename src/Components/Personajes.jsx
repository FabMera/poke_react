import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPoke from "./CardPoke";

const Personajes = () => {

  const { nombre } = useParams();
  const [pokemones, setPokemones] = useState([]);

  const datosApi = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const data = await res.json();

    const pokemon = 
      {
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.nombre}.png`,
        imgJuego: data.sprites.front_default,
        imgCvg: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        experiencia: data.base_experience,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        especial: data.stats[3].base_stat,
        
      }

    setPokemones(pokemon);
    console.log(pokemon)
  };
 

  useEffect(() => {
    datosApi();
  }, []);

  return (
    <>
      <CardPoke poke={pokemones} />
    </>
  );
};

export default Personajes;
