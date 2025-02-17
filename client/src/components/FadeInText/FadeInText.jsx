import React from 'react';
import './FadeInText.css';

const FadeInText = ({ text }) => {
  let totalIndex = 0;

  return (
    <div className="fade-in-text">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="word">
          {word.split('').map((letter, letterIndex) => {
            const delay = totalIndex * 0.08;
            totalIndex += 1;
            return (
              <span key={letterIndex} style={{ animationDelay: `${delay}s` }}>
                {letter}
              </span>
            );
          })}
          {/* Render the space as a non-animated element */}
          <span key={`space-${wordIndex}`} className="space" aria-hidden="true">
            &nbsp;
          </span>
        </span>
      ))}
    </div>
  );
};

export default FadeInText;