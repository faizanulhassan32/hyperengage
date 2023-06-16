import React from 'react'
import '../App.css'

export default function Stats() {
    return (
        <div className='main'>
            <div className="statistics-grid">

                <div className="statistics-item">
                    <p className="statistics-figure"> 3x </p>
                    <br />
                    <p className="statistics-heading"> Faster Cycles </p>
                    <hr className="statistics-line" />
                    <p className="statistics-paragraph"> Stop wasting time with manual contract review and analysis. Access critical data across all contracts in just seconds.  </p>
                </div>

                <div className="statistics-item">
                    <p className="statistics-figure"> 10%+ </p>
                    <br />
                    <p className="statistics-heading"> Cost Savings </p>
                    <hr className="statistics-line" />
                    <p className="statistics-paragraph"> Insights into both contract and spend data together enables smart, quick decisions for cost consolidation and rationalization. </p>
                </div>

                <div className="statistics-item">
                    <p className="statistics-figure">30</p>
                    <br />
                    <p className="statistics-heading">Day Implementation</p>
                    <hr className="statistics-line" />
                    <p className="statistics-paragraph"> Get up and running quickly with no- code workflows plus out-of-the-box integrations. </p>
                </div>

            </div>

        </div>
    )
}