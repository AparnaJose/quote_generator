import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const QuoteBox = ({ onNewQuote }) => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    setHasError(false);

    try {
      const res = await fetch('/quotes.json');
      if (!res.ok) throw new Error('Local file error');
      const localQuotes = await res.json();
      const random = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      setQuote({ content: random.text, author: random.author });

      // 🎨 Trigger background change
      onNewQuote?.();
    } catch (err) {
      console.error("Quote loading failed:", err);
      setHasError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote-box">
      {loading ? (
        <div className="loader"></div>
      ) : hasError ? (
        <div className="error-message">Something went wrong. Please try again later.</div>
      ) : (
        <motion.div
          key={quote.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="quote-text">"{quote.content}"</p>
          <p className="quote-author">— {quote.author}</p>
        </motion.div>
      )}

      <button className="new-quote-btn" onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
