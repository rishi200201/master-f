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
      category: 'Automotive Engineering',
      courses: [
        { code: "AE001", name: "Automotive Electrical, Electronics and Microcontroller Systems" },
        { code: "AE002", name: "Automotive Components Design" },
        { code: "AE003", name: "Hybrid and Electric Vehicles" },
        { code: "AE004", name: "Design of Machine Elements and Transmission Systems" },
        { code: "AE005", name: "Autodesk Inventor" },
        { code: "AE006", name: "CADRE Analytic" },
        { code: "AE007", name: "SolidWorks" },
        { code: "AE008", name: "Alibre Inc" }
      ]
    },
    {
      category: 'Biotechnology',
      courses: [
        { code: "BT001", name: "Bioprocess Engineering" },
        { code: "BT002", name: "Molecular Biology" },
        { code: "BT003", name: "Genetic Engineering and Genomics" },
        { code: "BT004", name: "Chemical Reaction Engineering" },
        { code: "BT005", name: "Jambw 1.1" },
        { code: "BT006", name: "AnnHyb v.4.942" },
        { code: "BT007", name: "RNAstructure 5.03" },
        { code: "BT008", name: "RASMOL 2.7.5" }
      ]
    },
    {
      category: 'Chemical Engineering',
      courses: [
        { code: "CH001", name: "Chemical Engineering Thermodynamics" },
        { code: "CH002", name: "Material Science & Technology" },
        { code: "CH003", name: "Chemical Reaction Engineering" },
        { code: "CH004", name: "Process Instrumentation Dynamics and Control" },
        { code: "CH005", name: "Chemstations CHEMCAD" },
        { code: "CH006", name: "DWSIM – Chemical Process Simulator" },
        { code: "CH007", name: "MATLAB" },
        { code: "CH008", name: "Mathworks Simulink" }
      ]
    },
    {
      category: 'Civil Engineering',
      courses: [
        { code: "CV001", name: "Transportation Engineering" },
        { code: "CV002", name: "Advanced Structural Analysis" },
        { code: "CV003", name: "Design of Reinforced Concrete Elements" },
        { code: "CV004", name: "Design of Steel Structures" },
        { code: "CV005", name: "Civil 3D" },
        { code: "CV006", name: "MicroStation" },
        { code: "CV007", name: "OpenRoads Designer" },
        { code: "CV008", name: "Site3D" },
        { code: "CV009", name: "Auto CAD" },
        { code: "CV010", name: "SketchUp" }
      ]
    },
    {
      category: 'Computer Science and IT',
      courses: [
        { code: "CS001", name: "User Interface Technologies" },
        { code: "CS002", name: "Machine Learning Techniques" },
        { code: "CS003", name: "Cryptography and Network Security" },
        { code: "CS004", name: "Datamining and Data warehousing" },
        { code: "CS005", name: "Fundamentals of AI" },
        { code: "CS006", name: "Android Development with Kotlin" },
        { code: "CS007", name: "Creative Thinking" },
        { code: "CS008", name: "Problem Solving Techniques" },
        { code: "CS009", name: "Introduction to Python Programming" },
        { code: "CS010", name: "Introduction to Angular JS" },
        { code: "CS011", name: "Introduction to React JS" },
        { code: "CS012", name: "Fundamentals of AI & ML" },
        { code: "CS013", name: "Introduction to Big Data Analytics" },
        { code: "CS014", name: "Oracle – Programming using PL/SQL" },
        { code: "CS015", name: "AWS: SysOps Administrator – Associate" },
        { code: "CS016", name: "AWS: Developer – Associate" },
        { code: "CS017", name: "Data Science using R" },
        { code: "CS018", name: "Fundamentals of Machine Learning" },
        { code: "CS019", name: "Mobile Application Development" },
        { code: "CS020", name: "Fundamentals of R" },
        { code: "CS021", name: "Azure – Fundamentals" },
        { code: "CS022", name: "Azure AI – Fundamentals" },
        { code: "CS023", name: "Azure Data – Fundamentals" },
        { code: "CS024", name: "Data Science with Python" },
        { code: "CS025", name: "Introduction to Ethical Hacking" },
        { code: "CS026", name: "Introduction to Cybersecurity" },
        { code: "CS027", name: "Networking Essentials" },
        { code: "CS028", name: "Oracle – Database design & Programming with SQL" },
        { code: "CS029", name: "Oracle – Java Programming" },
        { code: "CS030", name: "Speech, audio and Image Processing using Deep Learning" },
        { code: "CS031", name: "NLP with Machine Learning" },
        { code: "CS032", name: "Kick Start Session on C for Beginners" },
        { code: "CS033", name: "Advance C Programming" },
        { code: "CS034", name: "Solving Coding problem statements using C" },
        { code: "CS035", name: "Kick Start Session on C++ for Beginners" },
        { code: "CS036", name: "Advanced C++ Programming" },
        { code: "CS037", name: "Solving Coding problem statements using C++" },
        { code: "CS038", name: "Kick Start Session on Java for Beginners" },
        { code: "CS039", name: "Advanced Java Programming" },
        { code: "CS040", name: "Solving Coding problem statements using Java" },
        { code: "CS041", name: "Quickbooks Accountants for Beginners" },
        { code: "CS042", name: "Kick Start Session on Python for Beginners" },
        { code: "CS043", name: "Advanced Python" },
        { code: "CS044", name: "Python and Introduction to Django" },
        { code: "CS045", name: "Programming using PHP" },
        { code: "CS046", name: "Solving Coding problem statements using Python" },
        { code: "CS047", name: "Internet of things (IOT)" },
        { code: "CS048", name: "Cloud Graphic Design and Interactive Media" },
        { code: "CS049", name: "Kick Start Session on C# and ASP.Net" },
        { code: "CS050", name: "Advanced C# and ASP.Net" },
        { code: "CS051", name: "Cyber Security" },
        { code: "CS052", name: "Entrepreneurship Development and Start-ups" },
        { code: "CS053", name: "Data Communication and Networking" },
        { code: "CS054", name: "Linux Server Administration" },
        { code: "CS055", name: "Wireless Communication" },
        { code: "CS056", name: "Software Engineering" },
        { code: "CS057", name: "Statistics for Data Analytics" },
        { code: "CS058", name: "Hardware & Networking" },
        { code: "CS059", name: "Deep Learning using Python Programming" },
        { code: "CS060", name: "Artificial Intelligence and Deep Learning" },
        { code: "CS061", name: "IoT Applications with Blockchain Techniques" }
      ]
    },
    {
      category: 'Electrical and Electronics Engineering',
      courses: [
        { code: "EE001", name: "Power System Analysis" },
        { code: "EE002", name: "Microprocessors and Microcontrollers" },
        { code: "EE003", name: "Electrical Drives" },
        { code: "EE004", name: "Industrial Automation and Networking" },
        { code: "EE005", name: "MATLAB" },
        { code: "EE006", name: "Simulink" },
        { code: "EE007", name: "Pspice" },
        { code: "EE008", name: "Multisim" },
        { code: "EE009", name: "ETAP" },
        { code: "EE010", name: "Power World Simulator" },
        { code: "EE011", name: "LabVIEW" }
      ]
    },
    {
      category: 'Electronics and Communication Engineering',
      courses: [
        { code: "EC001", name: "Transmission Lines and Waveguides" },
        { code: "EC002", name: "Digital Communication" },
        { code: "EC003", name: "Wireless Communication" },
        { code: "EC004", name: "VLSI Design" },
        { code: "EC005", name: "MATLAB" },
        { code: "EC006", name: "Xilinx" },
        { code: "EC007", name: "VHDL software" }
      ]
    },
    {
      category: 'Mechanical Engineering',
      courses: [
        { code: "ME001", name: "Design of Machine Elements" },
        { code: "ME002", name: "Heat and Mass Transfer" },
        { code: "ME003", name: "Design of Transmission Systems" },
        { code: "ME004", name: "Gas Dynamics and Jet Propulsion" },
        { code: "ME005", name: "Ansys" },
        { code: "ME006", name: "Autodesk AutoCAD" },
        { code: "ME007", name: "AutoCAD P&ID" },
        { code: "ME008", name: "CADMATIC hull and outfitting" }
      ]
    },
    {
      category: 'Common Courses',
      courses: [
        { code: "CC001", name: "Art of Writing Research Paper – Methods & Solution" },
        { code: "CC002", name: "Overall Personal & Professional Development" },
        { code: "CC003", name: "Stress Management" },
        { code: "CC004", name: "Emotional Intelligence" },
        { code: "CC005", name: "Leadership Skills" },
        { code: "CC006", name: "Presentation Skills" },
        { code: "CC007", name: "MS Office for Professionals" },
        { code: "CC008", name: "MS Excel Skills for Beginners" },
        { code: "CC009", name: "MS Excel Skills for Professionals" },
        { code: "CC010", name: "Setting Goals and Managing Time" }
      ]
    },
    {
      category: 'Employability Training Courses',
      courses: [
        { code: "ETO001", name: "Long-term Course(AE,CH,CV,BT,ME)" },
        { code: "ETO002", name: "Short-term Course(AE,CH,CV,BT,ME)" },
        { code: "ETO003", name: "Crash Course(AE,CH,CV,BT,ME)" },
        { code: "ETC001", name: "Long-term Course(CS,EE,EC,IT)" },
        { code: "ETC002", name: "Short-term Course(CS,EE,EC,IT)" },
        { code: "ETC003", name: "Crash Course(CS,EE,EC,IT)" }
      ]
    }
  ];
  

  // Switch tab handler
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <Breadcumb pageName={" Engineering & Technology Details"} />
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
          src="assets/images/project/tec.jpg"
          alt="School of Engineering"
          style={{
            ...imageStyle,
            transition: 'transform 0.3s ease', 
            borderRadius: '8px', // Smooth rounded corners
            width: '100%', // Full width for responsiveness
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
          <h3>About the School of Engineering & Technology</h3>
        </div>
        
        {/* Description paragraph */}
        <p style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.1rem',
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          The School of Engineering & Technology offers a dynamic and flexible curriculum designed to meet the evolving demands of the industry. Our programs blend theoretical foundations with practical experience, ensuring that students are well-prepared for the challenges of tomorrow's technological landscape. We focus on teamwork, innovation, and real-world applications, equipping our students with the skills necessary to excel in various engineering disciplines. From communication skills to cutting-edge technology seminars, we provide a holistic education for future engineers.
        </p>

        {/* How you will skill-up list */}
        <h5 style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '0.75rem'
        }}>
          How You Will Skill-Up in Engineering & Technology:
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
          <li>Master core engineering concepts and techniques that drive industry innovation.</li>
          <li>Apply real-time engineering methods to solve complex problems in real-world scenarios.</li>
          <li>Collaborate with diverse teams on projects that emphasize teamwork and social responsibility.</li>
          <li>Gain hands-on experience through industry visits, internships, and engineering workshops.</li>
          <li>Develop creative solutions to current and future engineering challenges.</li>
          <li>Enhance your problem-solving and critical thinking abilities through practical applications.</li>
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
          The courses are open to anyone passionate about the field of engineering, eager to learn advanced technological concepts, and ready to expand their skill set. If you are interested in gaining knowledge from foundational to advanced engineering principles, this program is perfect for you.
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
        Anyone who is eager to learn the latest engineering techniques and tools, improve their engineering skills, and master both basic and advanced engineering methods is eligible to enroll in the course.
      </p>
    </section>

    {/* Education System Section */}
    <section className="ea-section mb-4">
      <h3 className="ea-heading" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '1.6rem', color: '#333', marginBottom: '1rem' }}>Education System</h3>
      <p className="ea-text" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        The course follows the American Academic Board Credit/GPA System, providing a structured and globally recognized academic framework.
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
