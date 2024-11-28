import Counter from "@/src/components/Counter";
import Faqs from "@/src/components/Faqs";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
const CaseStudies2 = dynamic(
  () => import("@/src/components/isotope/CaseStudies2"),
  {
    ssr: false,
  }
);

const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-120">
              <div className="slider-content">
                <h1>Global Business Network Program</h1>
                <h1>
                  <span>Streamline Connections & Collaborations</span>
                </h1>
                <h2>To Deepen Market Visibility</h2>
              </div>
            </div>
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
              <div className="slider-shape-thumb9">
                <img src="assets/images/slider/line.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Feature Area */}
      {/* <div className="feature-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv1.png" alt="" />
                </div>
                <div className="single-feature-content">
                  <h2>Professional Associations</h2>
                  <p>Networking and collaboration opportunities to attend events and meet others in your field.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv2.png" alt="" />
                </div>
                <div className="single-feature-content">
                  <h2>Strong Contact Networks</h2>
                  <p>We help you network your way to success by building a strong community of contacts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv3.png" alt="" />
                </div>
                <div className="single-feature-content">
                  <h2>Global Networking Events</h2>
                  <p>Attend high-quality executive networking events for senior business professionals and increase your brand reach.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/fv4.png" alt="" />
                </div>
                <div className="single-feature-content">
                  <h2>Community Building</h2>
                  <p>We help you build or be a part of business communities that foster business relationships at a whole new level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Feature Area */}
      {/* Start Why Choose Us Area */}
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="-section-title">
                <h5>How We Can Help</h5>
                <h2>How can we help your business grow</h2>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Improve Business Connections</span>
                    <p>Meet potential business partners and develop new opportunities.</p>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Strengthening Relationships</span>
                    <p>We assist you in identifying shared goals and values to gain a large volume of referrals.</p>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Shared Knowledge</span>
                    <p>Business networking helps foster innovation and productivity.</p>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />
                    <span>Solutions to Business Problems</span>
                    <p>Tackling the complexity of significant business issues can be done with a pool of talented people you can find while you network.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-thumb">
                <img src="assets/images/resource/why-choose.png" alt="" />
                <div className="why-choose-us-image">
                  <div className="why-choose-us-shape-thumb bounce-animate">
                    <img src="assets/images/resource/all-shape2.png" alt="" />
                  </div>
                  {/* <div className="why-choose-us-shape-thumb2 rotateme">
                    <img src="assets/images/resource/case-shape.png" alt="" />
                  </div>
                  <div className="why-choose-us-shape-thumb3 bounce-animate2">
                    <img src="assets/images/resource/case-shape2.png" alt="" />
                  </div> */}
                  <div className="why-choose-us-shape-thumb4">
                    <img src="assets/images/about/about-shape4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Why Choose Us Area */}
      {/* Start Service Area */}
      <div className="service-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="-section-title upper text-center mb-40">
                <h5>WHAT WE DO</h5>
                <h2>Streamline Connections & Collaborations</h2>
                <h2>
                  To Deepen Market <span>Visibility</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                {/* <div className="service-box-thumb">
                  <img src="assets/images/resource/sr1.jpg" alt="Professional Associations" />
                </div> */}
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv1.png" alt="Professional Associations Icon" />
                </div>
                <div className="service-content">
                  <h2>Professional Associations</h2>
                  <p>Networking and collaboration opportunities to attend events and meet others in your field.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                {/* <div className="service-box-thumb">
                  <img src="assets/images/resource/sr2.jpg" alt="Strong Contact Networks" />
                </div> */}
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv2.png" alt="Strong Contact Networks Icon" />
                </div>
                <div className="service-content">
                  <h2>Strong Contact Networks</h2>
                  <p>We help you network your way to success by building a strong community of contacts.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                {/* <div className="service-box-thumb">
                  <img src="assets/images/resource/sr3.jpg" alt="Global Networking Events" />
                </div> */}
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv3.png" alt="Global Networking Events Icon" />
                </div>
                <div className="service-content">
                  <h2>Global Networking Events</h2>
                  <p>Attend high-quality executive networking events for senior business professionals and increase your brand reach.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                {/* <div className="service-box-thumb">
                  <img src="assets/images/resource/sr3.jpg" alt="Global Networking Events" />
                </div> */}
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv3.png" alt="Global Networking Events Icon" />
                </div>
                <div className="service-content">
                  <h2>Community building</h2>
                  <p>We help you build or be a part of business communities that foster business relationships at a whole new level.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area */}
      {/* Start Skills Area */}
      <div className="skill-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img src="assets/images/resource/skill.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Skills Area */}
      {/* Start Call to Action Area */}
      <div className="call-do-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="-section-title white upper text-center mb-40">
                <h5>CONTACT US</h5>
                <h2>That We Stand <span>Behind</span></h2>
              </div>
              <div className="new-button text-center">
                <Link legacyBehavior href="/contact">
                  <a>Contact Us Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Call to Action Area */}
      {/* Start Testimonial Area */}
      {/* Add your Testimonial content here */}
    </Layout>
  );
};

export default Index3;
