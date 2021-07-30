import React, { Component } from "react";
import { Fragment } from "react";
import { FaBeer } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "../assets/css/custom.css";
import { SidebarItem } from "../component/common/sidebar";
import { IconContext } from "react-icons";
import { Redirect } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  Container,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "./Modal/LoginModal";
export default class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isOpen: false,
      sidebar: false,
      isRedirect:false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
   
  }
  handleSubmitEvent = (values, action) => {
    console.log("form values", values);
    if(values.username=='anupom@gmail.com' && values.password=='1234'){
      console.log("/no")
      this.setState({
        isRedirect:true,
      });
      }
     
  };
  
  showSidebar() {
    this.setState({
      sidebar: true,
    });
    console.log(this.state.sidebar);
  }
  closeSidebar() {
    this.setState({
      sidebar: false,
    });
  }
  closeModal() {
    this.setState({
      isOpen: false,
      isLoading: false,
    });
  }
  openModal() {
    this.setState({
      isLoading: true,
      isOpen: true,
    });
  }

  render() {
    console.log("yess", SidebarItem);
    if(this.state.isRedirect){
      return <Redirect to="/User/account" />
    }
    return (
      <Fragment>
        <Navbar
          collapseOnSelect
          expand="md"
          bg="white"
          variant="black"
          height="300px"
          className="w-200 p-3"
          // fixed="top"
        >
          <Container>
            <Navbar.Brand>
              <img
                alt="Cash4You"
                // src={require("../assets/Image/Cash4You.png")}
                src="https://cash4you.ca/wp-content/themes/cash4you2017/images/logo.png"
                width="120"
                height="40"
                className="d-inline-block align-top"
                // className="ml-auto"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
              <Button
                variant="outline-warning"
                onClick={() => this.openModal()}
              >
                Login
              </Button>{" "}
              <FaIcons.FaBars onClick={this.showSidebar}></FaIcons.FaBars>
              {/* 
              <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={this.showSidebar} />
          </Link>
        </div> */}
              <nav
                className={this.state.sidebar ? "nav-menu active" : "nav-menu"}
              >
                {/* <div className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </div> */}
                <ul className="nav-menu-items" onClick={this.closeSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {SidebarItem.map((item, index) => {
                    return (
                      <div class="border-line">
                        <li key={index} className={item.cName}>
                          <Link>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                          <div>
                            {item.subMenu.map((subitem, index) => {
                              return (
                                <li key={index} className={subitem.cName}>
                                  <a href={subitem.path}>
                                    {subitem.icon}
                                   
                                    <span>{subitem.title}</span>
                                  </a>
                                </li>
                              );
                            })}
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </nav>
              {/* </IconContext.Provider> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {this.state.isLoading && (
          <LoginModal
            click={this.state.isLoading}
            closeClick={this.closeModal}
            handleSubmitEvent={this.handleSubmitEvent}
          />
        )}
      </Fragment>
    );
  }
}
