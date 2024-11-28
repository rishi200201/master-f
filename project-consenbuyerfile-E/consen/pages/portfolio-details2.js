import React, { useState } from "react";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";

const EngineeringDetails = () => {
  // State for rating and hover effect
  const [rating, setRating] = useState(4.5); // Current rating (could be fetched from an API)
  const [hoverRating, setHoverRating] = useState(null); // Hover rating for visual effect
  const [activeTab, setActiveTab] = useState('about'); // Active tab state

  // Rating function to handle star click
  const handleRatingClick = (value) => {
    setRating(value);
  };

  // Handle hover effect on stars
  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const starStyle = {
    cursor: "pointer",
    fontSize: "24px",
    transition: "color 0.3s ease",
  };

  // Dynamic star rendering based on the rating and hover state
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = hoverRating || rating; // Use hoverRating if hovering, otherwise use the rating
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      const isFilled = i <= Math.floor(filledStars);
      const isHalfFilled = i === Math.floor(filledStars) + 1 && filledStars % 1 !== 0;

      stars.push(
        <span
          key={i}
          className={`star ${isFilled ? "filled" : isHalfFilled ? "half" : ""}`}
          style={{
            color: isFilled || isHalfFilled ? "#FFD700" : "#ccc",
            ...starStyle,
          }}
          onClick={() => handleRatingClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          {isHalfFilled ? "★" : "★"}
        </span>
      );
    }

    return stars;
  };

  const ratingCount = 120; // Assume there are 120 reviews (this would come from an API)

  const imageStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 15px 45px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
    display: 'block',
    margin: 'auto',
  };

  const imageHoverStyle = {
    transform: 'scale(1.1)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
  };

  const csdInfoStyle = {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    textAlign: 'justify',
    lineHeight: '1.8',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '250px',
    transition: 'transform 0.3s ease-in-out',
  };

  const titleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
    borderBottom: '3px solid #007bff',
    paddingBottom: '10px',
  };

  const courseCategoryStyle = {
    marginBottom: '50px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    textAlign: 'center',
  };

  const thStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '14px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'left'
  };

  const tdStyle = {
    padding: '14px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left'
  };

  const courses = [
   
    {
      category: 'School of Aviation Management',
      courses: [
        
          { code: "AS001", name: "Diploma in International Airline & Travel Management" },
          { code: "AS002", name: "Diploma in Airport Management" },
          { code: "AS003", name: "Diploma in Cabin Crew Management" },
          { code: "AS004", name: "Diploma in Air Cargo Practices & Documentation" },
          { code: "AS005", name: "Diploma in Domestic Airline & Travel Management" },
          { code: "AS006", name: "Diploma in Airline Travel & Tourism and Hospitality Management" },
          { code: "AS007", name: "Air Hostess Training" },
          { code: "AS008", name: "Diploma in Airport Ground Staff Training" },
          { code: "AS009", name: "Certificate in Air Fares & Ticketing" },
          { code: "AS010", name: "Diploma in Air Fare & Ticketing Management" },
          { code: "AS011", name: "Diploma in Aviation Safety" },
          { code: "AS012", name: "Diploma in Airline Management" },
          { code: "AS013", name: "Diploma in Air Cargo & Hotel Management" },
          { code: "AS014", name: "Diploma in Airport & Hotel Management" },
          { code: "AS015", name: "Diploma in Aviation & Hotel Management" },
          { code: "AS016", name: "Diploma in Air/Sea Cargo Management" },
          { code: "AS017", name: "Post Diploma in Airport Management" },
          { code: "AS018", name: "Diploma in Aviation and Hospitality Management" }
        
        
      ]
    }
  ];
  

  // Switch tab handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <Breadcumb pageName={"School of Aviation Management"} />
      <div className="case-study-details">
        <div className="container">
          <div className="case-study-intro">
            {/* Tab Navigation */}
            <ul className="nav nav-tabs" id="details-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                  id="about-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#about"
                  type="button"
                  role="tab"
                  aria-controls="about"
                  aria-selected={activeTab === 'about'}
                  onClick={() => handleTabChange('about')}
                >
                  About
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`}
                  id="courses-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#courses"
                  type="button"
                  role="tab"
                  aria-controls="courses"
                  aria-selected={activeTab === 'courses'}
                  onClick={() => handleTabChange('courses')}
                >
                  Courses
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'ea' ? 'active' : ''}`}
                  id="ea-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ea"
                  type="button"
                  role="tab"
                  aria-controls="ea"
                  aria-selected={activeTab === 'ea'}
                  onClick={() => handleTabChange('ea')}
                >
                 Eligibilty and Admission
                </button>
              </li>
              
              <li className="nav-item" role="presentation">
                {/* <button
                  className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                  id="reviews-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#reviews"
                  type="button"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected={activeTab === 'reviews'}
                  onClick={() => handleTabChange('reviews')}
                >
                  Reviews
                </button> */}
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content" id="details-tabs-content">
           {/* About Tab */}
           <div className={`tab-pane fade ${activeTab === 'about' ? 'show active' : ''}`} id="about" role="tabpanel" aria-labelledby="about-tab">
    <div className="row justify-content-center">
      <div className="col-12 col-md-12 col-lg-10 mb-5">
        <div className="csd-info" style={{ ...csdInfoStyle, maxWidth: '100%', textAlign: 'left' }}>
          
          {/* Image placed on top */}
          <img
            src="assets/images/project/plane.jpg"
            alt="School of Aviation Management"
            style={{
              ...imageStyle,
              transition: 'transform 0.3s ease',
              borderRadius: '8px', // Smooth rounded corners
              width: '100%', // Ensuring the image takes full container width
              height: 'auto' // Maintain aspect ratio
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />

          {/* Title */}
          <div className="csd-title pt-30 mb-4" style={{
              ...titleStyle,
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '1.8rem',
          }}>
            <h3>About School of Aviation Management</h3>
          </div>
          
          {/* Description paragraph */}
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            The School of Aviation Management is at the forefront of aviation education, offering specialized training in the management of airlines, airports, and the broader aviation industry. Our comprehensive curriculum provides students with the skills and knowledge needed to thrive in high-level aviation roles, including airport operations, air traffic control, and aircraft maintenance. We also cover critical areas such as fleet management, ground handling, hospitality, and in-flight services, equipping students to handle various challenges in the dynamic aviation sector.
          </p>

          {/* How you will skill-up list */}
          <h5 style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '0.75rem'
          }}>
            How You Will Skill-Up in Aviation Management:
          </h5>
          <ul style={{
            paddingLeft: '20px',
            listStyleType: 'disc',
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
            marginBottom: '1.5rem'
          }}>
            <li>Gain expertise in managing airport operations, air traffic, and airline logistics.</li>
            <li>Develop the ability to adapt to new technologies and trends in aviation management.</li>
            <li>Improve career prospects with knowledge of industry regulations and standards.</li>
            <li>Expand your network within the global aviation industry and build valuable connections.</li>
            <li>Enhance cross-cultural communication skills through international aviation exposure.</li>
            <li>Master the skills needed for high-demand roles in aviation safety, security, and ground services.</li>
          </ul>

          {/* Eligibility */}
          <h5 style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '0.75rem'
          }}>
            Who Can Take These Courses?
          </h5>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '1.1rem',
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            The course is open to anyone interested in pursuing a career in aviation management, particularly those looking to enhance their understanding of airport and airline operations. Students will gain comprehensive insights into aviation safety, regulations, aircraft maintenance, and the broader aviation business landscape, making them well-equipped to enter the industry.
          </p>
        </div>
      </div>
    </div>
