import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Recommented = () => {
  return (
    <div style={{ backgroundColor: '#F7FAFC', paddingTop: '30px' }}>
      <Container>
        <Row>
             <Col xs={2} >
            <Card style={{ width: '15rem', marginTop: '15px', }}>
              <Card.Img variant="top" src="Bitmap.png" style={{ padding: '25px', height: '15rem', width: '100%' }} />
              <Card.Body>
                <Card.Title>$10.30</Card.Title>
                <Card.Text>
                  T-shirt with multiple colours for men
                </Card.Text>
             
              </Card.Body>
            </Card>
          </Col>
                 <Col xs={2} style={{marginLeft: '45px'}}>
            <Card style={{ width: '15rem', marginTop: '15px', }}>
              <Card.Img variant="top" src="jacket.png" style={{ padding: '25px', height: '15rem', width: '100%' }} />
              <Card.Body>
                <Card.Title>$25.99</Card.Title>
                <Card.Text>
                  Stylish leather jacket for men
                </Card.Text>
        
              </Card.Body>
            </Card>
          </Col>
                 <Col xs={2} style={{marginLeft: '45px'}}>
            <Card style={{ width: '15rem', marginTop: '15px', }}>
              <Card.Img variant="top" src="blue.png" style={{ padding: '25px', height: '15rem', width: '100%' }} />
              <Card.Body>
                <Card.Title>$19.99</Card.Title>
                <Card.Text>
                  Casual blue jeans for men
                </Card.Text>
             
              </Card.Body>
            </Card>
          </Col>
                <Col xs={2} style={{marginLeft: '45px'}}>
            <Card style={{ width: '15rem', marginTop: '15px',  }}>
              <Card.Img variant="top" src="wallet.png" style={{ padding: '25px', height: '15rem', width: '100%' }} />
              <Card.Body>
                <Card.Title>$35.50</Card.Title>
                <Card.Text>
                  Genuine leather wallet
                </Card.Text>
              
              </Card.Body>
            </Card>
          </Col>
            <Col xs={2} style={{marginLeft: '45px'}}>
            <Card style={{ width: '15rem', marginTop: '15px',}}>
              <Card.Img variant="top" src="bag.png" style={{ padding: '25px', height: '15rem', width: '100%' }} />
              <Card.Body>
                <Card.Title>$29.99</Card.Title>
                <Card.Text>
                  Stylish travel backpack
                </Card.Text>
              
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recommented;
