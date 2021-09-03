import React, {Component} from "react";
import Nav from 'react-bootstrap/Nav'

class Navbar extends Component {
    state = {
        isOpen: false,
    };

    render() {
        return(
            <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="portfolio">Portfolio</Nav.Link>
            </Nav.Item>
          </Nav>
        );
    };
}

export default Navbar;