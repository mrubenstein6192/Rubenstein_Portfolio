import React, { Component } from 'react';
import "./About.css"
// import { Link } from 'react-router-dom';


// import Col from "../components/Col";
// import Row from "../components/Row";

class AboutMe extends Component {
  render () {
  return (
    <React.Fragment>
      <div className = "container effect">
      <img src="https://c4.wallpaperflare.com/wallpaper/258/121/77/the-sky-clouds-mountains-nature-wallpaper-preview.jpg" style = {{
        width: "100%"
    }}/>
    <div className = "content">
      <div className = "row my-3">
        <div className = "col-8 mx-auto"
        style = {{
         fontSize: "25px",
         textAlign: "left"
        }}>
         <p>Hello, my name is Michael Rubenstein.  After teaching for four years, I decided it was time to make a change and discovered the world of coding.</p>
         <p>Upon completion of the Rutgers Coding BootCamp, I joined their instructional team as a Teacher Assistant, combining my two skillsets.</p>
         <p>A few of my hobbies include hiking, sports, science fiction, and traveling.</p> 
         <p>Please reach out to me for more information!</p> 
        </div>
      </div>
        <div className = "row my-3">
          <div className = "col-6 mx-auto" 
          style = {{
            textAlign: "center"
          }}>
            <a href="https://github.com/mrubenstein6192"
          data-size="large"
          target = "_blank"
          aria-label="@mrubenstein6192 GitHub"
            >
            <i class="fab mx-3 fa-github fa-5x"></i>
            </a>
       
          <a href="https://www.linkedin.com/in/michael-rubenstein-b6544b181/"
            target="_blank">
            <i class="fab fa-linkedin mx-3 fa-5x"></i>
          </a>
        
        </div>
      </div>
      <div className = "row my-3">
        <div className = "col-12 mx-auto"
         style = {{
          textAlign: "center"
        }}>
          Email: mrubenstein6192@gmail.com  |  Phone: (732) 882-9239
        </div>
      </div>

     

       <div className = "row"
         style = {{
           fontSize: "30px"
         }}>
         <div className = "col-5 mx-auto"
         style = {{
           textAlign: "center"
         }}>  
         <u>Educational/Professional Experience</u>
         <ul style = {{
           fontSize: "20px",
           textAlign: "start",
           lineHeight: "2.2"
         }}>
           <li>
             TCNJ Class of 2014 - BA in Math and Secondary Ed
           </li>
           <li>
             Math Teacher: East Brunswick High School (2015-2019)
           </li>
           <li>
             Rutgers Coding BootCamp (2019)
           </li>
           <li>
             Trilogy Education Services: Teacher Assistant at Rutgers Coding BootCamp (2019 - Present)
           </li>
         </ul>
         </div>

         <div className = "col-6 mx-auto"
            style = {{
                textAlign: "center"
              }}>
                <u>Miscellaneous Leadership Roles</u>
          <ul style = {{
            fontSize: "20px",
            textAlign: "start",
            lineHeight: "1.4"
          }}>
            <li>Adviser of the EBHS Math Team and Jewish Student Union (2016-2019)</li>
            <li>Adviser of the Sources of Strength program</li>
            <li>Coach of the EBHS PowderPuff team (2018 and 2019)</li>
            <li>Captain of a Co-Ed Flag Football Team</li>
            <li>Commissioner of a Softball League</li>
          </ul>
        </div>
      </div>
      </div>
      </div>

    </React.Fragment>
  )
}
}

export default AboutMe;