import React, { useState } from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import hoopa from "./images/hoppa.png";  
import pika from "./images/pika.png";

const App = () => {
  const [hoopaHP, setHoopaHP] = useState(120);
  const [pikaHP, setPikaHP] = useState(100);
  const [winner, setWinner] = useState(""); // for  State the winner

  const hoopaAttack = () => {
    const newPikaHP = pikaHP - 50; // attack
    setPikaHP(newPikaHP); // Update Pikachu 
    if (newPikaHP <= 0) { 
      setWinner("Hoopa Wins!"); 
    }
  };

  const pikaAttack = () => {
    const newHoopaHP = hoopaHP - 40;  // attack
    setHoopaHP(newHoopaHP); // Update Hoopa
    if (newHoopaHP <= 0) { //  Hoopa's HP is 0 or less
      setWinner("Pikachu Wins!"); //winnner
    }
  };

  return (
    <div className="container">
      {}
      {winner ? (
        <div className="winner-message">{winner}</div>
      ) : (
        <>
          <Pokemon name="Hoopa" img={hoopa} hp={hoopaHP} attack={hoopaAttack} />
          <Pokemon name="Pikachu" img={pika} hp={pikaHP} attack={pikaAttack} />
        </>
      )}
    </div>
  );
};

export default App;

