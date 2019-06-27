import React, { Component } from 'react';
import cardData from "../projectPics.json";

import { Link } from 'react-router-dom';


import Col from "../components/Col";
import Row from "../components/Row";

class Projects extends Component {
  state = {
    cardData: [...cardData]
  }
  render () {
  return (
    <React.Fragment>
       <div className = "jumbotron jumbotron-fluid text-center"
         style = {{
          backgroundImage: 'url()',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px'
        }}><h1
        style = {{
          color: "white",
          fontWeight: "bold"
        }}>My Projects</h1>
        </div>

        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            {/* print out cards here */}
            {this.state.cardData.map(card => {
              return (
                <div className="col-12 col-sm-3 col-md-2" key={card.id}>
                  <img
                    src={card.image}
                    alt={card.name}
                    href = {card.link}
                    className="img-fluid img-thumbnail rounded"
                    style = {{
                      height: "100px",
                      width: "100%"
                    }}
                  />
                  {card.name}
                </div>
              );
            })}
          </div>
        </div>
    </React.Fragment>
  )
}
}

export default Projects;