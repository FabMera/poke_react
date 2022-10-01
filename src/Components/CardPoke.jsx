import React from "react";
import { Link } from "react-router-dom";
const CardPoke = ({ poke }) => {

  return (
    <div className="card mb-3 d-flex align-items-center mt-5 mx-auto" style={{ width: "60%" }}>
      <div className="row g-2 mt-5 p-2">
        <div className="col-md-4">
          <img
            src={poke.imgCvg}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{poke.nombre}:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>hp:</b>{poke.hp}</li>
              <li className="list-group-item"><b>attack:</b>{poke.ataque}</li>
              <li className="list-group-item"><b>defense:</b>{poke.defensa}</li>
              <li className="list-group-item"><b>especial-atackk:</b>{poke.especial}</li>
            </ul>
            <p className="card-text">
              <small className="text-muted">{poke.especial}</small>
            </p>
            <Link to ="/Pokemones"><button className="btn btn-dark">Return</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPoke;
