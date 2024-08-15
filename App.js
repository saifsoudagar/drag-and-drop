import React, { useState } from 'react';
import Canvas from './Canvas';
import Card from './Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addCard = () => {
    const newCard = {
      id: nextId,
      text: `This is a new card with some text. Card ID: ${nextId}`
    };
    setCards([...cards, newCard]);
    setNextId(nextId + 1);
  };

  return (
    <div>
      <button onClick={addCard} className="add-card-button">Add New Card</button>
      <Canvas>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} text={card.text} />
        ))}
      </Canvas>
    </div>
  );
}

export default App;

