import { useState, useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "img/react.png", matched: false },
  { "src": "img/js.png", matched: false },
  { "src": "img/web.png", matched: false },
  { "src": "img/developer.png", matched: false },
  { "src": "img/ziad.png", matched: false },
  { "src": "img/code.png", matched: false }
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

  // compare 2 selected cards
  useEffect(() => {
    // if we have both choices, then we compare them
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            }else {
              return card;
            }
          })
        })

        resetTurn();
      } else {

        setTimeout(() => resetTurn(), 1000);
      }
    }

  }, [choiceOne, choiceTwo]);

  console.log(cards);

    // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

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
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
            
          ))}

        </div>
    </div>
  );
}

export default App;
