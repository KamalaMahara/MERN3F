import "./Card.css"
const Card = (props) => {
  return (
    <>
      <div class="product-card-container">
        <div class="course-card">

          <div class="course-banner">
            <h4 class="course-level">Advanced</h4>
            <div class="tech-icon">
              <span class="tech-label">{props.course}</span>
            </div>
          </div>

          <div class="course-content">
            <h3 class="course-title">{props.title} </h3>
            <p class="course-description">
              {props.description}
            </p>

            <div class="course-meta">
              <span class="meta-item">
                <i class="icon-clock">🕒</i>  {props.hours}
              </span>
              <span class="meta-item">
                <i class="icon-projects">⭐</i> 5 Projects
              </span>
            </div>
          </div>

          <div class="course-footer">
            <span class="course-price">{props.price}</span>
            <a href="#" class="enroll-button">Enroll Now</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card