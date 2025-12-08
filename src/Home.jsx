import { Link } from 'react-router-dom'
import './About.jsx'
import './Home.css'
const Home = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">&lt; kmla &#47;&gt;</div>
        <nav>
          <ul>
            <li><Link to="/home" class="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="content-container">
          <div className="main">
            <p class="greeting">Hi there👋, I'm</p>
          </div>
          <div className="main">
            <h1 className="main-title">Kamala Mahara </h1> </div>
          <p className="tagline">im a MERN stack developer.</p>

          <div className="buttons">
            <a href="#contact" class="btn primary-btn">Get In Touch</a>
            <a href="#projects" class="btn secondary-btn">View My Work</a>
          </div>


          <div class="stats-bar">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div class="character-container">
          <div class="girl-character"></div>
          <div class="backdrop-shape"></div>
        </div>
      </section>

    </>

  )
}
export default Home