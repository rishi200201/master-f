import React, { useState } from "react";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";

const EngineeringDetails = () => {
  // State for rating and hover effect
  const [rating, setRating] = useState(4.5); // Current rating (could be fetched from an API)
  const [hoverRating, setHoverRating] = useState(null); // Hover rating for visual effect

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
      category: "School of Automobile Engineering",
      courses: [
        { code: "AE001", name: "Automotive Electrical, Electronics and Microcontroller Systems" },
        { code: "AE002", name: "Automotive Components Design" },
        { code: "AE003", name: "Hybrid and Electric Vehicles" },
        { code: "AE004", name: "Design of Machine Elements and Transmission Systems" },
        { code: "AE005", name: "Autodesk Inventor" },
        { code: "AE006", name: "CADRE Analytic" },
        { code: "AE007", name: "SolidWorks" },
        { code: "AE008", name: "Alibre Inc" },
      ]
    },
    {
      category: "School of Biotech",
      courses: [
        { code: "BT001", name: "Bioprocess Engineering" },
        { code: "BT002", name: "Molecular Biology" },
        { code: "BT003", name: "Genetic Engineering and Genomics" },
        { code: "BT004", name: "Chemical Reaction Engineering" },
        { code: "BT005", name: "Jambw 1.1" },
        { code: "BT006", name: "AnnHyb v.4.942" },
        { code: "BT007", name: "RNAstructure 5.03" },
        { code: "BT008", name: "RASMOL 2.7.5" },
      ]
    },
    {
      category: "School of Chemical Engineering",
      courses: [
        { code: "CH001", name: "Chemical Engineering Thermodynamics" },
        { code: "CH002", name: "Material Science & Technology" },
        { code: "CH003", name: "Chemical Reaction Engineering" },
        { code: "CH004", name: "Process Instrumentation Dynamics and Control" },
        { code: "CH005", name: "Chemstations CHEMCAD" },
        { code: "CH006", name: "DWSIM – Chemical Process Simulator" },
        { code: "CH007", name: "MATLAB" },
        { code: "CH008", name: "Mathworks Simulink" },
      ]
    },
    {
      category: "School of Civil Engineering",
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
        { code: "CV010", name: "SketchUp" },
      ]
    },
    {
      category: "School of Computer Science and IT",
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
        { code: "CS022", name: "Android App Development" },
        { code: "CS023", name: "Advanced Java Programming" },
      ]
    },
    {
      category: "School of Electrical Engineering",
      courses: [
        { code: "EE001", name: "Microprocessors and Microcontrollers" },
        { code: "EE002", name: "Microprocessors and Microcontrollers" },
        { code: "EE003", name: "Electrical Drives" },
        { code: "EE004", name: "Industrial Automation and Networking" },
        { code: "EE005", name: "MATLAB" },
        { code: "EE006", name: "Simulink" },
        { code: "EE007", name: "Pspice" },
        { code: "EE008", name: "Multisim" },
        { code: "EE009", name: "ETAP" },
        { code: "EE010", name: "Power World Simulator" },
        { code: "EE011", name: "LabVIEW" },
      ]
    },
    {
      category: "School of Electronics and Communication Engineering",
      courses: [
        { code: "EC001", name: "Transmission Lines and Waveguides" },
        { code: "EC002", name: "Digital Communication" },
        { code: "EC003", name: "Wireless Communication" },
        { code: "EC004", name: "VLSI Design" },
        { code: "EC005", name: "MATLAB" },
        { code: "EC006", name: "Xilinx" },
        { code: "EC007", name: "VHDL software" },
      ]
    },
    {
      category: "School of Mechanical Engineering",
      courses: [
        { code: "ME001", name: "Design of Machine Elements" },
        { code: "ME002", name: "Heat and Mass Transfer" },
        { code: "ME003", name: "Design of Transmission Systems" },
        { code: "ME004", name: "Gas Dynamics and Jet Propulsion" },
        { code: "ME005", name: "Ansys" },
        { code: "ME006", name: "Autodesk AutoCAD" },
        { code: "ME007", name: "AutoCAD P&ID" },
        { code: "ME008", name: "CADMATIC hull and outfitting" },
      ]
    },
    {
      category: "Common Courses",
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
        { code: "CC010", name: "Setting Goals and Managing Time" },
      ]
    },
    {
      category: "Employability Training Courses",
      courses: [
        { code: "ETO001", name: "Long-term Course(AE,CH,CV,BT,ME)" },
        { code: "ETO002", name: "Short-term Course(AE,CH,CV,BT,ME)" },
        { code: "ETO003", name: "Crash Course(AE,CH,CV,BT,ME)" },
        { code: "ETC001", name: "Long-term Course(CS,EE,EC,IT)" },
        { code: "ETC002", name: "Short-term Course(CS,EE,EC,IT)" },
        { code: "ETC003", name: "Crash Course(CS,EE,EC,IT)" },
      ]
    }
  ];

  return (
    <Layout>
      <Breadcumb pageName={"School of Management"} />
      <div className="case-study-details">
        <div className="container">
          <div className="case-study-intro">
            {/* Image Section */}
            <div className="row justify-content-center">
              <div className="col-12" style={{ textAlign: 'center' }}>
                <div className="csd-thumb">
                  <img
                    src="assets/images/project/tec.jpg"
                    alt="School of Engineering & Technology"
                    className="img-fluid custom-img"
                    style={imageStyle}
                    onMouseOver={(e) => e.target.style.transform = imageHoverStyle.transform}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            </div>

            {/* About & Rating Section */}
            <div className="row justify-content-center">
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="csd-info" style={{ ...csdInfoStyle, textAlign: 'left' }}>
      <div className="csd-title pt-30 mb-4" style={titleStyle}>
        <h3>About School of Management</h3>
      </div>
      <p>
        We have incorporated flexibility in our curricula. As such we have an obligation to address the full range of higher education, namely:
        teaching and learning, research, and service to the community. The major element in our design of engineering education is teamwork and
        partnership. 
      </p>
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="csd-info" style={{ ...csdInfoStyle, textAlign: 'left' }}>
      <div className="csd-title pt-30 mb-4" style={titleStyle}>
        <h4>How Management Education Can Help</h4>
      </div>
      <p>
        Learning and employing new engineering skills and techniques. Explore the various strategies in real-time engineering implementation methods.
        Work effectively in cross-functional teams with more social responsibilities. Mastering in enactment of any engineering courses.
      </p>
    </div>
  </div>
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="csd-info" style={{ ...csdInfoStyle, textAlign: 'left' }}>
      <div className="csd-title pt-30 mb-4" style={titleStyle}>
        <h4>Who Can Take This Course?</h4>
      </div>
      <p>
        Anyone who would like to learn the latest technologies in the engineering era; would like to skill-up their engineering knowledges; would like to
        learn the basic to advanced engineering techniques, are eligible to take up the course.
      </p>
    </div>
  </div>
</div>


            {/* Courses Table */}
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="course-categories">
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
                          {category.courses.map((course, idx) => (
                            <tr key={idx}>
                              <td style={tdStyle}>{course.code}</td>
                              <td style={tdStyle}>{course.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EngineeringDetails;
