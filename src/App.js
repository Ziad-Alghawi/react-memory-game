import { useState, useEffect } from 'react';
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

  // handle a card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  // compare 2 selected cards
  useEffect(() => {
    // if we have both choices, then we compare them
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        console.log('those cards match');
        resetTurn();
      } else {
        console.log('those cards do not match');
        resetTurn();
      }
    }

  }, [choiceOne, choiceTwo]);




  return (
    <div className="App">
      <h1>Magic Memory Game</h1>
      <button onClick={shuffeledCards} 
        >Start Game
        </button>

        <div className="card-grid">
          {cards.map(card => (
            
            <SingleCard 
              key={card.id}
              card={card} 
              handleChoice={handleChoice}
            />
            
          ))}

        </div>
    </div>
  );
}

export default App;
