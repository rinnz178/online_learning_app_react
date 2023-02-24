import React from "react";
import "./footer_style.css";
import Logo from "../../assets/img/logo.png";
import DownArrow from "../../assets/icons/down.png";
import Facebook from "../../assets/icons/facebook (1).png";
import Instagram from "../../assets/icons/instagram (1).png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Google from "../../assets/icons/google.png";

const index = () => {
  return (
    <>
      <div className="main">
        <div className="head">
          <img src={Logo} style={{ margin: "auto" }} />
          <span>BurmaLearn.</span>
        </div>
        <div className="f_body">
          <p className="body_head">
            MyTutor is the best online tutoring platform in the <br />{" "}
            world.Founded in 2010 and located in Myanmar.
          </p>
          <div className="b_body row">
            <div className="col-6 col-md-4 col-lg-3">
              <p>Terms of Service</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <p>Privacy Policy</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <p>Support Center</p>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <p>Sitemap</p>
            </div>
          </div>
          <div className="row b_footer">
            <div className="col-6 col-lg-4 b_footer_left">
              <p>
                English
                <img
                  src={DownArrow}
                  style={{
                    width: "17px",
                    marginBottom: "3px",
                    marginLeft: "4px",
                  }}
                />
              </p>
            </div>
            <div className="col-6 col-lg-4 b_footer_center">
              <img src={Facebook} style={{ width: "20px" }} />
              <img src={Instagram} style={{ width: "20px" }} />

              <img src={LinkedIn} style={{ width: "20px" }} />

              <img src={Google} style={{ width: "20px" }} />
            </div>
            <div className="col-12 col-lg-4">
              <p>Copyright © 2023 BurmaLearn. All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
