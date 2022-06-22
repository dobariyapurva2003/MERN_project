import React from "react";

const Revbox = (props) => {
    return (
        <>
<div className="rev-box">
                            <div className="rev-img">
                                <img src={props.imgsrc} alt="pic" />
                            </div>
                            <div className="st-name"> {props.name} </div>
                            <div className="st-email">{props.email}</div>
                            <div className="rev-rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div className="rev-rev">{props.rev}
                            </div>
                        </div>
        </>
    );
};
export default Revbox;