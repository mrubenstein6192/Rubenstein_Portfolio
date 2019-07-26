import React, { Component } from 'react';
import cardData from "../projectPics.json";

// import { Link } from 'react-router-dom';


// import Col from "../components/Col";
// import Row from "../components/Row";

class Projects extends Component {
  state = {
    cardData: [...cardData]
  }
  render () {
  return (
    <React.Fragment>
      
       <div className = "jumbotron jumbotron-fluid text-center"
         style = {{
          backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/back_pic/00/12/49/46563df08860442.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px'
        }}><h1
        style = {{
          color: "maroon",
          fontWeight: "bold",
          fontSize: "50px"
        }}>My Projects</h1>
        </div>

        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            {/* print out cards here */}
            {this.state.cardData.map(card => {
              return (
                <div className="col-6 col-sm-4 col-md-3" key={card.id}>
                   <h5 
                   style = {{
                     textAlign: "center"
                   }}>{card.name}</h5>
                   <a href = {card.link}
                   target = "_blank"> 
                  <img
                    src={card.image}
                    alt={card.name}
                    className="img-fluid img-thumbnail rounded mb-4"
                    style = {{
                      height: "150px",
                      width: "100%"
                    }}
                  />
              </a>
                 
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