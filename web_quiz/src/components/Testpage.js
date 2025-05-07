import React from 'react';
import './Testpage.css';

const levels = [
  {
    title: 'Level 1: Fundamentals',
    description: 'Basic concepts and foundation knowledge',
    tag: 'Beginner',
    color: 'green',
  },
  {
    title: 'Level 2: Essential Practices',
    description: 'Common patterns and techniques',
    tag: 'Easy',
    color: 'blue',
  },
  {
    title: 'Level 3: Intermediate Concepts',
    description: 'More complex topics and applications',
    tag: 'Intermediate',
    color: 'yellow',
  },
  {
    title: 'Level 4: Advanced Techniques',
    description: 'Specialized knowledge and optimization',
    tag: 'Advanced',
    color: 'orange',
  },
  {
    title: 'Level 5: Expert Challenges',
    description: 'Cutting-edge concepts and best practices',
    tag: 'Expert',
    color: 'red',
  },
];

const Testpage = () => {
  return (
    <div className="testpage-container">
      <h2 className="testpage-title">Test Levels</h2>
      <p className="testpage-description">
        Each technology has 5 progressive levels, from beginner to expert, with 10 questions per level.
      </p>

      <div className="test-cards">
        {levels.map((level, index) => (
          <div className="test-card" key={index}>
            <h3 className="test-card-title">{level.title}</h3>
            <span className={`tag tag-${level.color}`}>{level.tag}</span>
            <p className="test-card-description">{level.description}</p>
            <p className="test-card-questions">10 questions</p>
            <button className="start-level-btn">Start Level</button>
          </div>
        ))}

        <div className="test-card">
          <h3 className="test-card-title">More Levels</h3>
          <p className="test-card-description">
            Similar level structure applies to CSS, JavaScript, and React tests.
          </p>
          <button className="view-tests-btn">View All Tests</button>
        </div>
      </div>
    </div>
  );
};

export default Testpage;
