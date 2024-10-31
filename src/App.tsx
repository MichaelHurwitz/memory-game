// App.tsx

import React, { useState } from 'react';
import './App.css';
import DifficultySelector from './components/DifficultySelector/DifficultySelector';
import GameBoard from './components/GameBoard/GameBoard';
import Timer from './components/Timer/Timer';
import CompletionMessage from './components/CompletionMessage/CompletionMessage';
import { GameSettings, difficulties } from './types/gameSettings';

const App: React.FC = () => {
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [gameKey, setGameKey] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const startGame = (difficulty: keyof typeof difficulties) => {
    setSettings(difficulties[difficulty]);
    setGameKey((prevKey) => prevKey + 1);
    setGameCompleted(false);
  };

  const resetGame = () => {
    setGameKey((prevKey) => prevKey + 1);
    setGameCompleted(false);
  };

  const handleGameComplete = () => {
    setGameCompleted(true);
  };

  const nextLevel = () => {
    if (settings) {
      const difficultyKeys = Object.keys(difficulties) as Array<keyof typeof difficulties>;
      const currentIndex = difficultyKeys.findIndex(
        (key) => difficulties[key].level === settings.level
      );

      if (currentIndex < difficultyKeys.length - 1) {
        const nextLevelKey = difficultyKeys[currentIndex + 1];
        startGame(nextLevelKey); // להתחיל את הרמה הבאה
      } else {
        alert("Congratulations! You've completed the hardest level!");
      }
    }
  };

  const resetLevels = () => {
    setSettings(null);
    setGameCompleted(false);
  };

  return (
    <div className="app">
      <h1>Memory Game</h1>
      {settings ? (
        <div className="game-container">
          {gameCompleted ? (
            <CompletionMessage 
              message="🎉 You Did It! 🎉" 
              onRestart={resetGame} 
              onNextLevel={nextLevel} 
              onResetLevels={resetLevels} 
            />
          ) : (
            <>
              <div className="timer-container">
                <Timer timeLimit={settings.timeLimit} resetGame={resetGame} />
                <button className="reset-button" onClick={resetGame}>⟳</button>
              </div>
              <GameBoard key={gameKey} settings={settings} onGameComplete={handleGameComplete} />
              <button onClick={resetLevels} className="main-reset-button">Reset Game</button>
            </>
          )}
        </div>
      ) : (
        <DifficultySelector startGame={startGame} />
      )}
    </div>
  );
};

export default App;
