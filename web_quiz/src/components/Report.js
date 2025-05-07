import React from 'react';
import './Report.css';

const Report = () => {
  return (
    <section className="report-section">
      <div className="report-left">
        <h2 className="report-title">Track Your Progress</h2>
        <p className="report-description">
          Our comprehensive report card system helps you monitor your progress, identify strengths and weaknesses, and focus your learning efforts.
        </p>

        <ul className="report-features">
          <li><span className="check">✔</span> Detailed Analysis</li>
          <li><span className="check">✔</span> Progress Tracking</li>
          <li><span className="check">✔</span> Downloadable Reports</li>
        </ul>

        <button className="report-button">📄 View Your Report Card</button>
      </div>

      <div className="report-right">
        <div className="sample-card">
          <h3>Sample Report Card</h3>

          <div className="bar">
            <span>HTML</span>
            <div className="progress-bar orange" style={{ width: '80%' }}></div>
          </div>
          <div className="bar">
            <span>CSS</span>
            <div className="progress-bar blue" style={{ width: '65%' }}></div>
          </div>
          <div className="bar">
            <span>JavaScript</span>
            <div className="progress-bar yellow" style={{ width: '70%' }}></div>
          </div>
          <div className="bar">
            <span>React</span>
            <div className="progress-bar blue" style={{ width: '55%' }}></div>
          </div>

          <div className="focus-areas">
            <strong>Recommended Focus Areas:</strong>
            <ul>
              <li>React Component Lifecycle</li>
              <li>Advanced CSS Layouts</li>
              <li>JavaScript Promises</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
