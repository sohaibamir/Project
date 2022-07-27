import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-about">
              <div className="footer-logo">
                <span>cryfts</span>
              </div>
              <p>
                A platform to trade Cryptocurrency, purchase NFT's and learn
                about it.
              </p>
            </div>
          </div>
          <div className="col-lg-2  col-md-3 col-sm-6">
            <div className="footer-widget contact-links">
              <h6>Links</h6>
              <ul>
                <li>
                  <Link href="/">
                    <a className="footer-items">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="footer-items">
                      Prices
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a className="footer-items" href="/news">
                      News
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/developers">
                    <a className="footer-items">Developers</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget">
              <h6>Contact</h6>
              <div>
                <i class="fa fa-map-marker"></i>
                <p>
                  <span>75270, NED University Karachi, Sindh</span>
                </p>
              </div>

              <div>
                <i class="fa fa-phone"></i>
                <p>+92 309 2047446</p>
              </div>

              <div>
                <i class="fa fa-envelope"></i>
                <p>
                  <a href="mailto:support@company.com">cryfts@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 text-center">
          <div className="footer-copyright-text">
            <p>
              Copyright © 2022 All rights reserved |<a href="/#"> CRYFTS</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
