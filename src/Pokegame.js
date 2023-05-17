import React from "react";
import pokemons from "./pokemons";
import randomize, { calculateScores } from "./helpers";
import Pokedex from "./Pokedex";
import "./Pokegame.css";
const Pokegame = () => {
  const hands = randomize(pokemons.length);
  const { handOne, handTwo } = hands;
  const [scoreOne, scoreTwo] = calculateScores(handOne);
  return (
    <div className="Pokegame">
      <div className="Pokegame-hand">
        <h3>Hand One</h3>
        <Pokedex
          indices={handOne}
          score={scoreOne}
          winner={scoreOne > scoreTwo}
        />
      </div>
      <div className="Pokegame-hand">
        <h3>Hand Two</h3>
        <Pokedex
          indices={handTwo}
          score={scoreTwo}
          winner={scoreTwo > scoreOne}
        />
      </div>
    </div>
  );
};
export default Pokegame;
