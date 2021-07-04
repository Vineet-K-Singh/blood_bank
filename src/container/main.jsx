import React from 'react'
import Header from '../component/header'
import {
    Know1,Know2,Know3,Help1,Help2,Help3
}from "../constant/image"

function Main() {
    return (
        <React.Fragment>
            <Header/>
            <section className="head">
                <div className="box">
                    <ul>
                        <li><h1>Severe Blood Shortage</h1></li>
                        <li><h3>Please Donate and Request Blood here</h3></li>
                        <li>
                            <table>
                                <td><a href="./donate.html"><button>Donate</button></a></td>
                                <td><a href="./request.html"><button>Request</button></a></td>
                            </table>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="Help">
                <div className="see">
                    <div className="sub-box1">
                        <img src={Know1} alt="image1"/>
                        <p>Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location.</p>
                        <a href="/"><button>Learn More</button></a>
                    </div>
                    <div className="sub-box1">
                        <img src={Know2} alt="image1"/>
                        <p>Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more.</p>
                        <a href="/"><button>Learn More</button></a>
                    </div>
                    <div className="sub-box1">
                        <img src={Know3} alt="image1"/>
                        <p>Blood donations can help save people's lives. Learn how blood donations help, what to expect, and how to get ready for your first blood donation.</p>
                        <a href="/"><button>Learn More</button></a>
                    </div>
                </div>
            </section>

            <section className="help">
                    <h1>More ways you can help</h1>
                    <div className="cont">
                        <div className="sub">
                            <img src={Help1} alt="help1"/>
                            <h3>Host a blood drive</h3>
                            <a href="./host.html">Apply to become a host</a>
                        </div>
                        <div className="sub">
                            <img src={Help2} alt="help2"/>
                            <h3>Become a volunteer</h3>
                            <a href="./volunteer.html">Learn More</a>
                        </div>
                        <div className="sub">
                            <img src={Help3} alt="help3"/>
                            <h3>Make a financial donation</h3>
                            <a href="./fin.html">Donate Now</a>
                        </div>
                    </div>
            </section>
            <secton className="doc">
                <div className="doc1">
                    <h1>Volunteers Needed to</h1>
                    <h1>Help Blood Donations</h1>
                    <h4>Volunteer opportunities include supporting</h4>
                    <h4>blood donations and delivering much-</h4>
                    <h4>needed services to your community.</h4>
                    <a href="./volunteer.html"><button>Learn more</button></a>
                </div>
            </secton>
            <footer>
                <div className="foot">
                    <h4>Copyright &copy;2021 Indian Blood Bank</h4>
                    <a href="/public" className="social"><span className="fab fa-facebook fa-2x"></span></a>
                    <a href="/node_modules" className="social"><span className="fab fa-twitter fa-2x"></span></a>
                    <a href="/" className="social"><span className="fab fa-instagram fa-2x"></span></a>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Main
