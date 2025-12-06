import './About.css'
function About() {
  return (
    <>
      <section id="about" class="about-section">
        <div class="about-content">
          <h2 class="section-title">
            <span class="highlighted-text">About</span> Me
          </h2>

          <div class="bio-card fade-in-up">
            <pre class="intro-text">
              Im Kamala Mahara,
              a passionate and dedicated MERN Dev based in Nepal.
            </pre>
            <p class="description-text">
              Aspiring MERN Stack Developer. Building dynamic, high-performance applications with a specialization in monolithic architecture for seamless UX.
            </p>
          </div>

          <div class="details-grid">
            <div class="detail-box fade-in-left">
              <h3 class="box-title">Education</h3>
              <p class="box-detail">
                <span class="detail-label">Current:</span>  BCA 3rd sem at TU
              </p>
              <p class="box-detail">
                <span class="detail-label">+2:</span>  Coomputer Science(3.54 GPA)
              </p>
            </div>

            <div class="detail-box fade-in-right">
              <h3 class="box-title">Im confident at</h3>
              <ul class="skills-list">
                <li><span class="skill-tag">React.js</span></li>
                <li><span class="skill-tag">Node.js / Express</span></li>
                <li><span class="skill-tag">MongoDB</span></li>
                <li><span class="skill-tag">REST APIs</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about-visual scale-in">
          <div class="profile-frame">
            <div class="profile-photo"></div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About