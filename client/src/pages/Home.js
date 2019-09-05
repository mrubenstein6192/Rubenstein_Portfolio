import React, { Component } from 'react';
import picData from '../languagePics.json'

class Home extends Component {
  state = {
    picData: [...picData]
  }
  render () {
    return(
    <React.Fragment>
      <div className = "jumbotron jumbotron-fluid text-center"
        style = {{
          // backgroundImage: 'url()',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          height: '300px'
         
        }}>
          <div className = "row">
          <div className = "col-lg-3 mx-auto">
            <img src = 'images/profilePic.jpg' alt = "Profile Pic"
             
             style = {{
              height: "50%",
              borderRadius: "50%"
            }}
            />
          </div>
          <div className = "col-lg-9">
            <h1 className = "display-3"
              style = {{
                fontWeight: 'bold',
                color: 'black'
                }}>
                  Michael Rubenstein</h1>
                <h2 className = "display-4"
                    style = {{
                    color: "darkGrey"
                    }}>
                  Full-Stack Web Developer</h2>
          </div>
          
          
        </div>
        </div>
          
          <div className="container">
          <div className="row justify-content-center mt-1">
            {/* print out cards here */}
            {this.state.picData.map(card => {
              return (
                <div className="col-lg-2 col-sm-4 col-md-3" key={card.id}>
                  
                  <img
                    src={card.image}
                    alt={card.name}
                    className="img-fluid img-thumbnail rounded mb-4"
                    style = {{
                      height: "125px",
                      width: "75%"
                    }}
                  />
             
            </div>
              );
            })}
          </div>
        </div>
        
    
    </React.Fragment>
  );
}
}
export default Home;