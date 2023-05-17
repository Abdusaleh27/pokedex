import pokemons from "./pokemons";

function randomize(num) {
  const handOne = [];
  const handTwo = [];
  let counter = 0;
  while (counter < num) {
    let random = Math.floor(Math.random() * num);
    console.log(random, counter);
    if (handOne.length < num / 2) {
      if (!handOne.includes(random)) {
        handOne.push(random);
        counter++;
      }
    } else {
      if (!handOne.includes(random) && !handTwo.includes(random)) {
        handTwo.push(random);
        counter++;
      }
    }
  }
  return { handOne, handTwo };
}

function calculateScores(arr){
  let scoreOne = 0;
  let scoreTwo = 0;
  for(let i =0;i < pokemons.length; i++){
    if(arr.includes(i)){
      scoreOne += pokemons[i].base_experience;
    }else{
      scoreTwo += pokemons[i].base_experience;
    }
  }
  return [scoreOne,scoreTwo];
}
export default randomize;
export {calculateScores};
