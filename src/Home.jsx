import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img/bg2.jpg";
import web1 from "../src/img/edulogo.png";
import web2 from "../src/img/cour.png";
import web3 from "../src/img/teacher.png";
import web4 from "../src/img/smily.png";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-items">
          <div className="home-content">
            <h1 className="h1a">Online</h1>
            <h1 className="h1b">Education</h1>
          </div>
          <div className="home-img-con">
            <img src={web} alt="pic" className="home-img" />
          </div>
          <div className="home-btn">
            <button className="button"> <a href="/contact" className="btn-con"> contact us</a></button>
          </div>
        </div>
      </section>
      <section id="middle" className="middle">
        <div class="container">
          <div className="row">
            <div className="col midd_col">
              <img src={web2} className="edulogo" alt="pic" />
              <div className="content">
                <h3>160+</h3>
                <h5>Courses</h5>
              </div>
            </div>
            <div className="col midd_col">
              <img src={web1} className="edulogo" alt="pic" />
              <div className="content">
                <h3>1500+</h3>
                <h5>Students</h5>
              </div>
            </div>
            <div className="col midd_col">
              <img src={web3} className="teachlogo" alt="pic" />
              <div className="content">
                <h3>70+</h3>
                <h5>Teachers</h5>
              </div>
            </div>
            <div className="col midd_col">
              <img src={web4} className="teachlogo" alt="pic" />
              <div className="content">
                <h3>100%</h3>
                <h5>Satisfaction</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;