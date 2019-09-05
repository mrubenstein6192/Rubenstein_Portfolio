import React, { Component } from 'react';
import picData from '../languagePics.json'
import "./About.css"

class Home extends Component {
  state = {
    picData: [...picData]
  }
  render () {
    return(
    <React.Fragment>
      <div className="container effect">
      <img src="https://wallpaperbro.com/img/462470.jpg" style = {{
        width: "100%"
    }}/>
      <div className = "content">
          <div className = "row">
          <div className = "col-lg-2 mx-auto bg-text">
            <img src = 'images/profilePic.jpg' alt = "Profile Pic"
             
             style = {{
              height: "75%",
              borderRadius: "50%"
            }}
            />
          </div>
          <div className = "col-lg-8 bg-text">
            <h1 className = "display-3">
                  Michael Rubenstein</h1>
                <h2 className = "display-4">
                  Full-Stack Web Developer</h2>
                  <h3>
                    Rutgers Coding BootCamp
                  </h3>
          </div>
          <div className="container">
          <div className="row justify-content-center mt-1">
            {/* print out cards here */}
            {this.state.picData.map(card => {
              return (
                <div className="col-lg-1 col-sm-4 col-md-3" key={card.id}>
                  
                  <img
                    src={card.image}
                    alt={card.name}
                    className="img-fluid img-thumbnail rounded mb-4"
                    style = {{
                      height: "75px",
                      width: "100%"
                    }}
                  />
             
            </div>
              );
            })}
          </div>
        </div>
          </div>
         
        </div>
        </div>
          
         
        
    
    </React.Fragment>
  );
}
}
export default Home;