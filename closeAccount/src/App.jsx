import React, { useState } from "react";
import "./styles.css";
import CardForm from "./Form";
import styles from "./index.module.css";

const App = ({ }) => {

  const {cardBody} = styles;

  const [state, setState] = useState({
    cards: [
      { number: "7653 7553 5693 9862", balance: 100 },
      { number: "7453 9736 0763 3474", balance: 400 },
      { number: "9577 7543 9379 9784", balance: 800 }
    ]
  }
  )

  const handleCloseCard = (idx) => {
    console.log(idx)
    const cloneCards = state.cards.filter( (_ ,index) => index !== idx );
    setState({ cards: cloneCards });
  };

  const handleOpenCard = (card) => { 
    setState(prev => {
      return {
        cards:[...prev.cards,card]
      }
    })
   };

  return (
    <div className="app">
      <CardForm handleOpenCard={handleOpenCard} />
      {state.cards.map(({ number, balance }, idx) => (
        <div key={number} className="card" style={{ width: "18rem" }}>
          <div className={cardBody}>
            <h5 className="card-title">
              Карта <br />
              {number}
            </h5>
            <div className="card-text">
              <ul className="list-group">
                <li className="list-group-item">Баланс: {balance}</li>
                <hr />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleCloseCard(idx)}
                >
                  Закрыть карту
                </button>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default App