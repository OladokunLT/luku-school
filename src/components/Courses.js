import React from 'react';
import subjects from './db';

function Courses() {
  return (
    <div>
      <h1>Available courses</h1>
      {console.log(subjects)}
      <section className="container">
        {subjects.map((course) => (
          <div className="card" key={course.id}>
            <div className='name'>{course.name}</div>
           
           
            <div className='branches'>{course.details.branches}</div>
            <div className='intro'>{course.details.intro}</div>

          </div>
          
        ))}
      </section>
    </div>
  )
}

export default Courses

// Card should show only name
// the card should route to another page to show ( branch and intro )