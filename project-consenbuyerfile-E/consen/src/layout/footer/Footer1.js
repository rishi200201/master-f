import Link from "next/link";
import React, { useState } from "react";

const Footer1 = () => {
  const [status, setStatus] = useState(""); // To track form submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setStatus("SUCCESS");
        } else {
          setStatus("ERROR");
        }
      })
      .catch(() => setStatus("ERROR"));
  };

  return (
    <div className="footer-middle">
      <div className="container">
        <div className="subscribe-area">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-title">
                <h1>Subscribe to our Newsletter</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/myyleorq"
                method="POST"
                id="dreamit-form"
              >
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </div>
              </form>
              <div id="status">
                {status === "SUCCESS" && (
                  <p className="success-message">Thanks for subscribing!</p>
                )}
                {status === "ERROR" && (
                  <p className="error-message">
                    Oops! There was an error. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="subscribe-shape">
            <div className="subscribe-thumb bounce-animate5">
              <img src="assets/images/resource/small-dot.png" alt="small dot" />
            </div>
            <div className="subscribe-thumb1">
              <img src="assets/images/resource/big-dot.png" alt="big dot" />
            </div>
          </div>
        </div>

        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="company-info-desc pr-2">
                  <h4 className="widget-title">About Us</h4>
                  <p>The Masterminds International Operations & Accreditation</p>
                </div>
                <div className="follow-company-icon">
                  <a
                    className="social-icon-color"
                    href="https://www.facebook.com/people/The-Masterminds-International-Institutions/100075920930200/"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    className="social-icon-color2"
                    href="https://www.instagram.com/_the_/?utm_medium=copy_link"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    className="social-icon-color1"
                    href="https://x.com/i/flow/login?redirect_after_login=%2FTheMastminds"
                  >
                    <i className="bi bi-twitter" />
                  </a>
                  <a
                    className="social-icon-color3"
                    href="https://www.youtube.com/channel/UCKTWLPiv36wlFpblM9ycUnw"
                  >
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Company</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Services</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <a href="index-1">Business Management and Strategy</a>
                    </li>
                    <li>
                      <a href="index-2">Human Resource Management & Systems</a>
                    </li>
                    <li>
                      <a href="index-3">ISO International Quality Certification</a>
                    </li>
                    <li>
                      <a href="index-4">360° Software Solution</a>
                    </li>
                    <li>
                      <a href="landing-1">Global Business Network Program</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-shape">
            <div className="footer-thumb">
              <img src="assets/images/resource/red-dot.png" alt="red dot" />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img src="assets/images/resource/all-shape.png" alt="shapes" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="-logo">
                <Link legacyBehavior href="/">
                  <a className="logo_thumb" title="">
                    <img src="assets/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    The <span>Masterminds International</span> Operations &
                    Accreditation by Dream-IT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
