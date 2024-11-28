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

const Index4 = () => {
  return (
    <Layout header={3} footer={3}>
      {/* Slider Area */}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="slider-content">
                <h1>International Certification For Professional Licensing Program</h1>
              </div>
              <div className="slider-button mt-5">
                {/* Optional Button Code */}
              </div>
            </div>
            {/* Slider Shape Elements */}
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

      {/* Why Choose Us Area */}
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row">
            {/* Text Content */}
            <div className="col-12">
              <div className="-section-title full-width-content">
                <p>
                  <strong>T</strong>he Masterminds panel of academic and professional experts have designed licensing programs to certify credential awards to individuals as well as professionals. Our main aim is to establish core objectives and processes for assessing occupational competence that are internationally accepted for identification, codification, and validation of skills and competencies in a variety of occupations.
                </p>
                <p>
                  We at Masterminds want to provide an opportunity for individuals to choose their preferred Masterminds international certified license to upskill and provide an opportunity for professionals to become recognized global individuals in the international domain with certified credentials to boost your profession to the next level.
                </p>

                <h5>The Benefits</h5>
                <p>
                  We aim to respond quickly to evolving market forces and constantly review the changes in occupational competency requirements of the global marketplace and ensure you leave Masterminds with credible authentication and documentation of your skills, competencies, and professional practices.
                </p>
              </div>
            </div>

            {/* Certification Cards */}
            <div className="col-9">
              <div className="why-choose-us-thumb">
                <div className="certification-row">
                  {/* Certification 1 */}
                  <div className="certification-card">
                    <h3>The Masterminds International Certified Professional (Foundation)</h3>
                    <a href="" className="btn btn-primary">Read More</a>
                    <a href="" className="btn btn-success">Apply Now</a>
                  </div>

                  {/* Certification 2 */}
                  <div className="certification-card">
                    <h3>The Masterminds International Certified Lead Professional (Advanced)</h3>
                    <a href="" className="btn btn-primary">Read More</a>
                    <a href="" className="btn btn-success">Apply Now</a>
                  </div>

                  {/* Certification 3 */}
                  <div className="certification-card">
                    <h3>The Masterminds International Certified Executive Professional</h3>
                    <a href="" className="btn btn-primary">Read More</a>
                    <a href="" className="btn btn-success">Apply Now</a>
                  </div>

                  {/* Certification 4 */}
                  <div className="certification-card">
                    <h3>The Masterminds International Certified Executive Specialist</h3>
                    <a href="" className="btn btn-primary">Read More</a>
                    <a href="" className="btn btn-success">Apply Now</a>
                  </div>

                  {/* Certification 5 */}
                  <div className="certification-card">
                    <h3>The Masterminds International Certified Professional / Management Specialist</h3>
                    <a href="" className="btn btn-primary">Read More</a>
                    <a href="" className="btn btn-success">Apply Now</a>
                  </div>

                  {/* Certification 6 */}
                  <div className="certification-card">
                    <h3>The Masterminds International Certified Professional / Management Expert</h3>
                    <a href="" className="btn btn-primary">Read More</a>
                    <a href="" className="btn btn-success">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for the component */}
      <style jsx>{`
        .full-width-content {
          margin-bottom: 40px;
        }

        .certification-row {
          display: flex;
          flex-wrap: wrap;
          gap: 50px; /* Adjust the space between the cards */
          justify-content: space-evenly; /* Center-align the certification cards */
        }

        .certification-card {
          flex: 1 1 calc(33.333% - 30px); /* 3 cards per row */
          border: 1px solid #ddd;
          padding: 30px;
          text-align: center;
          box-sizing: border-box;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .certification-card h3 {
          font-size: 1.25rem;
          margin-bottom: 20px;
        }

        .certification-card .btn {
          margin-top: auto;
          margin-right: px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .certification-card {
            flex: 1 1 calc(50% - 30px); /* 2 cards per row on tablet devices */
          }
        }

        @media (max-width: 576px) {
          .certification-card {
            flex: 1 1 100%; /* 1 card per row on small devices */
          }
        }

        .btn {
          display: inline-block;
          padding: 10px 20px;
          font-size: 1rem;
          text-decoration: none;
          color: #fff;
          border-radius: 5px;
        }

        .btn-primary {
          background-color: #007bff;
        }

        .btn-success {
          background-color: #28a745;
        }
      `}</style>
    </Layout>
  );
};

export default Index4;
