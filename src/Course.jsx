import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Course = () => {
    return (
        <>
        <section className="course">
        <div className="cr-title">
            <h5 className="cr-h5">Our </h5>
            <h5 className="cr-h5 seco-part-title">Courses </h5>
        </div>
        <div className="grid-cr">
            {
                Sdata.map((val, ind) => {
                    return <Card
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                    />
                })
            }
            </div>
            </section>
        </>
    )
};

export default Course;