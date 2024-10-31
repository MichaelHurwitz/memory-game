// gameSettings.ts
export interface GameSettings {
    level: string; // נוסף שדה רמת הקושי
    rows: number;
    columns: number;
    timeLimit: number;
    cardColor: string;
  }
  
  export const difficulties: { [key: string]: GameSettings } = {
    easy: { level: 'easy', rows: 2, columns: 3, timeLimit: 900, cardColor: '#a8e6cf' }, // 15 דקות
    medium: { level: 'medium', rows: 3, columns: 4, timeLimit: 600, cardColor: '#ffd3b6' }, // 10 דקות
    hard: { level: 'hard', rows: 4, columns: 4, timeLimit: 420, cardColor: '#ff8b94' }, // 7 דקות
  };
  