import React from 'react'
import '../App.css'

export default function intro() {
  return (
    <div className='main'>
      <div className="introdiv">
        <span className="unlock-financial-text">
          <br />
          <br />
          Unlock financial <br />
          insights hidden <br />
          in your contracts
        </span>
        <p className="unlock-financial-paragraph">
          Discover data across your contract ecosystem to drive savings <br />
          and reduce risk through Terzo AI
        </p>
        <br />
        <br />
        <button className="bookdemo-button1">Book a Demo</button>
      </div>


      {/* introduction to the right */}
      <div className="introdiv1">
        <div className="button-row" style={{ marginLeft: "37px" }}>
          <button className="bookdemo-button2">Acme Corp</button>
          <button className="bookdemo-button1">Contract Start Date</button>
          <button className="bookdemo-button2">7/30/2022</button>
        </div>

        <div className="button-row" style={{ marginLeft: "5px" }}>
          <button className="bookdemo-button1">Contract End Date:</button>
          <button className="bookdemo-button2">7/29/2023</button>
          <button className="bookdemo-button1">Subscription Terms</button>
        </div>

        <div className="button-row">
          <button className="bookdemo-button1">Billing Frequency:</button>
          <button className="bookdemo-button2">Anually</button>
          <button className="bookdemo-button1">Billing Terms:</button>
          <button className="bookdemo-button2">Net 45</button>
        </div>

        <div className="button-row" style={{ marginLeft: "120px" }}>
          <button className="bookdemo-button1">Contract Amount</button>
          <button className="bookdemo-button2">$255,000</button>
        </div>
      </div>

    </div>
  )
}