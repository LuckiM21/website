import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../Pages/Contact'


const NavBar = () => {


  const [showContact, setShowContact] = useState(false);

  const handleOpenButton = () => {
    setShowContact(true);
  };

  const handleCloseButton = () => {
    setShowContact(false);
  }


  return (
    <>
      <header className="svelte-1wikuy2">
        <nav className="svelte-1wikuy2">
          <ul className="main svelte-1wikuy2 blur scrolled">
            <li className="svelte-1wikuy2">
              <NavLink
                to="/"
                className="main-link svelte-1wikuy2 "
              >
                Work <span className="slash svelte-1wikuy2">
                  /
                </span>
              </NavLink>
            </li>
            <li className="svelte-1wikuy2">
              <NavLink
                to="about"
                className="main-link svelte-1wikuy2"
              >About
              </NavLink>
            </li>
            <li className="svelte-1wikuy2">
              <NavLink
                to="Projects"
                className="main-link svelte-1wikuy2"
              >Projects
              </NavLink>
            </li>
            <li className="svelte-1wikuy2">
              <NavLink
                to="notes"
                className="main-link svelte-1wikuy2"
              >Notes
              </NavLink>
            </li>
            <li className="svelte-1wikuy2">

              <button className="svelte-1wikuy2"
                onClick={handleOpenButton}
              >
                Contact
              </button>
            </li>
            <li className="svelte-1wikuy2">
              <NavLink
                to="Login"
                className="main-link svelte-1wikuy2"
              >Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {showContact && <Contact onClose={handleCloseButton} />}
    </>
  )
}

export default NavBar