</div>


              {/* Courses Tab */}
              <div className={`tab-pane fade ${activeTab === 'courses' ? 'show active' : ''}`} id="courses" role="tabpanel" aria-labelledby="courses-tab">
                {courses.map((category, index) => (
                  <div key={index} style={courseCategoryStyle}>
                    <h4>{category.category}</h4>
                    <table style={tableStyle}>
                      <thead>
                        <tr>
                          <th style={thStyle}>Course Code</th>
                          <th style={thStyle}>Course Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.courses.map((course, index) => (
                          <tr key={index}>
                            <td style={tdStyle}>{course.code}</td>
                            <td style={tdStyle}>{course.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>

              {/* eligible */}

              <div className={`tab-pane fade ${activeTab === 'ea' ? 'show active' : ''}`} id="ea" role="tabpanel" aria-labelledby="ea-tab">
  <div className="tab-content">
    {/* Eligibility Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Eligibility</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Anyone who is interested in learning marketing management, aviation law, airline management, airport management, and related fields is eligible to enroll in the course.
      </p>
    </section>

    {/* Education System Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Education System</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The course follows the American Academic Board Credit/GPA System, offering a structured academic framework recognized globally.
      </p>
    </section>

    {/* Exam Pattern Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Exam Pattern</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        You can choose from various learning modes including Online, Fast-track, or Self-paced, allowing you to progress at your own pace.
      </p>
    </section>

    {/* Course Fees Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Course Fees Include</h3>
      <ul className="ea-list" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Registration fees</li>
        <li> Course Materials (PDF Books)</li>
        <li> Exam fee</li>
        <li> Viva-voce</li>
        <li> Certificate upon completion</li>
      </ul>
    </section>
  </div>
</div>

    



              {/* Reviews Tab */}
              {/* <div className={`tab-pane fade ${activeTab === 'reviews' ? 'show active' : ''}`} id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div className="rating">
                  <h4>Overall Rating</h4>
                  <div className="stars">
                    {renderStars()}
                  </div>
                  <p>{ratingCount} Reviews</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EngineeringDetails;
