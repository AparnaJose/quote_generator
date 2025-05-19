import React, { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

const gradients = [
  'linear-gradient(135deg, #396afc, #f953c6)',
  'linear-gradient(135deg, #000428, #004e92)',
  'linear-gradient(135deg, #ff416c, #2193b0)',
  'linear-gradient(135deg, #a8e063, #56ab2f, #2c3e50)',
  'linear-gradient(135deg, #232526, #ffb347)',
  'linear-gradient(135deg, #43cea2, #185a9d)',
  'linear-gradient(135deg, #e65c00, #f9d423)',
  'linear-gradient(135deg, #00c6ff, #0072ff)',
  'linear-gradient(135deg, #1f4037, #99f2c8)',
  'linear-gradient(135deg, #b24592, #f15f79)',
  'linear-gradient(135deg, #2c3e50, #fd746c)',
  'linear-gradient(135deg, #fc466b, #3f5efb)',
  'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
  'linear-gradient(135deg, #355c7d, #6c5b7b, #c06c84)',
  'linear-gradient(135deg, #00d2ff, #3a7bd5)',
  'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
];

function App() {
  const [bgGradient, setBgGradient] = useState(gradients[0]);

  const changeBackground = () => {
    const random = gradients[Math.floor(Math.random() * gradients.length)];
    setBgGradient(random);
  };

  return (
    <div className="App" style={{ background: bgGradient }}>
      <QuoteBox onNewQuote={changeBackground} />
    </div>
  );
}

export default App;

