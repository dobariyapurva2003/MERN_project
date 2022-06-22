import React from "react";
import web12 from "../src/img/t1.jpg";
import web13 from "../src/img/t2.jpg";
import web14 from "../src/img/t3.jpg";
import web15 from "../src/img/t4.jpg";
import web16 from "../src/img/t5.jpg";
import web17 from "../src/img/t6.jpg";

import Tcard from "./Tcard";

const Teacher = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            
            <section className="teach">
                <div className="teach-div">
                    <h5 className="teach-title">Expert </h5>
                    <h5 className="teach-title seco-part-title-teach">Tutors </h5>
                    <div className="t-container">
                        <div className="t-content">
                            <Tcard imgsrc={web12} name="Kim John" prof="Web Development" />
                            <Tcard imgsrc={web15} name="Tiya Mahera" prof="Digital Marketing" />
                            <Tcard imgsrc={web13} name="Aadil Khan" prof="Artificial Inteligence" />
                            <Tcard imgsrc={web16} name="Jesy Kaif" prof="Science and Biology" />
                            <Tcard imgsrc={web14} name="Robert Holmes" prof="Engineering" />
                            <Tcard imgsrc={web17} name="Mefkibe Divit" prof="Graphic Designing" />
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
};

export default Teacher;