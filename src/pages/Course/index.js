import React from "react";
import "./course_style.css";
import { useScrollBy } from "react-use-window-scroll";

import Search from "../../assets/icons/search.png";
import History from "../../assets/icons/scroll.png";
import Humanities from "../../assets/icons/people.png";
import Writing from "../../assets/icons/note.png";
import ForeignLanguages from "../../assets/icons/global.png";
import TestPrep from "../../assets/icons/book.png";
import Computer from "../../assets/icons/coding.png";
import Engineering from "../../assets/icons/engineering.png";
import Music from "../../assets/icons/microphone-voice-interface-symbol.png";
import DownArrow from "../../assets/icons/down-arrow.png";

const Course = () => {
  const scrollBy = useScrollBy();

  return (
    <>
      <div className="container  course_main">
        <div className="page_down">
          <span
            onClick={() => scrollBy({ top: 620, left: 0, behavior: "smooth" })}
          >
            <img src={DownArrow} className="down_arrow" />
          </span>
        </div>
        <div className="head">
          <p className="head_one">OUR TUTOR SUBJECT</p>
          <p className="head_two">Find Online Tutor in Any Subject</p>
        </div>
        <div className="col-lg-5 col-10 m-auto mt-4" style={{boxShadow:'0px 0.2px 0.7px ',borderRadius:'20px'}}>
          <div class="input-group  mb-3 ">
            <input
              type="text"
              class="form-control "
              placeholder="What subject do you need to help with?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <img src={Search} />
            </span>
          </div>
        </div>
        <div className="body">
          <div className="row ">
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={Computer} />
                <p>Programming</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={Humanities} />
                <p>Humanities</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={Music} />
                <p>Music Lessons</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={Engineering} />
                <p>Engineering</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={Writing} />
                <p>Writing & Reading</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={ForeignLanguages} />
                <p>Foreign Languages</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={History} />
                <p>History</p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="card ">
                <img src={TestPrep} />
                <p>Test Prep</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#">
          <p className="see_all_courses"
          >
            See All Courses
          </p>
        </a>
      </div>
    </>
  );
};

export default Course;
