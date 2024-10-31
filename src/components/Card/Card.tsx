import React from 'react';
import './Card.css';

interface Props {
  icon: string;
  isFlipped: boolean;
  onClick: () => void;
  color: string;
}

const Card: React.FC<Props> = ({ icon, isFlipped, onClick, color }) => (
  <div className="card" style={{ backgroundColor: isFlipped ? color : '#ccc' }} onClick={onClick}>
    {isFlipped && <span>{icon}</span>}
  </div>
);

export default Card;
