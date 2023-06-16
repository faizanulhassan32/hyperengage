import React from 'react'
import '../App.css'

export default function SecondLast() {
    return (
        <div className='main'>
            <div className="logo-container">
                <img
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    alt="Logo"
                    className="logo-image"
                />
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="speed-to-value">
                <div className="line">Speed to value. Get up and running</div>
                <div className="line">in weeks, not months or years.</div>
            </div>

            <br /><br />
            <button className="bookdemo-button1" style={{ marginLeft: "600px", color: "black", fontWeight: "bold" , marginBottom: "200px" }}>Book a Demo</button>
        </div>
    )
}