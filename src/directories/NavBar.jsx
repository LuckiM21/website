// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../Pages/Contact'


const NavBar = () => {


  // const [showContact, setShowContact] = useState(false);

  // const handleOpenButton = () => {
  //   setShowContact(true);
  // };

  // const handleCloseButton = () => {
  //   setShowContact(false);
  // }


  return (
    <>
      <header className="navbar">
        <nav className="navbar">
          <ul className="main navbar blur scrolled">
            <li className="navbar">
              <NavLink
                to="/"
                className="main-link navbar "
              >
                Work <span className="slash navbar">
                  /
                </span>
              </NavLink>
            </li>
            <li className="navbar">
              <NavLink
                to="about"
                className="main-link navbar"
              >About
              </NavLink>
            </li>
            <li className="navbar">
              <NavLink
                to="Projects"
                className="main-link navbar"
              >Projects
              </NavLink>
            </li>
            <li className="navbar">
              <NavLink
                to="notes"
                className="main-link navbar"
              >Notes
              </NavLink>
            </li>
            {/* <li className="navbar">

              <button className="navbar"
                onClick={handleOpenButton}
              >
                Contact
              </button>
            </li> */}
            <li className="navbar">
              <NavLink
                to="Login"
                className="main-link navbar"
              >Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* {showContact && <Contact onClose={handleCloseButton} />} */}
    </>
  )
}

export default NavBar
