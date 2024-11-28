import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const CaseStudies = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".image_load", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        
          
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  return (
    <Fragment>
      <div className="row case-study-bg">
        <div className="col-lg-12">
          <div className="-section-title upper text-center pb-50">
            {/* <h5> Case Studies </h5> */}
            <h2> The Masterminds International Institutions </h2>
           <p>
            An Accredited International Institution for Quality Management Systems and Standards by

Global Euro Accreditation Centre (GEAC), Tbilisi, Georgia and Royal Stancert BV, Amsterdam, Netherlands, Europe &

Globally Accredited Professional Courses by International Accreditation Organization (IAO), Houston USA.</p>
<h5> (American Academic Board Credit Points and GPA Systems) </h5>

          </div>
        </div>
        <div className="col-lg-12">
          <div className="-section-title upper text-center pb-50">
            {/* <h5> Case Studies </h5> */}
           
            <p>
            The Masterminds International Institutions offers professional degree/diploma, job-oriented programs to up-skill the knowledge to match the industry/institutionalrequirements. C lassified into School of Management, School of Engineering, School of Informatics and Data Management, School of Science and Technology, School of Allied Health Sciences, School of International Languages, School of Marine Management, School of Aviation Management, School of Music & Arts and Professional Licensing Program. We have a dedicated set of professionals ranging from business tycoons to academicians and industrial experts around the world that work round the clock to provide you with the best assistance possible. We have an Accredited International Institution for Quality Management Systems and Standards by Global Euro Accreditation Centre (GEAC), Tbilisi, Georgia and Royal Stancert BV, Amsterdam, Netherlands, Europe & Globally Accredited Professional Courses by International Accreditation Organization (IAO), Houston, USA, that provides certifications and opportunities for all at any point in their lives, bringing out the multi-talented individual with the choice of customizations, and helps in completing this at any pace to save time and develop from a professional to a qualified expert.</p>
            </div>

  <div className="row align-items-center">
  <div className="col-lg-4 text-center">
    <div className="vision-icon mb-3">
      <img src="assets/images/resource/vision.jpg" alt="Visionn Icon"style={{ maxWidth: '50px', height: 'auto', marginBottom: '15px' }} />
    </div>
    <h4>VISION</h4>
    <p>
      The Masterminds International to be the preferred online partner for
      every career aspirant across the globe amongst the focused groups.
    </p>
  </div>
  <div className="col-lg-4 text-center">
    <div className="purpose-icon mb-3">
    <img src="assets/images/resource/purpose.png" alt="Purpose Icon" style={{ maxWidth: '50px', height: 'auto', marginBottom: '15px' }} />

    </div>
    <h4>PURPOSE</h4>
    <p>
      To provide contemporary, tertiary, and flexible online education to
      accelerate career choices and aspirations beyond boundaries across the
      pyramid.
    </p>
  </div>
  <div className="col-lg-4 text-center">
    <div className="strategy-icon mb-3">
     
      <img src="assets/images/resource/strategy.png" alt="Strategyy Icon"style={{ maxWidth: '50px', height: 'auto', marginBottom: '15px' }} />
    </div>
    <h4>STRATEGY</h4>
    <p>
      To evoke the career instinct for every career aspirant by focused
      promotion and effortless reach to The Masterminds International.
    </p>
 
</div>
</div>
  </div>
  
          <div className="col-lg-12">
          <div className="-section-title upper text-center pb-50">
            <h5> CORE OBJECTIVES</h5>
            <h6>
            We craft courses for acquiring, retaining and growing in multiple, aspiring & boundaryless career ladders</h6>
          </div>
        </div>
          
            
      
        
        <div className="portfolio-shape">
          <div className="port-shape-thumb rotateme">
            <img src="assets/images/resource/red-dot.png" alt />
          </div>
          <div className="port-shape-thumb2 bounce-animate2">
            <img src="assets/images/resource/all-shape6.png" alt />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                {/* <li
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  {" "}
                  All items{" "}
                </li> */}
                {/* <li
                  className={`c-pointer ${activeBtn("physics")}`}
                  onClick={handleFilterKeyChange("physics")}
                >
                  {" "}
                  Stregy{" "}
                </li> */}
                {/* <li
                  className={`c-pointer ${activeBtn("chemistry")}`}
                  onClick={handleFilterKeyChange("chemistry")}
                >
                  {" "}
                  Ficulties{" "}
                </li> */}
                {/* <li
                  className={`c-pointer ${activeBtn("math")}`}
                  onClick={handleFilterKeyChange("math")}
                >
                  {" "}
                  Coaching{" "}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* -------- */}
   
      <div className="row image_load">
  {/* Item 1 */}
  {/* <div className="col-lg-4 col-md-6 grid-item physics english">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/marine.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/marine.jpg"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="">
                  <a> School Of Marine Management </a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div> */}

  {/* Item 2 */}
  <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/plane.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        {/* Portfolio Icon */}
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="/protfolio-detail2.js"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details2">
                  <a> School of Aviation Management </a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Item 3 */}
  {/* <div className="col-lg-4 col-md-6 grid-item chemistry english">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/music.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/music.jgp"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="">
                  <a> School of Arts and Music</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div> */}

  {/* Item 4 */}
  <div className="col-lg-4 col-md-6 grid-item math english">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/management.jpeg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        {/* Portfolio Icon */}
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/management.jpeg"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details">
                  <a> School of Management </a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Item 5 */}
  <div className="col-lg-4 col-md-6 grid-item math physics">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/data.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        {/* Portfolio Icon */}
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/data.jpg"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details1">
                  <a> School of Informatics and Data Management</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Item 6 */}
  {/* <div className="col-lg-4 col-md-6 grid-item chemistry physics">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/Untitled-design-1 (1).png" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
      
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/Untitled-design-1(1).png"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="">
                  <a> School of Allied Health Science</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div> */}

  {/* Item 7 */}
  {/* <div className="col-lg-4 col-md-6 grid-item chemistry physics">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/Media.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
      
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/Media.jpg"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="">
                  <a> School of Media and Animation</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div> */}

  {/* Item 8 */}
  <div className="col-lg-4 col-md-6 grid-item chemistry physics">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/Untitled-design-5 (1).png" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        {/* Portfolio Icon */}
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/Untitled-design-5 (1).png"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="portfolio-details4">
                  <a> School of International Languages</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Item 9 */}
  <div className="col-lg-4 col-md-6 grid-item chemistry physics">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/tec.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        {/* Portfolio Icon */}
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/tec.jpg"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details3">
                  <a> School of Engineering and Technology</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Item 10 */}
  {/* <div className="col-lg-4 col-md-6 grid-item chemistry physics">
    <div className="case-study-single-box">
      <div className="case-study-thumb2">
        <img 
          src="assets/images/project/eng.jpg" 
          alt 
          style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
        />
        
        <div className="single_portfolio_icon">
          <a
            className="portfolio-icon venobox vbox-item"
            data-gall="myportfolio"
            href="assets/images/project/eng.jpg"
          >
            <i className="bi bi-card-image" />
          </a>
        </div>
        <div className="case-study-content">
          <div className="case-study-content-inner">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="">
                  <a> School of Science and Technology</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="video-icon style-two">
          <a
            className="video-vemo-icon venobox vbox-item"
            data-vbtype="youtube"
            data-autoplay="true"
            href="https://www.youtube.com/embed/YeWkYSFlRT4?si=3B5QZvymUEkE5239"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
    </div>
  </div> */}
</div>

     

      {/* ------------------ */}
    </Fragment>
  );
};
export default CaseStudies;
