import React from "react";
import "./MiniNavbar.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUser, faEnvelope, faShoppingCart, faClipboardList ,faHamburger } from "@fortawesome/free-solid-svg-icons";
const MiniNavbar = () => {
  return (
    <div className="header">
      <Container>
        <div className="topnav">
          <div className="logo">
            <img src="logo-colored.png" alt="" />
          </div>
          <div className="searchbar">
            <input type="text" placeholder="seacrh" />{" "}
            <span>
              All Category <FontAwesomeIcon icon={faChevronDown} />
            </span> <span className="search">Search</span>
          </div>
          <div className="menus-icon">
          <ul className="topicons">
            <li>
              <FontAwesomeIcon icon={faUser} />
                 <p>User</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
             <p>Message</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faClipboardList} />
          <p>Orders</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} />
              <p>My Cart</p>
            </li>
          </ul>
          </div>
        </div>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col xl={6}>
          <div className="second-nav">
          <ul>
           <span><FontAwesomeIcon icon={faHamburger} className="hamburber"/></span> <li>All Category</li>
            <li>Hot Offers</li>
            <li>GIft boxes</li>
            <li>Projects </li>
            <li>Menu items</li>
            <li>Help  <FontAwesomeIcon icon={faChevronDown} /> </li>
          </ul>
        </div>
          </Col>
          <Col xl={2}>
        
          </Col>
          <Col xl={4}>
          <div className="second-nav-right">
          <li>English USD <FontAwesomeIcon icon={faChevronDown} /> </li>
          <li>Ship to 🇩🇪 <FontAwesomeIcon icon={faChevronDown} /></li>
          </div>
          </Col>
        </Row>
      </Container>
      <hr className="nav-s-right"/>
    </div>
  );
};

export default MiniNavbar;
