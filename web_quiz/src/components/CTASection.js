import React from 'react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Ready to Test Your Web Development Skills?</h2>
        <p className="cta-subtext">
          Create an account to track your progress, save your results, and measure your improvement over time.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Create Free Account</button>
          <button className="btn btn-secondary">Start Testing Now</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
