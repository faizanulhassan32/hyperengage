import React from 'react'
import '../App.css'

export default function Dashboard() {
    return (
        <div className='main'>
            <div className="dashboard-container">
                <div className="dashboard-section">
                    <div className="dashboard-content">
                        <h2 className="dashboard-heading">Instant access to data <br /> to drive smarter <br /> financial decisions</h2>
                        <p className="dashboard-description">Find the financial insights you need to make smarter <br /> decisions. Understand what products and services you’re <br /> paying for to optimize your spend and reduce duplication.</p>
                        <a href="https://terzo.ai/" className="dashboard-learn-more">
                            Learn More
                            <span className="dashboard-arrow">&rarr;</span>
                        </a>
                    </div>
                    <div className="dashboard-image">
                        <img src="dashboard1.png" alt="Details here" />
                    </div>
                </div>
            </div>

            <div className="dashboard-container">
                <div className="dashboard-section">
                    <div className="dashboard-image">
                        <img src="dashboard2.png" alt="Details here" />
                    </div>
                    <div className="dashboard-content">
                        <h2 className="dashboard-heading">Forecast accurately to <br /> meet budget goals</h2>
                        <p className="dashboard-description">Link actual contract commitments to your budgeting <br /> process. Pipeline and forecast views provide you the ability <br /> to see future commitments to ensure you never miss a <br /> renewal and maximize the value of each contract.</p>
                        <a href="https://terzo.ai/" className="dashboard-learn-more">
                            Learn More
                            <span className="dashboard-arrow">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}