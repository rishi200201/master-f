import Counter from "@/src/components/Counter";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Index = () => {
  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start  slider Area */}
      {/*==================================================*/}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider-content">
                <h3 > POWER YOUR FUTURE </h3>
                <h1 className="outlined-text"> Innovate Solution For </h1>
                <h1>
                  {" "}
                  Business <span className="outlined-text">Success </span>{" "}
                </h1>
                <p>
                  {" "}
                  Get  access to Online Professional Courses , Business Solution and Industry Certifications led by the world's top experts.Get Started!
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className="banner-buttons">
                <div className="slider-button">
                  {/* <Link legacyBehavior href="/service">
                    <a>
                      {" "}
                      Work Together <i className="bi bi-plus" />{" "}
                    </a>
                  </Link> */}
                </div>
                <div className="slider-contact-box">
                  {/* <a className="contact-icon" href="tel:+983217690326">
                    <img src="assets/images/slider/call.png" alt="call icon" />
                  </a> */}
                  {/* <div className="contact-number">
                    <span> Call Everyday </span>
                    <h3>
                      <a href="tel:+983217690326">+98 321 (7690) 326</a>{" "}
                    </h3>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              {/* <div className="slider-thumb">
                <img src="assets/images/slider/hero-img.png" alt />
              </div> */}
              <div className="video-icon">
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
            {/* slider shape */}
            {/* <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End  slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  feature Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="-section-title mobile-center">
                <h2> Browse Top</h2>
                <h2>
                  {" "}
                  Business <span> Solutions </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              {/* <div className="-button text-right">
                <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    View All <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Global Business Management & Strategy </h2>
                  </div>
                  <div className="service-number">
                    {/* <h1> 01 </h1> */}
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      {/* Dramatically cultivate from quality user centric growth
                      strateges emerging{" "} */}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="index-1">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon2.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Human Resource Management and Systems  </h2>
                  </div>
                  <div className="service-number">
                    {/* <h1> 02 </h1> */}
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      {/* Dramatically cultivate from quality user centric growth
                      strateges emerging{" "} */}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="index-2">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon3.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Global Business Network Program </h2>
                  </div>
                  <div className="service-number">
                    {/* <h1> 03 </h1> */}
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      {/* Dramatically cultivate from quality user centric growth
                      strateges emerging{" "} */}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="landing-1">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2>ISO Certifications</h2>
                  </div>
                  <div className="service-number">
                    {/* <h1> 05 </h1> */}
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      {/* Dramatically cultivate from quality user centric growth
                      strateges emerging{" "} */}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="index-3">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/service-icon.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2>360° Software Solutions </h2>
                  </div>
                  <div className="service-number">
                    {/* <h1> 05 </h1> */}
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      {/* Dramatically cultivate from quality user centric growth
                      strateges emerging{" "} */}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="index-4">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End  about Area */}
      {/*==================================================*/}
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/images/about/our-mission-png-1-1.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="-section-title white pb-10">
                <h2> OUR MISSION</h2>
                <h2>
                  {" "}
                  WHAT WE<span> BELIEVE </span>
                </h2>
                <p>
                To create an ideal and convenient platform for the society to enhance and strengthen their Leadership quality, Multitasking Ability, Professional Skills, and Passion for Learning at all levels and at all times.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              {/* <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  We are Since <span>2007 to Present</span> in Sandigo, USA{" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Credibly reinvent sticky partnerships done </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      Distinctively evisculate data superior content.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> Monotonectally foster open source </span>
                  </li>
                </ul>
              </div> */}
              {/* <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div> */}
            </div>
            {/* about thumb */}
            <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/all-shape.png" alt />
            </div>
          </div>
          <div className="row counter-vip">
            {/* <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Consen Finished this Achivement in 7 Years </h3>
              </div>
            </div> */}
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={589} />
                  </h4>
                  <p>Corporate Clients</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={147} />
                  </h4>
                  <p>Skilled Tutors</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={9000} />
                  </h4>
                  <span>  +</span>
                  <p>Online Courses</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={23000} />
                  </h4>
                  <span>+</span>
                  <p>People Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End  about Area */}
      {/*==================================================*/}
      <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="-section-title">
                <h2> ABOUT US</h2>
                {/* <h2>
                  {" "}
                  Consen <span> Customers </span>
                </h2> */}
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  Grow with us,
                  Make a Difference!{" "}
                </p>
                <p className="about-text2">
                The Masterminds International offers the best-in-class instructor-led and self-paced training courses, industry certification courses, and a range of business Strategies such as Global Business Management and Strategy, Human Resource Management and Systems, ISO Certifications, 360 Degree Software Solutions, International Business Networking and Opportunities. We help organizations large and small to cut costs, improve customer satisfaction, manage risk, and improve business operations. Our professional courses are designed by industry experts, to ensure that you learn the skills employers are looking for now, and in the future..{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4>TRUSTED BY</h4>
                <span>PROFESSIONALS GLOBALLY </span>
              </div>
              {/* <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    {" "}
                    View Courses <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div> */}
            </div>
            {/* ----------------------------------------------------------------------- */}
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/images/about/homepage-abt-us-.png" alt />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                <img src="assets/images/about/ab-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  case study Area */}
      {/*==================================================*/}
      <div className="case-study-area">
        <div className="container">
          <div className="row case-study-bg align-items-center mb-40">
            <div className="col-lg-6 col-md-8">
              <div className="-section-title mobile-center white ">
                <h2>DISCOVER COURSES</h2>
                <h2>
                  {" "}
                  <span> Professional Online Courses </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="-button text-right">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    {" "}
                  All Courses <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="case-study-shape">
              <div className="case-shape-thumb bounce-animate4">
                <img src="assets/images/resource/red-dot.png" alt />
              </div>
              <div className="case-shape-thumb1 bounce-animate2">
                <img src="assets/images/resource/all-shape.png" alt />
              </div>
            </div>
          </div>

          {/* ---------------- */}
          <div className="row">
  <Swiper {...caseStudyProps} className="case-study owl-carousel">
    
    <SwiperSlide>
      <div className="case-study-single-box">
        <div className="case-study-thumb" style={{ position: 'relative' }}>
          <img 
            src="assets/images/project/management.jpeg" 
            alt 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
          />
          <div className="case-study-content">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details">
                  <a>School of Management</a>
                </Link>
              </h3>
            </div>
            <div className="case-button">
              <Link legacyBehavior href="">
                <a>
                  Read More <i className="bi bi-plus" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="case-study-single-box">
        <div className="case-study-thumb" style={{ position: 'relative' }}>
          <img 
            src="assets/images/project/data.jpg" 
            alt 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
          />
          <div className="case-study-content">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details">
                  <a>School of Informatics & Data Management</a>
                </Link>
              </h3>
            </div>
            <div className="case-button">
              <Link legacyBehavior href="">
                <a>
                  Read More <i className="bi bi-plus" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="case-study-single-box">
        <div className="case-study-thumb" style={{ position: 'relative' }}>
          <img 
            src="assets/images/project/marine.jpg" 
            alt 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
          />
          <div className="case-study-content">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details">
                  <a>School of Marine Management</a>
                </Link>
              </h3>
            </div>
            <div className="case-button">
              <Link legacyBehavior href="">
                <a>
                  Read More <i className="bi bi-plus" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="case-study-single-box">
        <div className="case-study-thumb" style={{ position: 'relative' }}>
          <img 
            src="assets/images/project/plane.jpg" 
            alt 
            style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
          />
          <div className="case-study-content">
            <div className="case-study-title">
              <h3>
                <Link legacyBehavior href="/portfolio-details">
                  <a>School of Aviation Management</a>
                </Link>
              </h3>
            </div>
            <div className="case-button">
              <Link legacyBehavior href="">
                <a>
                  Read More <i className="bi bi-plus" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
    
  </Swiper>
