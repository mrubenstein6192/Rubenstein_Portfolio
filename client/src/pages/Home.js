import React from 'react';


function Home() {
  return (
    <React.Fragment>
      <div
        className = "jumbotron jumbotron-fluid text-center"
        style = {{
          backgroundImage: 'url()',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px'
        }}>
          <h1 className = "display-3"
          style = {{
            fontWeight: 'bold',
            color: 'black',
          }}>Welcome to my Portfolio!</h1>
          
        </div>

        <div className="container"
        style = {{
          color: "black",
          fontSize: "large"
        }}>
        <div className="row">
          <div className="col-12 col-md-8">
            <h2 className="display-4 my-2">Our Mission</h2>
           
          </div>
          
        <div className = "col-12 col-md-4">
          <div className = "card"
          style = {{
            boxShadow: "2px 6px 10px 2px rgba(0,0,0,0.2)",
            transition: "0.3s"
          }}>
            <div className = "card-header bg-dark text-light text-center">Find Your Next Hikes</div>
            <div className = "card-body">
              Stuff
            </div>
          </div>
        </div>
        </div>
        </div>
    
    </React.Fragment>
  );
}
export default Home;