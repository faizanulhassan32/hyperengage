import React from 'react'
import '../App.css'

export default function news() {
    return (
        <div className='main'>
            <h1 className="latest-news-heading">
                Latest News About Terzo
            </h1>
            <div className="latest-news">

                <div className="column" style={{ backgroundColor: "#1c1620", background: 'linear-gradient(to bottom, #1c1620, #000000)' }}>
                    <div className="news-card">
                        <span className="dot" style={{ backgroundColor: "#cb6afb" }}></span>
                        <h2 className="news-heading">Terzo Announces $16M Series A Round</h2>
                        <p className="news-paragraph">Today is a big day for Terzo. We've raised $16M in Series A funding led by Align Ventures with participation from TYH Ventures, Engage Ventures, Human Capital and other institutional investors.</p>
                        <hr className="news-line" />

                    </div>
                </div>

                <div className="column" style={{ backgroundColor: "#080c1b", background: 'linear-gradient(to bottom, #080c1b, #000000)' }}>
                    <div className="news-card">
                        <span className="dot" style={{ backgroundColor: "#4d66e5" }}></span>
                        <h2 className="news-heading">Terzo Named to 2022 ProcureTech 100 List</h2>
                        <p className="news-paragraph">Discover the 2022 ProcureTech100, the most innovative, progressive and customer centric digital procurement solutions on the planet.</p>
                        <hr className="news-line" />
                    </div>
                </div>

                <div className="column" style={{ backgroundColor: "#19170d", background: 'linear-gradient(to bottom, #19170d, #000000)' }}>
                    <div className="news-card">
                        <span className="dot" style={{ backgroundColor: "#f7e16e" }}></span>
                        <h2 className="news-heading">Terzo Named a 50 Best Companies to Watch in 2022</h2>
                        <p className="news-paragraph">Our innovative, AI-powered contract intelligence software earned us a coveted spot in this year's round-up, and we're honored to have been selected.</p>
                        <hr className="news-line" />
                    </div>
                </div>

                <div className="column" style={{ backgroundColor: "#120d1d", background: 'linear-gradient(to bottom, #120d1d, #000000)' }}>
                    <div className="news-card">
                        <span className="dot" style={{ backgroundColor: "#9966ff" }}></span>
                        <h2 className="news-heading">Terzo Announces Partnership with Prevalent</h2>
                        <p className="news-paragraph">Please join us in celebrating Terzo's newest strategic partnership with Prevalent, a leader in third-party risk management (TPRM).</p>
                        <hr className="news-line" />
                    </div>
                </div>

            </div>

        </div>
    )
}