import { useState, useEffect } from 'react';
import { cardImages } from '../data/cards';

export type CardType  = {
  id: number
  src: string
  matched: boolean
}

export default function useMemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    // duplicate cards
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));

      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
  }

  // handle a card choice
  const handleChoice = (card: CardType) => {
    if (choiceOne?.id === card.id) {
      return;
    }

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare 2 selected cards
  useEffect(() => {
    // if we have both choices, then we compare them
    if (choiceOne && choiceTwo) {
      setDisabled(true);

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

    // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

    //start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return { cards, turns, choiceOne, choiceTwo, disabled, shuffleCards, handleChoice };
}