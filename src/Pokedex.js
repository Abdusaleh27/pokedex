import React from "react";
import pokemons from "./pokemons";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
const Pokedex = ({ indices, score, winner }) => {
  return (
    <div className="Pokedex">
      {indices.map((i) => {
        let pokemon = pokemons[i];
        let base_experience = pokemon.base_experience;
        return (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            base_experience={base_experience}
          />
        );
      })}
      <h5>
        Total Score: {score} &nbsp; &nbsp; &nbsp;<small>{winner ? "Winner" : ""}</small>
      </h5>
    </div>
  );
};
export default Pokedex;
