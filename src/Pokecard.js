import React from "react";
import "./Pokecard.css"
const Pokecard = ({ id, name, type, base_experience }) => {
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{name}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};
export default Pokecard;
