import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/home" component ={Home} />
          <Route path="/contact" component ={Contact} />
          <Route path="/portfolio" component ={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
