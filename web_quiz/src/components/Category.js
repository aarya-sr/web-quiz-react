import React from 'react'
import './Category.css'

const Category = () => {
  return (
    <div className="category">
  <h1>Test Your Skills</h1>
  <p>
    Choose from our collection of tests designed to assess and improve your web development knowledge.
  </p>

  <div className="courses">
    <div className="course-card">
      <h2>HTML</h2>
      <p>Test your knowledge of HTML tags, attributes, semantics, and best practices.</p>
      <button>Start Testing</button>
    </div>

    <div className="course-card">
      <h2>CSS</h2>
      <p>Evaluate your understanding of CSS selectors, layout, and design principles.</p>
      <button>Start Testing</button>
    </div>

    <div className="course-card">
      <h2>JavaScript</h2>
      <p>Challenge your skills in JS variables, functions, DOM, and logic.</p>
      <button>Start Testing</button>
    </div>

    <div className="course-card">
      <h2>React</h2>
      <p>Test your grasp of React components, hooks, and state management.</p>
      <button>Start Testing</button>
    </div>
  </div>
</div>

  )
}

export default Category