import React, { useEffect, useState } from 'react';
import './GameBoard.css';
import Card from '../Card/Card';
import { GameSettings } from '../../types/gameSettings';

interface Props {
  settings: GameSettings;
  onGameComplete: () => void; // פונקציה להודעה על סיום המשחק
}

const GameBoard: React.FC<Props> = ({ settings, onGameComplete }) => {
  const [cards, setCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  useEffect(() => {
    const icons = ['🍎', '🍌', '🍓', '🍇', '🍍', '🍒', '🍉', '🍋', '🍑', '🍈', '🥝', '🍊', '🥥', '🍏', '🥭'];
    const selectedIcons = icons
      .sort(() => 0.5 - Math.random())
      .slice(0, settings.rows * settings.columns / 2);
    const shuffledIcons = [...selectedIcons, ...selectedIcons].sort(() => Math.random() - 0.5);
    setCards(shuffledIcons);
    setFlippedCards([]);
    setMatchedCards([]);
  }, [settings]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIdx, secondIdx] = flippedCards;
      if (cards[firstIdx] === cards[secondIdx]) {
        setMatchedCards((prevMatched) => {
          const newMatched = [...prevMatched, firstIdx, secondIdx];
          if (newMatched.length === cards.length) {
            onGameComplete(); // כל הכרטיסים תואמים - משחק הושלם
          }
          return newMatched;
        });
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards, cards, onGameComplete]);

  const handleCardClick = (index: number) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <div className="game-board" style={{ gridTemplateColumns: `repeat(${settings.columns}, 1fr)` }}>
      {cards.map((icon, index) => (
        <Card 
          key={index} 
          icon={icon} 
          isFlipped={flippedCards.includes(index) || matchedCards.includes(index)} 
          onClick={() => handleCardClick(index)} 
          color={settings.cardColor} 
        />
      ))}
    </div>
  );
};

export default GameBoard;
