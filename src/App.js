import React, { useState } from 'react';
import './App.css';

const predictions = [
  "Major breakthrough in AI technology",
  "New space exploration mission announced",
  "Significant political election upset",
  "Major climate change agreement",
  "Breakthrough in cancer treatment",
  "A major tech company releases a revolutionary gadget",
  "Popular social media platform introduces new feature",
  "Record-breaking sports achievement",
  "Major celebrity scandal",
  "Large-scale natural disaster",
  "Cryptocurrency hits an all-time high",
  "Notable stock market crash or surge",
  "Major advancement in renewable energy",
  "Historic peace treaty signed",
  "High-profile court case verdict",
  "Significant scientific discovery",
  "A famous musician releases a long-awaited album",
  "Major cyber-attack on a government or corporation",
  "Historic cultural or social movement milestone",
  "A popular TV show or movie franchise announces a revival or reboot"
];

const generateBingoCard = () => {
  let card = [];
  let usedIndices = new Set();
  while (card.length < 25) {
    let randomIndex = Math.floor(Math.random() * predictions.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      card.push(predictions[randomIndex]);
    }
  }
  return card;
};

const App = () => {
  const [bingoCard, setBingoCard] = useState(generateBingoCard());

  const handleGenerateClick = () => {
    setBingoCard(generateBingoCard());
  };

  return (
    <div className="App">
      <h1>2024 Predictions Bingo</h1>
      <button onClick={handleGenerateClick}>Generate New Bingo Card</button>
      <div className="bingo-card">
        {bingoCard.map((prediction, index) => (
          <div key={index} className="bingo-cell">
            {prediction}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
