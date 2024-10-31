// src/components/CompletionMessage/CompletionMessage.tsx

import React from 'react';
import './CompletionMessage.css';

interface CompletionMessageProps {
  onRestart: () => void;
  onNextLevel: () => void;
  onResetLevels: () => void;
  message: string;
}

const CompletionMessage: React.FC<CompletionMessageProps> = ({ onRestart, onNextLevel, onResetLevels, message }) => {
  return (
    <div className="completion-message">
      <h2>{message}</h2>
      <button onClick={onRestart} className="completion-button">Play Again</button>
      <button onClick={onNextLevel} className="completion-button next-level">Next Level</button>
      <button onClick={onResetLevels} className="completion-button reset-levels">Choose Level</button>
    </div>
  );
};

export default CompletionMessage;
