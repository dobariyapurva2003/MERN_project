import React from "react";
import web5 from "../src/img/contact.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
         <>
            <section className="abt">
                <div className="abt-items">
                    <div className="abt-content">
                        <h3 className="h3a">Why choose us?</h3>
                        <h5 className="h5b"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,</h5>
                        <h5 className="h5a"> neque quis accusamus aut nemo praesentium</h5>
                    </div>
                    <div className="abt-img-con">
                        <img src={web5} alt="pic" className="abt-img" />
                    </div>
                    <div className="abt-btn">
                        <button className="abt-button"> <a href="/contact" className="abt-btn-con"> contact us</a></button>
                    </div>
                </div>
            </section>
         </>
    )
};

export default About;