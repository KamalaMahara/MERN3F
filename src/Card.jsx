import "./Card.css"
const Card = (props) => {
  return (
    <div className="container">
      <div className="product-card-container">
        <div className="course-card">

          <div className="course-banner">
            <h4 className="course-level">Advanced</h4>
            <div className="tech-icon">
              <span className="tech-label">{props.course}</span>
            </div>
          </div>

          <div className="course-content">
            <h3 className="course-title">{props.title} </h3>
            <p className="course-description">
              {props.description}
            </p>

            <div className="course-meta">
              <span className="meta-item">
                <i className="icon-clock">🕒</i>  {props.hours}
              </span>
              <span className="meta-item">
                <i className="icon-projects">⭐</i> 5 Projects
              </span>
            </div>
          </div>

          <div className="course-footer">
            <span className="course-price">{props.price}</span>
            <a href="#" className="enroll-button">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card