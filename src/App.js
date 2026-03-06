import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "img/react.png"},
  { "src": "img/js.png"},
  { "src": "img/web.png"},
  { "src": "img/developer.png"},
  { "src": "img/ziad.png"},
  { "src": "img/code.png"}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffeledCards = () => {
    // duplicate cards
    const shuffeledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random()  })); 

      setCards(shuffeledCards);
      setTurns(0);

  }


  return (
    <div className="App">
      <h1>Magic Memory Game</h1>
      <button onClick={shuffeledCards} 
        >Start Game
        </button>
    </div>
  );
}

export default App;
