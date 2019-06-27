import React, { Component } from 'react';

import { Link } from 'react-router-dom';


import Col from "../components/Col";
import Row from "../components/Row";

class AboutMe extends Component {
  render () {
  return (
    <React.Fragment>
       <div className = "jumbotron jumbotron-fluid text-center"
         style = {{
          backgroundImage: 'url()',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}><h1
        style = {{
          color: "white",
          fontWeight: "bold"
        }}>About Me</h1>
        </div>
    </React.Fragment>
  )
}
}

export default AboutMe;