import React from "react";
import myavatar from "../public/my-avatar.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneIcon from "@mui/icons-material/SmartphoneOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import Twitter from "@mui/icons-material/Twitter";
import Image from "next/image";
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/HomePage/Footer";


const ayan = () => {
  return (
    <>
    <Navbar title="CRYFTS"/>
      <main>
        <aside className="sidebar" data-sidebar="">
          <div className="sidebar-info">
            <figure className="avatar-box">
              <Image src={myavatar} alt="sohaib" width={150} height={147} />
            </figure>
            <div className="info-content">
              <h1 className="name">Ayan Hussain</h1>
              <p className="title">Data Analyst</p>
            </div>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <MailIcon />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a href="mailto:sohaib@example.com" className="contact-link">
                    ayan@example.com
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <SmartphoneIcon />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Phone</p>
                  <a href="tel:+923092047446" className="contact-link">
                    +92 (336) 2128946
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <CalendarMonthIcon />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Birthday</p>
                  <time dateTime="1982-06-23">November 14, 2002</time>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <LocationOnIcon />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Karachi, Sindh, Pakistan</address>
                </div>
              </li>
            </ul>
            <div className="separator" />
            <ul className="social-list">
              <li className="social-item">
                <a href="/#" className="social-link">
                  <FacebookIcon />
                </a>
              </li>
              <li className="social-item">
                <a href="/#" className="social-link">
                  <Twitter />
                </a>
              </li>
              <li className="social-item">
                <a href="/#" className="social-link">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main-content">
          <article className="about  active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>
                I'm Data Analyst from Karachi, Pakistan,
                working in Dolphin Analytics. I enjoy turning complex data
                into simplified data.
              </p>
              <p>
                My job is to clean your data so that it is functional. Moreover, I add
                personal touch to your product and make sure that is
                eye-catching and easy to use. My aim is to bring across your
                message and identity in the most creative way.
              </p>
            </section>
            <section className="service">
              <h3 className="h3 service-title">What i'm doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Data Analyst</h4>
                    <p className="service-item-text">
                      Analyze the data and then clean the data according to requirements.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web development</h4>
                    <p className="service-item-text">
                      Quality development of sites at the professional
                      level.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Python Developer</h4>
                    <p className="service-item-text">
                      I can code in python with libraries like panda, pyTorch and Tensorflow.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <AutoStoriesOutlinedIcon />
                </div>
                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Shaheed Liaquat Memorial English Secondary School
                  </h4>
                  <span>2011 — 2018</span>
                  <p className="timeline-text">
                    Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                    delenit atque corrupti, quos dolores et quas molestias
                    exceptur.
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                  Adamjee Govt. Science College
                  </h4>
                  <span>2018 — 2020</span>
                  <p className="timeline-text">
                    Ratione voluptatem sequi nesciunt, facere quisquams facere
                    menda ossimus, omnis voluptas assumenda est omnis..
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    NED University of Enginnering and Technology
                  </h4>
                  <span>2020 — present</span>
                  <p className="timeline-text">
                    Duis aute irure dolor in reprehenderit in voluptate, quila
                    voluptas mag odit aut fugit, sed consequuntur magni dolores
                    eos.
                  </p>
                </li>
              </ol>
            </section>
            <section className="skill">
              <h3 className="h3 skills-title">My skills</h3>
              <ul className="skills-list content-card">
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Data Analyst</h5>
                    <data value={90}>90%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "80%" }}
                    />
                  </div>
                </li>
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Python development</h5>
                    <data value={70}>70%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "70%" }}
                    />
                  </div>
                </li>
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Web Development</h5>
                    <data value={50}>50%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "50%" }}
                    />
                  </div>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default ayan