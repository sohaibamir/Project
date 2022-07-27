import React from "react";
import Navbar from "../components/HomePage/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import Footer from "../components/HomePage/Footer";


const developers = () => {
  return (
    <>
      <div>
        <Navbar title="CRYFTS" />
      </div>
      <section id="container-5">
        <div className="about-nav">
          <h2 className="about-heading">OUR TEAM</h2>
          <p className="about-line" />
        </div>
        <div className="items">
          <div>
            <img
              src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/242242718_597300274735227_8684235472043491411_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFj6HCN3vjbooPmswqyGvi8JcKaIBLOK5klwpogEs4rmby4JL_q8k7WE0DLt18Bfz6dpdhEGzGvWTMAXZLxMBqy&_nc_ohc=WOge05KL5G8AX8b4gIz&_nc_ht=scontent.fkhi17-1.fna&oh=00_AT-f2KwUu2HXPt33lWxznfW-iyQ0iVoY1QN-y4Hhs_jDfQ&oe=62E2448E"
              alt=""
            />
            <h3 className="heading-temp">HUZAIFA ASLAM</h3>
            <p className="para-template">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/huzaifa">
              <a
                className="btn btn-danger bd-color bg-color fs-7 px-2 my-2"
                type="submit"
              >
                About Me
              </a>
            </Link>
            <span>
              <LinkedInIcon
                sx={{ color: "#9f1313" }}
                className="social-icons"
              />
              <TwitterIcon sx={{ color: "#9f1313" }} className="social-icons" />
              <FacebookIcon
                sx={{ color: "#9f1313" }}
                className="social-icons"
              />
            </span>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/90424695?s=400&u=d860b2794ecbccad391a4d3f599761ad06aa8e86&v=4"
              alt=""
            />
            <h3 className="heading-temp">SOHAIB AMIR</h3>
            <p className="para-template">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/sohaib">
              <a
                className="btn btn-danger bd-color bg-color fs-7 px-2 my-2"
                type="submit"
              >
                About Me
              </a>
            </Link>
            <span>
              <LinkedInIcon
                sx={{ color: "#9f1313" }}
                className="social-icons"
              />
              <TwitterIcon sx={{ color: "#9f1313" }} className="social-icons" />
              <FacebookIcon
                sx={{ color: "#9f1313" }}
                className="social-icons"
              />
            </span>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/90856741?v=4"
              alt=""
            />
            <h3 className="heading-temp">AYAN HUSSAIN</h3>
            <p className="para-template">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="/ayan">
              <a
                className="btn btn-danger bd-color bg-color fs-7 px-2 my-2"
                type="submit"
              >
                About Me
              </a>
            </Link>
            <span>
              <LinkedInIcon
                sx={{ color: "#9f1313" }}
                className="social-icons"
              />
              <TwitterIcon sx={{ color: "#9f1313" }} className="social-icons" />
              <FacebookIcon
                sx={{ color: "#9f1313" }}
                className="social-icons"
              />
            </span>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default developers;
