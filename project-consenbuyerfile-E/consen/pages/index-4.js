import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import {
  brandListProps2,
  heroSlider,
  testimonial_list_slider,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const CaseStudies2 = dynamic(
  () => import("@/src/components/isotope/CaseStudies2"),
  {
    ssr: false,
  }
);
const Index4= () => {
  return (
    <Layout header={3} footer={3}>
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-120">
              <div className="slider-content">
                <h1> 360° Software Solution </h1>
                <h1>
                  {" "}
                   {/* <span> Management Certifications</span>{" "} */}
                </h1>
                {/* <p>
                ISO International Quality Management Certifications
                </p> */}
              </div>
              <div className="slider-button mt-5">
                {/* <Link legacyBehavior href="/service">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> Discover More{" "}
                  </a>
                </Link> */}
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/shape2.png" alt="" />
              </div>
              <div className="slider-shape-thumb4">
                <img src="assets/images/slider/shape3.png" alt="" />
              </div>
              <div className="slider-shape-thumb5 dance">
                <img src="assets/images/slider/circle1.png" alt="" />
              </div>
              <div className="slider-shape-thumb6 bounce-animate">
                <img src="assets/images/slider/circle2.png" alt="" />
              </div>
              <div className="slider-shape-thumb7 bounce-animate2">
                <img src="assets/images/slider/circle3.png" alt="" />
              </div>
              <div className="slider-shape-thumb8 bounce-animate3">
                <img src="assets/images/slider/white-dot.png" alt="" />
              </div>
              <div className="slider-shape-thumb9 ">
                <img src="assets/images/slider/line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End  slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  feature Area */}
      {/*==================================================*/}
      {/* <div className="feature-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv1.png" alt />
                </div>
                <div className="single-feature-content">
                  <h3>01</h3>
                  <h2>Live Chat Platforms</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv2.png" alt />
                </div>
                <div className="single-feature-content">
                  <h3>02</h3>
                  <h2>Ask Now Professionals</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv3.png" alt />
                </div>
                <div className="single-feature-content">
                  <h3>03</h3>
                  <h2>Get Technical Supports</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End  feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End  about Area */}
      {/*==================================================*/}
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="-section-title">
                <h5> Why Choose Us? </h5>
                <h2> How can we help your   </h2>
                <h2>
                  {" "}
                  business <span> grow </span>
                </h2>
                {/* <p className="choose-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p> */}
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>  Establishing Consistency </span>
                   <p className="choose-text1"> We develop consistent standards and processes that go hand-in-hand with the values of the organization.</p>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>  Better supplier relationships</span>
                    <p className="choose-text1">We assist you in addressing challenges, concerns, and ideas upfront to make supplier relationships stronger.</p>

                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>
                    Improved record keeping</span>
                    <p className="choose-text1">We help you comply with record-keeping requirements, avoid security risks, and improve quality.</p>

                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>  International recognition</span>
                    <p className="choose-text1"> We help you qualify for the ISO certification that further helps build trust among your international customers.

</p>

                  </li>
                </ul>
              </div>
              {/* <div className="why-choose-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>*/}
            </div> 
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-thumb">
                <img src="assets/images/resource/why-choose.png" alt />
                {/* choose shape thumb */}
                <div className="why-choose-us-image">
                  <div className="why-choose-us-shape-thumb bounce-animate">
                    <img src="assets/images/resource/all-shape2.png" alt />
                  </div>
                  {/* <div className="why-choose-us-shape-thumb2 rotateme">
                    <img src="assets/images/resource/case-shape.png" alt />
                  </div> */}
                  {/* <div className="why-choose-us-shape-thumb3 bounce-animate2">
                    <img src="assets/images/resource/case-shape2.png" alt />
                  </div> */}
                  <div className="why-choose-us-shape-thumb4">
                    <img src="assets/images/about/about-shape4.png" alt />
                  </div>
                </div>
                {/* end choose shape thumb */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End Consen Service Area */}
      {/*==================================================*/}
      <div className="service-area new-style">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="-section-title upper text-center mb-40">
          <h5>WHAT WE DO</h5>
          <h2>Delivering an Advanced Focus on</h2>
          <h2>
            The Quality of <span>OUTPUTS</span> to Customers
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          {/* <div className="service-box-thumb">
            <img src="assets/images/resource/sr1.jpg" alt="Detailed Analysis" />
          </div> */}
          <div className="service-icon-thumb">
            <img src="assets/images/resource/srv1.png" alt="Detailed Analysis Icon" />
          </div>
          <div className="service-content">
            <h2>Detailed Analysis</h2>
            <p>
              The process approach includes monitoring, measurements, analysis, and evaluation of existing systems.
            </p>
            {/* <Link legacyBehavior href="/service">
              <a>Read More</a>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          {/* <div className="service-box-thumb">
            <img src="assets/images/resource/sr2.jpg" alt="Improving Risk Management" />
          </div> */}
          <div className="service-icon-thumb">
            <img src="assets/images/resource/srv2.png" alt="Improving Risk Management Icon" />
          </div>
          <div className="service-content">
            <h2>Improving Risk Management</h2>
            <p>
              We provide a risk management framework that increases the ability to anticipate unexpected events.
            </p>
            {/* <Link legacyBehavior href="/service">
              <a>Read More</a>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          {/* <div className="service-box-thumb">
            <img src="assets/images/resource/sr3.jpg" alt="Identifying Improvements" />
          </div> */}
          <div className="service-icon-thumb">
            <img src="assets/images/resource/srv3.png" alt="Identifying Improvements Icon" />
          </div>
          <div className="service-content">
            <h2>Identifying Improvements</h2>
            <p>
              We help in identifying opportunities for improvement to optimize and improve existing business processes.
            </p>
            
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-service-box">
          {/* <div className="service-box-thumb">
            <img src="assets/images/resource/sr3.jpg" alt="Integrated ISO Standards" />
          </div> */}
          <div className="service-icon-thumb">
            <img src="assets/images/resource/srv3.png" alt="Integrated ISO Standards" />
          </div>
          <div className="service-content">
            <h2>Integrated ISO Standards</h2>
            <p>
            We help organisations speed up the ISO Standards implementation process with clarified documentation requirements.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/*==================================================*/}
      {/* End Consen Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  Skills Area Css */}
      {/*==================================================*/}
      <div className="skill-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="extra-animation-div">
                {/* <div className="-section-title white">
                  <h5>POPULAR SKILLS</h5>
                  <h2> We Are Professionals And </h2>
                  <h2>
                    {" "}
                    more <span>Experiences</span>
                  </h2>
                </div> */}
                {/* <div className="dreamit-smart-title pt-2">
                  <p className="slill-text">
                    Continually generate 2.0 communities and client-focused
                    products. In synergize strategic manufactured products
                    whereas levera.
                  </p>
                </div> */}
              </div>
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img src="assets/images/resource/skill.png" alt />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  {/* <div className="skill-title">
                    <h3 className="counter">
                      {" "}
                      <Counter end={17} />{" "}
                    </h3>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  Call Do Action Area Css */}
      {/*==================================================*/}
      <div className="call-do-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="-section-title white upper text-center mb-40">
                <h5> CONtACT US</h5>
                {/* <h2> High Quality Services And Products</h2> */}
                <h2>
                  {" "}
                  That We Stand <span> Behind </span>
                </h2>
              </div>
              <div className="new-button text-center">
                <Link legacyBehavior href="/contact">
                  <a>Contact US Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End  Call Do Action Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  case study Area */}
      {/*==================================================*/}
      {/* <div className="portfolio-area">
        <div className="container-fluid">
          <CaseStudies2 />
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End  case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  Testimonial Area */}
      {/*==================================================*/}
      
    </Layout>
  );
};
export default Index4;
