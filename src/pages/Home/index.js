import React from "react";
import "./home_style.css";
import { useScrollBy } from "react-use-window-scroll";

// ------img------
import HomeBg from "../../assets/img/home_bg.png";
import PlayButton from "../../assets/icons/play-button.png";
import DownArrow from "../../assets/icons/down-arrow.png";
import Group from "../../assets/icons/group.png";
import Time from "../../assets/icons/time.png";
import Note from "../../assets/icons/notes.png";
import Dollar from "../../assets/icons/dollar-symbol.png";

const Home = () => {
  const scrollBy = useScrollBy();

  return (
    <>
      <div className=" container">
        <div className="page_down">
          <span
            onClick={() => scrollBy({ top: 620, left: 0, behavior: "smooth" })}
          >
            <img src={DownArrow} className="down_arrow" />
          </span>
        </div>
        <div className="row">
          <div className=" col-12 col-sm-12 col-md-5 col-lg-6  right_side order-md-2 ">
            <img className="justify-content-center" src={HomeBg} />
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-6 left_side order-md-1">
            <p className="top_text">100% SATISFACTION GUARANTEE</p>
            <p className="text_one">Get Quality Tutoring</p>
            <p className="text_two">Through 1-on-1</p>
            <p className="text_three">Online Tutoring</p>
            <p className="text_four">
              Private, 1-on-1 lessons with the expert instructor based on your{" "}
              <br /> goals and interests.
            </p>
            <div>
              <button class="join_for_free" type="submit">
                Join For Free
              </button>
              <span>
                <img src={PlayButton} className="play_btn" />
                <span className="play_btn_text">See How it Works</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sec_home">
        <div className="row">
          <div className="col-6 col-lg-3">
            <span className="sec_head">8.200</span>
            <br />
            <span className="sec_footer">Success Stories</span>
          </div>
          <div className="col-6 col-lg-3">
            <span className="sec_head">10.204</span>
            <br />
            <span className="sec_footer">Expert Instructor</span>
          </div>
          <div className="col-6 col-lg-3">
            <span className="sec_head">50.923</span>
            <br />
            <span className="sec_footer ">Hours Tutored</span>
          </div>
          <div className="col-6 col-lg-3">
            <span className="sec_head">71.012</span>
            <br />
            <span className="sec_footer">Active Student</span>
          </div>
        </div>
      </div>
      <div className="container trd_home">
        <div className="row ">
          <p className="why_choose_us">WHY CHOOSE US </p>
          <span className="wcu_one">
            <span style={{ fontWeight: "500" }}>Benefits</span> of online
            Tutoring
          </span>
          <p className="wcu_one">
            Services <span style={{ fontWeight: "500" }}>at MyTutor</span>{" "}
          </p>
        </div>
        <div className="row card_row mt-4">
          <div className="col-6 col-lg-3">
            <div className="h_card">
              <img src={Group} className="trd_img" />
              <p>One-On-One Teaching</p>
              <span style={{ color: "gray" }}>
                All Of Our Special Education Experts Have A Degree In Special
                Education
              </span>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="h_card">
              <img src={Time} className="trd_img" />
              <p>24/7 Tutor Availability</p>
              <span style={{ color: "gray" }}>
                24/7 Tutor Availability assured at MyTutor matched to your
                learning style!
              </span>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="h_card">
              <img src={Note} className="trd_img" />
              <p>Interactive Whiteboard</p>
              <span style={{ color: "gray" }}>
                Our digital whiteboard equipped with audio-video-chat features.
              </span>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="h_card">
              <img src={Dollar} className="trd_img" />
              <p>Affordable Prices</p>
              <span style={{ color: "gray" }}>
                Choose an experienced tutor that fits your budget.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
