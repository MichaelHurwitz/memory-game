// src/components/DifficultySelector/DifficultySelector.tsx
import React from 'react';
import './DifficultySelector.css';
import { difficulties } from '../../types/gameSettings';

interface Props {
  startGame: (difficulty: keyof typeof difficulties) => void;
}

const DifficultySelector: React.FC<Props> = ({ startGame }) => (
  <div className="difficulty-selector">
    <h2>Select Difficulty</h2>
    {Object.keys(difficulties).map((level) => (
      <button 
        key={level} 
        onClick={() => startGame(level as keyof typeof difficulties)} 
        className="difficulty-button"
      >
        {level.charAt(0).toUpperCase() + level.slice(1)} {/* הופך את שם הקושי לאות ראשונה גדולה */}
      </button>
    ))}
  </div>
);

export default DifficultySelector;
