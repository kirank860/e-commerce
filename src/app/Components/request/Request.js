import React from 'react'
import { Container } from 'react-bootstrap'
import "./Request.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Add the icon to the library
library.add(faChevronDown);

const Request = () => {
  return (
    <div style={{ backgroundColor: '#F7FAFC', paddingTop: '30px' }}>
      <Container className='request'>
        <div className="req-title">
            <h3>An easy way to send request to all the suppliers</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, totam!</p>
        </div>
       <div className="request-input">
       <div className="form">
      <h5>Send quotes to suppliers</h5>
      <input type="text" placeholder="What item do you need?" />
    <div>
    <textarea name=""   placeholder="Type more details"  id="" cols="30" rows="2"></textarea>
    </div>
    <div className="quntity" style={{display:"flex"}}>
      <div>
      <input type="text" placeholder="quantity" />
      </div>
    <div>
  <input type="number" placeholder='pcs' min="1" max="10" />
</div>
    </div>
     <div>
     <button type="button">Send enquery</button>
     </div>
    </div>

       </div>
      </Container>
    </div>
  )
}

export default Request
