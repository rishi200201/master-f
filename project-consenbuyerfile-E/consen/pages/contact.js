import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Contact Us"} />

      {/* Contact Section */}
      <div className="contact-us py-90">
        <div className="container text-center">
          <h2 className="section-title text-uppercase font-weight-bold">We’d love to hear from you!</h2>
          <p className="section-description text-muted">
            No long wait lines, no blackholes for your emails. Our customer-first approach guarantees quick responses to every query, request, or comment. We are here to assist you!
          </p>
          <div className="row justify-content-center">
            {/* Contact Cards */}
            {[
              {
                imgSrc: "/assets/images/about/sqa.png.jpg",
                altText: "Eswatini Flag",
                title: "Address:",
                content: "Business Eswatini, No. 4, Malagwane Hill, Mbabane, Kingdom of Eswatini. <br /> Phone: +268 7844 6897 / +268 7828 6957",
              },
              {
                imgSrc: "/assets/images/about/sa.png.jpg",
                altText: "South Africa Flag",
                title: "Address:",
                content: "The GAPS, No. 38/A, Minerva Drive, Gillitts, 3610. KZN. Durban, South Africa <br /> Phone: +27 81 270 6832",
              },
              {
                imgSrc: "/assets/images/about/dubai.png.jpg",
                altText: "UAE Flag",
                title: "Address:",
                content: "Suite No. D 21, Elite Investment Zone, Mussafah 44, Abu Dhabi, United Arab Emirates <br /> Phone: +971 50 784 5157",
              },
              {
                imgSrc: "/assets/images/about/ind.png.jpg",
                altText: "India Flag",
                title: "Address:",
                content: "No. 91, Murugesanar Street, Thiruvalular Nagar, Mugaliwakkam, Chennai 600 125",
              },
              {
                imgSrc: "/assets/images/about/ind.png.jpg",
                altText: "India Flag",
                title: "Address:",
                content: "53/1B/48, Vinayak Nagar, Lane No. 1 New Sangavi, Pune 411061 Maharashtra India <br /> Phone: +91 9887 19511",
              },
              {
                imgSrc: "/assets/images/about/email.png",
                altText: "Email Icon",
                title: "Email:",
                content: "info@group.org",
              },
            ].map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="contact-card card shadow-sm rounded">
                  <div className="card-body text-center">
                    <img
                      src={item.imgSrc}
                      alt={item.altText}
                      className="flag-icon mb-3"
                      style={{ maxWidth: '60px', maxHeight: '60px' }}
                    />
                    <h5 className="card-title font-weight-bold">{item.title}</h5>
                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-section py-90 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="form-title text-uppercase font-weight-bold text-center">Let’s start a conversation</h3>
              <p className="form-description text-muted text-center mb-4">
                Fill out the form below, and our experts will get back to you shortly.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="text-danger">*</span></label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Website (Optional)</label>
                  <input
                    type="url"
                    className="form-control"
                    id="website"
                    placeholder="Enter your website (optional)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span className="text-danger">*</span></label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section py-90">
        <div className="container text-center">
          <h4 className="map-section-title font-weight-bold text-uppercase mb-4">Our Location</h4>
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
