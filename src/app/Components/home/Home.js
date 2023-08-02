import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <div style={{backgroundColor:"#F7FAFC"}}>
      <Container>
        <Row className='home-row'>
            <Col xl={3} className="home-col-1">
            <ul>
                <li>AutoMobiles</li>
                <li>CLothes and wear</li>
                <li>Home Interiers</li>
                <li>Computer and tech</li>
                <li>Tools, and equpments</li>
                <li>sports and outdoors</li>
                <li>Machine tools</li>
                <li>animals and pet</li>
                <li>More category</li>
            </ul>
            </Col>
            <Col xl={6} className="home-col-2">
                <div className="home-image">
                  <h6>Lastest trending </h6>
                  <h4>Electronic devices</h4>
                  <button>Learn more</button>
                </div>
            </Col>
            <Col xl={3} className="home-col-3">
             <div className="user">
            <h4> <FontAwesomeIcon icon={faUser} /> Hi,User lets gets <br /> started</h4>
              <div className='join-btn'>
                <button >Join Now</button>
              </div>
              <div className='login-btn'>
                <button >Login</button>
              </div>
             </div>
             <div className="discount">
             <h4>Get Us $10 Off With a new supplier</h4>
             </div>
             <div className="quotes">
             <h4>Send quotes with supplier preferences</h4>
             </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
