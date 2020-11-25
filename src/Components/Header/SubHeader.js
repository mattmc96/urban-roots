import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'

class SubHeader extends Component {
  render() {
    return (
      <ReactBootStrap.Navbar bg="muted" expand="lg">
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/shop">Shop</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    )
  }
}

export default SubHeader
