import React from 'react'
import '../App.css'

export default function arc_shape() {
    return (
        <div className='main'>
            <div className="latest-news-heading" >
                Enhance your applications <br /> with integrations
            </div>


            <div className="integrations-section">
                <p className="dashboard-description" style={{ marginTop: "25px", paddingLeft: "50px" }} > Integrate your existing enterprise applications out of <br /> the box. Terzo connects to ERP, P2P, SSO and more. </p>
                <div className="arc-container">
                    <div className="arc-left">
                        <div className="arc-box" style={{}} >
                            <p>Microsoft</p>
                        </div>
                        <div className="arc-box" style={{ marginTop: "50px", marginLeft: "70px" }} >
                            <p>ORACLE</p>
                        </div>
                        <div className="arc-box" style={{ marginTop: "50px", marginLeft: "140px" }} >
                            <p>servicenow</p>
                        </div>
                    </div>
                    <div className="arc-boundary"></div>
                    <div className="arc-right">
                        <div className="arc-box" style={{}} >
                            <p>SAP Ariba</p>
                        </div>
                        <div className="arc-box" style={{ marginTop: "50px", marginLeft: "-70px" }} >
                            <p>Workday</p>
                        </div>
                        <div className="arc-box" style={{ marginTop: "50px", marginLeft: "-140px" }} >
                            <p>coupa</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="arc-middle">
                <div className="plus-circle">
                    <span className="plus-icon">+</span>
                </div>
            </div>

            <div className="logo-container">
                <img
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    alt="Logo"
                    className="logo-image"
                    style={{ marginTop: "-300px", width: "150px", height: "150px" }}
                />
            </div>

            <div className="dashboard-container" style={{ marginTop: "150px" }}>
                <div className="dashboard-section">
                    <div className="dashboard-content">
                        <h2 className="dashboard-heading">Speed up intake and <br /> approval processes.</h2>
                        <p className="dashboard-description">No-code workflow templates make this fast and easy to <br /> deploy. Automate tasks and approvals. Govern cost, risk, and <br /> get visibility into all requests..</p>
                        <a href="#" className="dashboard-learn-more">
                            Learn More
                            <span className="dashboard-arrow">&rarr;</span>
                        </a>
                    </div>
                    <div className="dashboard-image">
                        <img src="dashboard1.png" alt="Image 1" />
                    </div>
                </div>
            </div>

            <div className="dashboard-container">
                <div className="dashboard-section">
                    <div className="dashboard-image">
                        <img src="dashboard2.png" alt="Image 2" />
                    </div>
                    <div className="dashboard-content">
                        <h2 className="dashboard-heading">Maximize your  <br /> strategic relationships</h2>
                        <p className="dashboard-description">Robust analytics and reporting provide critical data to <br /> strengthen negotiations and optimize relationships with <br /> customers, suppliers, and partners.</p>
                        <a href="#" className="dashboard-learn-more">
                            Learn More
                            <span className="dashboard-arrow">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}