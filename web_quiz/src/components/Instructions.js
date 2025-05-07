import React from 'react';
import './Instructions.css'; 

const Instructions = () => {
  return (
    <section className="instructions-section" id="how-it-works">
      <h2 className="instructions-title">How It Works</h2>
      <p className="instructions-subtitle">
        Our testing platform offers a structured approach to assess and improve your web development skills.
      </p>

      <div className="instructions-steps">
       
        <div className="instructions-step">
          <div className="step-number">1</div>
          <h3>Choose a Technology</h3>
          <p>
            Select from HTML, CSS, JavaScript, or React tests based on what you want to improve.
          </p>
        </div>

        
        <div className="instructions-step">
          <div className="step-number">2</div>
          <h3>Complete the Test</h3>
          <p>
            Answer questions ranging from basic to advanced levels to test your knowledge.
          </p>
        </div>

       
        <div className="instructions-step">
          <div className="step-number">3</div>
          <h3>Get Your Report Card</h3>
          <p>
            Review your results, identify areas for improvement, and track your progress over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
