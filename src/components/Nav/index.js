import React from "react";
import "./nav_style.css";
import Logo from "../../assets/img/logo.png";
import Header from "../Header";
import Menu from "../../assets/icons/menu.png";
import { Link ,Outlet} from "react-router-dom";
const index = () => {
  return (
    <div>
      <Header />
      <nav class="navbar nav_main navbar-expand-md navbar-light  p-2 ">
        <div class="container ">
          <a class="navbar-brand" href="#">
            <img src={Logo} />
            <span>BurmaLearn.</span>
          </a>
          <div
            className="navbar-toggler menu"
            style={{ border: "none" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img className="" src={Menu} />
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5
                class="offcanvas-title text-align-center"
                id="offcanvasNavbarLabel"
              >
                <img src={Logo} />
                BurmaLearn
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body ">
              <ul class="navbar-nav text-light justify-content-center flex-grow-1 m-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" >
                    <Link style={{textDecoration:'none',color: 'black'}} to="/">Home</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >
                  <Link style={{textDecoration:'none',color: 'black'}} to="/course">Course</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >
                  <Link style={{textDecoration:'none',color: 'black'}} to="/about">About</Link>

                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >
                  <Link style={{textDecoration:'none',color: 'black'}} to="/contact">Contact</Link>
                  </a>
                </li>
              </ul>
              <span class="d-flex " role="search">
                <button class=" btn_in" type="submit">
                  Sign In
                </button>
                <button class="btn_out" type="submit">
                  Sign Up
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default index;
