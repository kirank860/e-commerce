import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Offer.css"
const Offer = () => {
  return (
    <div style={{backgroundColor:"#F7FAFC"}}>
      <Container>
        <Row>
            <div className="offers">
                <div className="deals">
                    <p className='offer'>Deals and offers</p>
                    <p>Hygeines equipments</p>
                    <div className="time" style={{display:"flex"}}>
                      <h5>04</h5>
                      <h5>12</h5>
                      <h5>24</h5>
                      <h5>09</h5>
                    </div>
                </div>
                <div className="list-1">
                  <div className="list-img">
                  <img src="watch.png" alt="" />
                  </div>
                  <h5>smart watchs</h5>
                  <p>-25%</p>
                </div>
                <div className="list-1">
                  <div className="list-img">
                  <img src="camera.png" alt="" />
                  </div>
                  <h5>camera</h5>
                  <p>-25%</p>
                </div>
                <div className="list-1">
                  <div className="list-img">
                  <img src="headphones.png" alt="" />
                  </div>
                  <h5>headphones</h5>
                  <p>-25%</p>
                </div>
                <div className="list-1">
                  <div className="list-img">
                  <img src="phone.png" alt="phone.png" />
                  </div>
                  <h5>mobile phones</h5>
                  <p>-25%</p>
                </div>
                <div className="list-1">
                  <div className="list-img">
                  <img src="laptop.png" alt="" />
                  </div>
                  <h5>Laptops</h5>
                  <p>-25%</p>
                </div>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Offer
