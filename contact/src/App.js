import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <div>     
          <Header />
          <Navbar />        
          <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/contact" component ={Contact} />
          <Route path="/portfolio" component ={Portfolio} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
