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
      category: 'Artificial Intelligence Certification Program',
      courses: [
        
        { code: "AI001", name: "Masters in Artificial Intelligence" },
        { code: "AI002", name: "Master Diploma in Artificial Intelligence" },
        { code: "AI003", name: "Advanced Diploma in Artificial Intelligence" },
        { code: "AI004", name: "Diploma in Artificial Intelligence" },
        { code: "AI005", name: "Certification in Artificial Intelligence" },
        { code: "AI006", name: "Short-Term Course in Artificial Intelligence" },
        
        { code: "CY001", name: "Advanced Diploma in Cyber Security" },
        { code: "CY002", name: "Diploma in Cyber Security" },
        { code: "CY003", name: "Certification in Cyber Security" },
        { code: "CY004", name: "Fundamentals in Cyber Security" },
        
        { code: "MI001", name: "Masters in Machine Learning" },
        { code: "MI002", name: "Master Diploma in Machine Learning" },
        { code: "MI003", name: "Advanced Diploma in Machine Learning" },
        { code: "MI004", name: "Diploma in Machine Learning" },
        { code: "MI005", name: "Certification in Machine Learning" },
        { code: "MI006", name: "Short-Term Course in Machine Learning" },
        
        { code: "OD001", name: "Masters in Ontology and Data Science" },
        { code: "OD002", name: "Master Diploma in Ontology and Data Science" },
        { code: "OD003", name: "Advanced Diploma in Ontology and Data Science" },
        { code: "OD004", name: "Diploma in Ontology and Data Science" },
        { code: "OD005", name: "Certification in Ontology and Data Science" },
        { code: "OD006", name: "Short-Term Course in Ontology and Data Science" }
        
        
        
      ]
    }
  ];
  

  // Switch tab handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <Breadcumb pageName={"Informatics and Data Management"} />
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
    <div className="col-12 col-md-12 col-lg-12 mb-4">
      <div className="csd-info" style={{ ...csdInfoStyle, maxWidth: '100%' }}>
        {/* Image placed on top */}
        <img
          src="assets/images/project/data.jpg"
          alt="School of Informatics and Data Management"
          style={{
            ...imageStyle,
            transition: 'transform 0.3s ease', 
            borderRadius: '8px',  // Adding border radius for smooth edges
            width: '100%', // Ensuring the image takes full container width
            height: 'auto'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Title */}
        <div className="csd-title pt-30 mb-4" style={{ ...titleStyle, fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.8rem' }}>
          <h3>About School of Informatics and Data Management</h3>
        </div>
        
        {/* Paragraph description */}
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The Informatics and Data Management is the world-class center in education through software and system approaches to nurture effective capabilities for the development of high-quality technologies. Our focus is on addressing challenges in Computer Science and Information Technology, with an emphasis on problem-solving and creative applications of computing techniques. We ensure our students get ample hands-on experience to understand the concepts better.
        </p>

        {/* How you will skill-up list */}
        <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>How you will skill-up in this Computing Engineering:</h5>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', marginBottom: '1.5rem' }}>
          <li>Learn and apply new programming languages and technologies.</li>
          <li>Explore real-time software project development strategies.</li>
          <li>Get hands-on experience in Open-source programming environments.</li>
          <li>Master essential topics like algorithms, networking, app design, web design, cloud computing, IoT, ML, and data analytics.</li>
          <li>Innovate and develop solutions to complex problems using cutting-edge technology.</li>
          <li>Enhance your career potential with skills essential for programming and software engineering roles.</li>
        </ul>

        {/* Eligibility */}
        <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Who can take these courses?</h5>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '2rem' }}>
          Anyone interested in learning the latest technologies in computing, enhancing their programming skills, or mastering advanced software systems and technologies is eligible to take these courses. Whether you're a beginner or looking to deepen your knowledge, this program is designed for all levels.
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
        Anyone who is passionate about exploring cutting-edge technologies and enhancing their skills in data science and informatics is eligible for this course.
      </p>
    </section>

    {/* Education System Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Education System</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The course follows an internationally recognized academic structure based on the American GPA/Credit system, ensuring a globally applicable standard of education.
      </p>
    </section>

    {/* Exam Pattern Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Exam Pattern</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Our exam pattern is designed for flexibility, with choices for Online, Fast-track, or Self-paced learning, allowing participants to learn at their own pace and convenience.
      </p>
    </section>

    {/* Course Fees Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Course Fees Include</h3>
      <ul className="ea-list" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', paddingLeft: '20px' }}>
        <li>Registration fees</li>
        <li>Course Material in PDF format</li>
        <li>Exam fee</li>
        <li>Viva-voce</li>
        <li>Certificate upon successful completion</li>
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
