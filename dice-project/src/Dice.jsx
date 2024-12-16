import { useState, useEffect } from "react";
import dice1 from './assets/1.png';
import dice2 from './assets/2.png';
import dice3 from './assets/3.png';
import dice4 from './assets/4.png';
import dice5 from './assets/5.png';
import dice6 from './assets/6.png';

const Dice = () => {
  const [dice, setDice] = useState(1);

  useEffect(() => {
    const roll = () => {
      const randomRoll = Math.floor(Math.random() * 6) + 1;
      setDice(randomRoll);
    };

    window.addEventListener("click", roll);
    return (
        () => {
            window.removeEventListener("click", roll);
        }
    )
  });

  return (
    <img 
    className="dice"
      src={
        dice === 1 ? dice1 : 
        dice === 2 ? dice2 : 
        dice === 3 ? dice3 : 
        dice === 4 ? dice4 : 
        dice === 5 ? dice5 : 
        dice6
      } 
      alt="dice image" 
    />
  );
};

export default Dice;
