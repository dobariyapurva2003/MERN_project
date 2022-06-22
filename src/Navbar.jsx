import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
           <section className="header">
           <nav className="navbar">
        <div className="navbar-container container">
        <h1 className="logo"><NavLink to="/" className="logo-ank"> Educa. </NavLink></h1>
                <ul className="items">
                    <li>
                        <NavLink to="/" className="ank">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="ank">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/course" className="ank">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/teacher" className="ank">Teachers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/review" className="ank">Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="ank">Contact</NavLink>
                    </li>
                </ul>
           </div>
           </nav>

           </section>  
        </>
    )
};

export default Navbar;