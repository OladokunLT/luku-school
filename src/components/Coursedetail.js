import React from 'react'
import subjects from "./db"
import { Link } from "react-router-dom"
import { usePararams} from "react-router-dom"

function Coursedetail() {
    const {id} = usePararams();
  return (
    <div className='coursedetail'>
        <h2>Coursedetail</h2>
        {console.log (subjects)};
        <div>
            name: {subjects.filter((detail) => 
            detail.id === id).map((card, index)=>(
                <div key={index}>
                    <h1>{card.name}</h1>
                    <div className='intro'>
                        <h2>Introduction to {card.name}</h2>
                        <p>{card.details.intro}</p>
                    </div>
                    <div className='branch'>
                        <h3>Branches of {card.name}</h3>
                        {card.details.branches.map((branch, index) => (
                        <ul key={index}>
                            <li>{branch}</li>
                        </ul>
                        ))}
                        
                    </div>
                </div>
            ))}    
        </div>
    </div>

  )
}

export default Coursedetail