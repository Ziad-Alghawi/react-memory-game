import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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

        <div className="card-grid">
          {cards.map(card => (
            
            <SingleCard key={card.id} card={card} />
            
          ))}

        </div>
    </div>
  );
}

export default App;
