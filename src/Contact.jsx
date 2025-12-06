import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title fade-in-up">
        <span className="highlighted-text">Get In Touch</span>
      </h2>

      {/* The Sliding Interaction Card remains the centerpiece */}
      <div className="contact-card slide-in-bottom">

        {/* The Card Header is now a strong prompt */}
        <div className="card-header">
          <p className="card-status">
            Have a project or a question?
          </p>
          <p className="card-cta">
            Fill out the form below.
          </p>
        </div>

        {/* The Contact Form with modern input structure */}
        <form className="contact-form">

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Project Idea or Inquiry" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or idea..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>

      <div className="social-links fade-in-up">
        <a href="mailto:kmlamahara@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email</a>
        <a href="www.linkedin.com/in/kmla-mahara-a549a6387" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
        <a href="https://github.com/KamalaMahara" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
      </div>

    </section>
  );
}

export default Contact;