import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

// class AppNavbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false
//          }
//     }
//     render() {
//         return (  );
//     }
// }

// toggle = ()=>{

// }
// export default AppNavbar;

class AppNavbar extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="md-5">
          <Container>
            <NavbarBrand href="/">Bug Tracker</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
