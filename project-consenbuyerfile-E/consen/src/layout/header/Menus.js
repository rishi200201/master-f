import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <a href="#">
        Solution{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="index-1">
             Global Business Management and Strategy
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="index-2">
            Human Resource Management and Strategy
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/index-3">
              <a>ISO International Quality Management Certification</a>
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/index-4">
              <a>360° Software Solutions</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/landing-1">
              <a>Global Business Network Program</a>
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="portfolio">
          Courses{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="portfolio-details">
            School of Management
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio-details1">
            School of Informatics and Data Management
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio-details2">
            School of Aviation Management
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio-details3">
            School of Engineering & Technology Details
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio-details4">
            School of International Languages
            </Link>
          </li>{" "}
          {/* <li>
            <Link legacyBehavior href="portfolio-details">
              Portfolio Details
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="404">
              404
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="contact">
              Contact Us
            </Link>
          </li>  */}
        </ul>
      </li>{" "}
      <li>
        <a href="license">
        Licensing{" "}
          {/* <span>
            <i className="fas fa-angle-down" />
          </span> */}
        </a>
        {/* <ul className="sub-menu"> */}
          {" "}
          {/* <li>
            <Link legacyBehavior href="service">
              Our Service
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service-details">
              Service Details
            </Link>
          </li> */}
        {/* </ul> */}
      </li>{" "}
      {/* <li>
        <Link legacyBehavior href="portfolio">
          Portfolio
        </Link>
      </li>{" "} */}
      <li>
        <a href="#">
          Resources{" "}
          {/* <span>
            <i className="fas fa-angle-down" />
          </span> */}
        </a>
        {/* <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="">
              Image Gallery
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="">
              Events
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="">
              Journals and Publication 
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="">
              Media News
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              Professional's Achievements 
            </Link>
          </li>
        </ul> */}
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
