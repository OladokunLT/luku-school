import React from "react";
import subjects from "./db";
import { Link, useParams } from "react-router-dom";

function Coursedetail() {
  const { id } = useParams();
  return (
    <div className="coursedetail" style={{padding: "20px"}}>
        <button style={{backgroundColor: "black"}}>
           <Link to="/dashboard/courses"> -- Back to All Courses</Link>
        </button>
      <h2>Course Detail</h2>
            {console.log(subjects)};
      <div>
        {subjects
          .filter((detail) => detail.id == id)
          .map((card, index) => (
            <div key={index}>
              <h1>{card.name}</h1>
              
              <div className="intro">
                <h2>Introduction to {card.name}</h2>
                <p style={{textAlign:"justify" }}>{card.details.intro}</p>
              </div>

              <div className="branch">
                <h3>Branches of {card.name}</h3>
                {card.details.branches.map((branch, index) => (
                  <ul key={index} >
                    <li style={{listStyleType: "none"}}>{branch}</li>
                  </ul>
                ))}
              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default Coursedetail;
