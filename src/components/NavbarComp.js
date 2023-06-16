import React from 'react'
import '../App.css'

export default function Navbar() {
  return (
    <div className='main'>
      <div className="navlist">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="Company Logo here"
            style={{ width: '50px', height: '50px' }}
          />
          <span className="companyname">TERZO</span>
        </div>

        <span className="navlist_items">Why terzo</span>
        <span className="navlist_items">Core Platform &#x25BC;</span>
        <span className="navlist_items">Company &#x25BC;</span>
        <span className="navlist_items">Resources &#x25BC;</span>

        <div className="contact-and-button">
          <span className="contact-sales">Contact Sales</span>
          <button className="bookdemo-button">Book a Demo</button>
        </div>
      </div>
    </div>
  )
}
