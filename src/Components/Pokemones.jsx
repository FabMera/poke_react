import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);

  const [nombre, setNombre] = useState("");

  const navigate = useNavigate();

  const irAbuscarPokemon = () => {
    navigate(`/Pokemones/${nombre}`);
  };

  const datosApi = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await res.json();
    const datos = data.results;
    //console.log(datos);
    setPokemones(datos);
  };

  useEffect(() => {
    datosApi();
  }, []);

  console.log(pokemones);
  return (
    <>
      <div
        className="mb-3 d-flex flex-column align-items-center mt-5 mx-auto p-3 "
        style={{ width: "35%" }}
      >
        <select
          onChange={({ target }) => setNombre(target.value)}
          className="form-select "
          aria-label="Default select example"
        >
          <option value="">Pokemones</option>
          {pokemones.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="btn btn-dark m-3" onClick={irAbuscarPokemon}>
          seleccionar
        </button>
      </div>
    </>
  );
};

export default Pokemones;
