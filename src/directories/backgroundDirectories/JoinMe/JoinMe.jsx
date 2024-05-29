
import '../../../styles/BackgroundPages/JoinMe.css'
const JoinMe = () => {
  return (
    <div>
      <body>
        <header className="header">
          <nav className="navbar">
            <h2 className="logo"><a href="#">Home</a></h2>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" id="hamburger-btn">
              <svg height="24" viewBox="0 0 24 24" width="24">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </label>
            <ul className="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="buttons">
              <a href="#" className="signin">Sign In</a>
              <a href="#" className="signup">Sign Up</a>
            </div>
          </nav>
        </header>
        <section className="hero-section">
          <div className="hero">
            <h2>Mobile App Development</h2>
            <p>
              Join us in the exciting world of programming and turn your ideas into
              reality. Unlock the world of endless possibilities - learn to code and
              shape the digital future with us.
            </p>
            <div className="buttons">
              <a href="#" className="join">Join Now</a>
              <a href="#" className="learn">Learn More</a>
            </div>
          </div>
          <div className="img">
            <img src="hero-bg.png" alt="hero image" />
          </div>
        </section>
      </body>
    </div>
  )
}

export default JoinMe
