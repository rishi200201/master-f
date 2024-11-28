import Link from "next/link";
import { Fragment } from "react";
import { DaskTopMenusMenus } from "./Menus";
const Header3 = () => {
  return (
    <Fragment>
      <div className="header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="header-top-address">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-envelope" /> MastermindsGroups.org
                    </a>
                  </li>
                  {/* <li>
                    <i className="fas fa-map-marker-alt" />{" "}
                    <span>CHENNAI</span>
                  </li> */}
                  {/* <li>
                    <a href="#">
                      <i className="fas fa-phone" />  +91 98415 88775
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-top-social">
                <a href="https://www.facebook.com/people/The-Masterminds-International-Institutions/100075920930200/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://x.com/TheMastminds?t=patVzCANPKlSun6jo3e2zw&s=09">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.instagram.com/_the_/?utm_medium=copy_link">
                  <i className="fab fa-instagram" />
                </a>
                {/* <a href="#">
                  <i className="fab fa-dribbble" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Consen Main Menu Area */}
      {/*==================================================*/}
      <div
        id="sticky-header"
        className="_nav_manu style-three header____"
      >
        <div className="container">
          <div className="row align-items-center">
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
                <div className="header-button">
                  <Link legacyBehavior href="contact">
                    Get A Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header3;
