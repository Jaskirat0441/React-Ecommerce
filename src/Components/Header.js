import React from "react";
import girl_img from "./Images/girl_img.png";
const Header = (props) => {
  return (

      <div className="bg-secondary">
    <div className="container">
      <div className="row align-items-center">
      <div className="col-12 col-md-5 col-lg-6 order-md-1">
        <h1 className="display-3 text-center text-md-start">{props.name} NEW COLLECTION</h1>
        <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8 text-white">
          We know how large objects will act, but things on a small scale  modern website with flexible.
        </p>
        <div className="text-center text-md-start">
          <button className="btn btn-primary shadow lift me-1 ">SHOP NOW</button>
        </div>
      </div>
      <div className="col-12 col-md-5 col-lg-6 order-md-2">
        {/* <div className="hero_cover">
    <div className="eclipse_1 eclipse"></div>
    <div className="eclipse_2 eclipse"></div>
    <div className="eclipse_3 eclipse"></div> */}
          <img src={girl_img} alt="" srcSet="" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"/>
        {/* <div className="eclipse_4 eclipse"></div>
    <div className="eclipse_5 eclipse"></div>
  </div> */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Header;
