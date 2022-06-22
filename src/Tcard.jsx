import React from "react";

const Tcard = (props) => {
    return (
        <>
            <div className="t-card">
                <div className="t-card-content">
                    <div className="t-img">
                        <img src={props.imgsrc} alt="pic" />
                    </div>
                    <div className="media-icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter-square"></i>
                    </div>
                    <div className="name-profession">
                        <span className="t-name">
                            {props.name}
                        </span>
                        <span className="t-profession">{props.prof}</span>
                    </div>
                    <div className="t-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        
                    
          </>
    )
}
export default Tcard;