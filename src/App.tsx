import './App.css';
import useMemoryGame from './hooks/useMemoryGame';
import Card from './components/Card';



function App() {
  const game = useMemoryGame();

  return (
    <div className="App">
      <h1>Magic Memory Game</h1>

      <button onClick={game.shuffleCards} 
        >Start Game
        </button>
        <p className="turn"> Turns: {game.turns}</p>

        <div className="card-grid">
          {game.cards.map(card => (
            
            <Card 
              key={card.id}
              card={card} 
              handleChoice={game.handleChoice}
              flipped={
                card === game.choiceOne || card === game.choiceTwo || card.matched}
              disabled={game.disabled}
            />
            
          ))}

        </div>
        
    </div>
  );
}

export default App;
