import React from 'react';
import subjects from './db';
import "../css/courses.css"
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div>
      <h1>Available courses</h1>
        {console.log(subjects)}
        
      <section className="container">
        {subjects.map((course) => (
          <Link to={`/course/${course.id}`}>
            <div className="card" key={course.id} title="click to see detail">
              <div className='course-name'>{course.name}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Courses

// Card should show only name
// the card should route to another page to show ( branch and intro )