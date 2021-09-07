import React, {Component} from "react";
import joseph from "../images/joseph.jpg"

class Home extends Component {

render() {
    return (
      <body>
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
         <img src={joseph} id="josephimg" alt="joseph img"/>
          </div>
          <div class="flip-card-back">
            <h1>Joseph Arocha</h1>
            <p>Full Stack Web Developer and Licensed Plumber</p>
          </div>
        </div>
      </div>
    </body>
     );
    }
}
export default Home;