</div>


                
         {/* ---------------------------- */}
        </div>
        
      </div>
      {/*==================================================*/}
      {/* End  case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  process Area */}
      {/*==================================================*/}
      <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Upgrade <span> Your Skill </span>
                      </h3>
                      <p>Our online learning platform allows you to choose courses, learn at your own pace and at your own time.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Boost <span> Your Qualification </span>
                      </h3>
                      <p>Our industry-validated Certifications help you future-proof your career and show employers you’re ready to step into emerging roles.</p>
                    </div>
                  </div>
                </div>
                <div className=" pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Transform <span> Your Business </span>
                      </h3>
                      <p>We seamlessly integrate our business consulting, technology and industry experience to help your business grow.</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Sales <span> Generate </span>
                      </h3>
                      <p>Appropriately enhance data centered innovation</p>
                    </div>
                  </div>
                </div> */}
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              {/* <div className="-section-title mt-4 mt-lg-0">
                <h2> The Fatest Way To Achieve </h2>
                <h2>
                  {" "}
                  Technology <span> Consulting </span>
                </h2>
              </div> */}
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  Grow with us, <span>
                  Make a Difference!</span> {" "}
                </h4>
                <p>
                The Masterminds International offers the best-in-class instructor-led and self-paced training courses, industry certification courses, and a range of business Strategies such as Global Business Management and Strategy, Human Resource Management and Systems, ISO Certifications, 360 Degree Software Solutions, International Business Networking and Opportunities. We help organizations large and small to cut costs, improve customer satisfaction, manage risk, and improve business operations. Our professional courses are designed by industry experts, to ensure that you learn the skills employers are looking for – now, and in the future.
                </p>
              </div>
              {/* <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3>INTERNATIONAL ACCREDITATION</h3>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/google1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/india-logo-black.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/IAO-1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              
              
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/figma1.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            
             
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  Skills Area Css */}
      {/*==================================================*/}
      {/* <div className="skill-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="extra-animation-div">
                <div className="-section-title white">
                  <h2> Join the Community to learn </h2>
                  <h2>
                    {" "}
                    About our <span>Company</span>
                  </h2>
                </div>
                <div className="lines style-three upper pt-30 pb-10">
                  <div className="line" />
                </div>
                <div className="dreamit-smart-title">
                  <p className="slill-text">
                    Continually generate 2.0 communities and client-focused
                    products. In synergize strategic manufactured products
                    whereas levera.
                  </p>
                </div>
              </div>
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img src="assets/images/resource/skill.png" alt /> */}
                {/* thumb content */}
                {/* <div className="skill-thumb-content">
                  <div className="skill-title">
                    <h3 className="counter"> 17 </h3>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div> */}
                {/* skill shape */}
                {/* <div className="skill-shape dance">
                  <img src="assets/images/resource/skill-shape.png" alt />
                </div>
                <div className="skill-shape1 bounce-animate2">
                  <img src="assets/images/resource/all-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End  Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  Blog Area */}
      {/*==================================================*/}
      <div className="blog-area blog-new">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div className="-section-title mobile-center">
                <h2> DISCOVER NEWS</h2>
                <h2>
                  {" "}
                  Read Our <span> Blog </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              {/* <div className="-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {" "}
                    View all Blog <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-02.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> MEDIA & ENTERTAINMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> July 11 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a>Top Best 10 Tips for Learning at Work </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> By Admin </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-03.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> SCIENCE & TECHNOLOGY </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p>July 11 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Keep Up Your Learning Over Holidays </a>
                      </Link>{" "}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> By Admin </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog-04.jpg" alt />
                  <div className="blog-top-button">
                    <a href="#"> MANAGEMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> July 11 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {" "}
                      <Link legacyBehavior href="/blog-details">
                        <a>Famous Fictional Examples of Management Styles</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> By Admin </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {" "}
                        Learn More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
