import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../App.css'

export default function footer() {
    return (
        <div className='main'>
            <div className="footer">
                <div className="column">
                
                    <div className="logo1">
                        <img src="logo.png" alt="Logo" />
                        <span>TERZO</span>
                    </div>

                    <div className="badges">
                        <img src="gdpr.png" alt="Badge 1" />
                        <img src="soctype2.png" alt="Badge 2" />
                        <img src="iso.png" alt="Badge 3" />
                    </div>

                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <p className="copyright" >© 2023 Terzo Technologies, Inc. All Rights Reserved.</p>
                
                </div>


                <div className="column">
                    <h3 className="column-heading">Platform</h3>
                    <ul className="column-list">
                        <li>Contract Intelligence</li>
                        <li>Contract Analytics</li>
                        <li>Supplier Relationship Management</li>
                        <li>Intelligent Enterprise Search</li>
                        <li>Workflows</li>
                    </ul>
                    <p className="column-text" style={{ fontWeight: "bolder", fontSize: "22px" }}>social@terzocloud.com</p>
                </div>

                <div className="column">
                    <h3 className="column-heading">Company</h3>
                    <ul className="column-list">
                        <li>Why Terzo</li>
                        <li>About Us</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div className="column">
                    <h3 className="column-heading">Resources</h3>
                    <ul className="column-list">
                        <li>Blog</li>
                        <li>Content Library</li>
                    </ul>
                    <p className="column-text" style={{ marginTop: "150px" }}>Privacy Policy</p>
                </div>

            </div>

        </div>
    )
}