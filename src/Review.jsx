import React from "react";
import web18 from "../src/img/r1.jpg";
import web19 from "../src/img/r2.jpg";
import web20 from "../src/img/r3.jpg";
import web21 from "../src/img/r4.jpg";
import Revbox from "./Revbox";

const Review = () => {
    return (
        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <section className="rev">
                <div className="rev-container">
                    <h4 className="rev-h4">Students</h4>
                    <h4 className="rev-h4 seco-part-title-rev"> Reviews </h4>
                    <div className="rev-content">
                        <Revbox imgsrc={web18} name="Mike Wilson" email="mikewil@gmail.com" rev="
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos quo blanditiis ratione illum eius dolorem neque voluptas magni nostrum aliquid laudantium et atque, laborum molestiae veniam a voluptatibus, culpa at accusamus. Dolores ipsam expedita alias!"
                        />

                        <Revbox imgsrc={web19} name="Kimerly Adam" email="kimadam@gmail.com" rev="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facere, unde distinctio suscipit quas expedita optio voluptate, nam, corporis repellat laudantium! Veniam quae, dicta quam cupiditate ex recusandae voluptatem voluptas."
                        />

                        <Revbox imgsrc={web20} name="John Steven" email="johnatevs@gmail.com" rev="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consectetur aliquam doloribus expedita, sunt nisi debitis dolor nemo consequuntur esse eum repudiandae saepe eius deserunt ratione eligendi, dolore eaque illum voluptates excepturi libero deleniti assumenda. Voluptates sed debitis molestiae impedit!"
                        />

                        <Revbox imgsrc={web21} name="Maria Lewis" email="marial@gmail.com" rev="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt labore quos, voluptatum quibusdam, corporis eius, magni ipsum cumque corrupti molestias odit assumenda dolorem nulla eum."
                        />

                    </div>
                </div>
            </section>
        </>
    )
};

export default Review;
