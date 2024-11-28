import Link from "next/link";
import { Fragment, useState } from "react";
import { DaskTopMenusMenus } from "./Menus";
const Header2 = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="header_top_menu d-flex align-items-center ">
        <div className="container">
          <div className="row d-flex align-items-cente">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_text">
                  <p>Welcome! To MastermindsGroups</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 pr-0">
              <div className="header_top_menu_icon text-right">
                <div className="menu-title">
                  <h6>FOLLOW US</h6>
                </div>
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/people/The-Masterminds-International-Institutions/100075920930200/">
                        <i className="bi bi-facebook" />
                      </a>
                    </li>
                    {/* <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-dribbble" />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://x.com/TheMastminds?t=patVzCANPKlSun6jo3e2zw&s=09">
                        <i className="bi bi-twitter" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="https://www.instagram.com/_the_/?utm_medium=copy_link">
                        <i className="bi bi-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  Header Top Menu Area Css */}
      {/*===================================================*/}
      {/*==================================================*/}
      {/* Start  Main Menu Area */}
      {/*==================================================*/}
      <div id="sticky-header" className="_nav_manu style-two header____">
        <div className="container">
          <div className="row header-bg align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a className="logo_img" title="">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="main_sticky" title="">
                    <img src="assets/images/logo2.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0">
              <nav className="_menu">
                <DaskTopMenusMenus />
                <div className="search-box-btn search-box-outer">
                  <div className="nav-btn navSidebar-button">
                    <a className="c-pointer" onClick={() => setToggle(true)}>
                      <i className="fas fa-align-left" />
                    </a>
                  </div>
                </div>
                <div className="header-button">
                  <Link legacyBehavior href="contact">
                    Request a Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`xs-sidebar-group info-group ${toggle ? "isActive" : ""}`}
      >
        <div
          className="xs-overlay xs-bg-black"
          onClick={() => setToggle(false)}
        />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a
                href="#"
                className="close-side-widget"
                onClick={() => setToggle(false)}
              >
                <i className="far fa-times-circle" />
              </a>
            </div>
            <div className="sidebar-textwidget">
              {/* Sidebar Info Content */}
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="nav-logo">
                    <a href="index.html">
                      <img src="assets/images/logo.png" alt="logo" />
                    </a>
                  </div>
                  <div className="content-box">
                    <h2>We’d love to hear from you!</h2>
                    <p className="text">
                    
                    No! You are not going to hit a long wait line to reach a real person. Neither is your email reaching any blackhole where things just disappear. Our customer first approach makes it natural to answer every query, request, or just a comment at a record response time.
                    </p>
                    {/* <a href="index" className="theme-btn btn-style-two">
                      <span>Consultation</span> <i className="fas fa-heart" />
                    </a> */}
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <span className="icon flaticon-email" />
                        No. 91, Murugesanar Street, Thiruvalluvar Nagar,
Mugalivakkam, Chennai 600 125
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="bi bi-telephone-inbound" />{" "}
                        </span>
                        +91 90877 19511
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-geo-alt" />
                        </span>
                        info@group.org
                      </li>
                      {/* <li>
                        <span>
                          <i className="bi bi-clock" />
                        </span>
                        Week Days: 09.00 to 18.00 Sunday: Closed
                      </li> */}
                    </ul>
                  </div>
                  {/* Social Box */}
                  <ul className="social-box">
                    <li className="facebook">
                      <a href="https://www.facebook.com/people/The-Masterminds-International-Institutions/100075920930200/" className="fab fa-facebook-f" />
                    </li>
                    <li className="twitter">
                      <a href="https://www.instagram.com/_the_/?utm_medium=copy_link" className="fab fa-instagram" />
                    </li>
                    <li className="linkedin">
                      <a href="https://x.com/TheMastminds?t=patVzCANPKlSun6jo3e2zw&s=09" className="fab fa-twitter" />
                    </li>
                    {/* <>li className="instagram">
                      <a href="#" className="fab fa-pinterest-p" />
                    </li> */}
                    <li className="youtube">
                      <a href="https://www.linkedin.com/in/theinternational/" className="fab fa-linkedin-in" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header2;
