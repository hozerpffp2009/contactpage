import React, {Component} from "react";

class Navbar extends Component {
    state = {
        isOpen: false,
    };

    render() {
        return(
          <nav>
            <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="/">Home</a>
    <a href="contact">Contact</a>
    <a href="portfolio">Portfolio</a>
  </div>
</div>
            {/* <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
               <Nav.Link href="/">Home</Nav.Link>
           </Nav.Item>
             <Nav.Item>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link href="portfolio">Portfolio</Nav.Link>
            </Nav.Item>
           </Nav> */}
          </nav>
     
        );
    };
}

export default Navbar;