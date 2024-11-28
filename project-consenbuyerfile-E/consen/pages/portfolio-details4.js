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
      category: 'German Language Course',
      courses: [
        { code: "GE001", name: "German A1 course" },
        { code: "GE002", name: "German A2 course" },
        { code: "GE003", name: "German B1 course" },
        { code: "GE004", name: "German B2 course" },
        { code: "GE005", name: "German C1 course" }
      ]
    },
    {
      category: 'French Language Course',
      courses: [
        { code: "FR001", name: "French A1 course" },
        { code: "FR002", name: "French A2 course" },
        { code: "FR003", name: "French B1 course" },
        { code: "FR004", name: "French B2 course" },
        { code: "FR006", name: "French C1 course" }
      ]
    },
    {
      category: 'Spanish Language Course',
      courses: [
        { code: "SP001", name: "Spanish A1 course" },
        { code: "SP002", name: "Spanish A2 course" },
        { code: "SP003", name: "Spanish B1 course" },
        { code: "SP004", name: "Spanish B2 course" },
        { code: "SP005", name: "Spanish C1 course" }
      ]
    },
    {
      category: 'Japanese Language Course',
      courses: [
        { code: "JP001", name: "Japanese N5 Level" },
        { code: "JP002", name: "Japanese N4 Level" },
        { code: "JP003", name: "Japanese N3 Level" },
        { code: "JP004", name: "Japanese N2 Level" },
        { code: "JP005", name: "Japanese N1 Level" }
      ]
    },
    {
      category: 'English Speaking Course',
      courses: [
        { code: "EG001", name: "English Grammar" },
        { code: "EG002", name: "English Communication Skills" },
        { code: "EG003", name: "English Personality Development & Public Speaking" }
      ]
    },
    {
      category: 'Dutch Language Course',
      courses: [
        { code: "DU001", name: "Dutch A1 Level" },
        { code: "DU002", name: "Dutch A2 Level" },
        { code: "DU003", name: "Dutch B1 Level" },
        { code: "DU004", name: "Dutch B2 Level" }
      ]
    },
    {
      category: 'IELTS Preparation Course',
      courses: [
        { code: "IE001", name: "Reading" },
        { code: "IE002", name: "Writing" },
        { code: "IE003", name: "Listening" },
        { code: "IE004", name: "Speaking" }
      ]
    },
    {
      category: 'Mandarin Language Course',
      courses: [
        { code: "MA001", name: "Introduction to Mandarin" },
        { code: "MA002", name: "HSK Level 1" },
        { code: "MA003", name: "HSK Level 2" },
        { code: "MA004", name: "HSK Level 3" }
      ]
    }
  ];
  

  // Switch tab handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <Breadcumb pageName={"School of International Languages"} />
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
                  data-bs-target="#reviews"School of International Languages
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
          src="assets/images/project/Untitled-design-5 (1).png"
          alt="School of International Languages"
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
          <h3>About School of International Languages</h3>
        </div>
        
        {/* Paragraph description */}
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The School of International Languages is a world-class center in education, offering a comprehensive understanding of the skills and concepts associated with a broad spectrum of international language services. We provide intuitive knowledge in areas like verb conjugation, articles, possessive adjectives, demonstrative adjectives, and prepositions. Through our courses, you will gain the ability to introduce yourself and engage in conversations about seasons, time, counting, hobbies, clothing, and more.
        </p>

        {/* How you will skill-up list */}
        <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>How you will skill-up in this International Languages:</h5>
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', marginBottom: '1.5rem' }}>
          <li>Boost self-confidence to travel anywhere in the world for education or employment.</li>
          <li>Enhance the ability to multi-task and juggle various responsibilities.</li>
          <li>Improve performance in other academic areas by mastering new languages.</li>
          <li>Open up better career choices by acquiring multilingual skills.</li>
          <li>Increase networking skills with a deeper understanding of global cultures.</li>
          <li>Enhance connections to other cultures through language immersion.</li>
          <li>Foster creativity and cognitive flexibility by learning new languages.</li>
        </ul>

        {/* Eligibility */}
        <h5 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>Who can take these courses?  </h5>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '2rem' }}>
          Anyone who wants to improve their ability to speak international languages, broaden their educational opportunities abroad, or gain the chance to work in other countries is eligible to take up the course.
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
                            <td style={tdStyle}>{course.name}</td> <div className={`tab-pane fade ${activeTab === 'ea' ? 'show active' : ''}`} id="ea" role="tabpanel" aria-labelledby="ea-tab">
  <div className="tab-content">
    {/* Eligibility Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Eligibility</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Anyone who likes to learn foreign languages with quality, affordable education fostering personal and social development is eligible for this course.
      </p>
    </section>

    {/* Education System Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Education System</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The course follows the American Academic Board Credit/GPA System, offering a structured academic framework for all participants.
      </p>
    </section>

    {/* Exam Pattern Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Exam Pattern</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The exam pattern is flexible, offering options such as Online, Fast-track, or Self-paced learning, allowing students to progress at their own speed.
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
        Anyone who likes to learn foreign languages with quality, affordable education fostering personal and social development is eligible for this course.
      </p>
    </section>

    {/* Education System Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Education System</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The course follows the American Academic Board Credit/GPA System, offering a structured academic framework for all participants.
      </p>
    </section>

    {/* Exam Pattern Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Exam Pattern</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The exam pattern is flexible, offering options such as Online, Fast-track, or Self-paced learning, allowing students to progress at their own speed.
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
