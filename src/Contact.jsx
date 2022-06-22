import React from "react";
import Navbar from "./Navbar";
import web22 from "../src/img/contactus.jpg";
import { useState } from "react";
import  { Redirect } from 'react-router-dom';

const Contact = () => {

    const [user, setuser] = useState({
        fname: "", lname: "", email: "", phone: "", course: "", gender: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value });
    }
    const postdata = async (ev) => {
        ev.preventDefault();
        const { fname , lname, email, phone, course, gender} = user;
        const response = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                fname , lname , email, phone, course, gender
            })
        });
        const data = await response.json();
        if(data.status === 422 || !data){
            window.alert("Invalid data");
            console.log("Invalid data");
        } else{
            window.alert("data stored successfully");
            console.log("data stored successfully");
            window.location="/";
        }
    }



    return (
        <>
            <section className="con">
                <div className="con-container">
                    <div className="con-title">
                        <h5 className="con-h5">Contact </h5>
                        <h5 className="con-h5 seco-part-title"> us </h5>
                    </div>
                    <div className="con-pic">
                        <img src={web22} alt="pic" className="con-img" />
                    </div>
                    <div className="con-form">
                        <form  method="POST">
                            <input type="text" name="fname" id="fname" className="fname" value={user.fname} onChange={handleInputs} placeholder="first name" />
                            <input type="text" name="lname" id="lname" value={user.lname} onChange={handleInputs} className="lname" placeholder="last name" />
                            <input type="email" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="enter your email" className="con-email" />
                            <input type="number" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="enter your number" className="con-phone" />
                            <div className="cr-select">
                                <span className="sel-cor">Select course : </span>
                                <select name="course" className="crs-box" id="courses" value={user.course} onChange={handleInputs} required>
                                    <option value="" disabled selected>Select the course</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Science and Biology">Science and Biology</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Teaching">Teaching</option>
                                    <option value="Social Studies">Social Studies</option>
                                    <option value="Data Analysis">Data Analysis</option>
                                    <option value="Artificial Inteligence">Artificial Inteligence</option>
                                </select>
                            </div>
                            <div className="gen">
                                <span className="sel-gen">select gender : </span>
                                <div className="radio">
                                    <input type="radio" name="gender" value="male" onChange={handleInputs} id="male" />
                                    <label for="male" className="gen-lab">male</label>
                                    <input type="radio" name="gender" value="female" onChange={handleInputs} id="female" className="rad-btn" />
                                    <label for="female" className="gen-lab">female</label>
                                </div>
                            </div>
                            <div className="con-btn">
                                <input type="submit" name="submit" id="submit" value="submit" onClick={postdata} className="sub-con-btn" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
};

export default Contact;