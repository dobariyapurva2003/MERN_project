import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Course from "./Course";
import Teacher from "./Teacher";
import Review from "./Review";
import Contact from "./Contact";
import {Switch , Route, Redirect } from "react-router-dom";
import Footer from "./Footer";


const App = (() => {
    
    return (
        <>
        <Navbar />
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/about" component={About} />
                    <Route exact path = "/course" component={Course} />
                    <Route exact path = "/teacher" component={Teacher} />
                    <Route exact path = "/review" component={Review} />
                    <Route exact path = "/contact" component={Contact} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
        </>
    )
}
)
export default App;