import React, { Component } from 'react';

import { Link } from 'react-router-dom';


import Col from "../components/Col";
import Row from "../components/Row";

class Contacts extends Component {
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
        }}>Contact Me</h1>
        </div>
    </React.Fragment>
  )
}
}

export default Contacts;