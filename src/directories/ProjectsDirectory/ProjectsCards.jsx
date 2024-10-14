import FirstCardImage from '../../assets/images/resources/Projects/showcase_wirebox-dm.png'
import SecondCardImage from '../../assets/images/resources/Projects/showcase_figchat-dm.png'
// import ThirdCardImage from '../../assets/images/resources/Projects/showcase_outline-dm.png'
import FourthCardImage from '../../assets/images/resources/Projects/showcase_custoji-dm.png'
// import FifthCardImage from '../../assets/images/resources/Projects/showcase_droplette-dm.png'
import SixthCardImage from '../../assets/images/resources/Projects/showcase_browso-dm.png'
import SeventhCardImage from '../../assets/images/resources/Projects/showcase_cover-dm.png'
// import EighthCardImage from '../../assets/images/resources/Projects/showcase_jeffsum-dm.png'
import { Link } from 'react-router-dom'


const PlayCards
  = () => {
    return (
      <div>



        <div className="timeline-holder svelte-c4ft01">
          <div className="grid svelte-885gk8 xs">
            <h2 className="item svelte-885gk8">Web Projects</h2>
          </div>
        </div>



        <div className="showcase-holder svelte-18wal5">
          <div className="showcase svelte-18wal5">
            <Link to="/WebProjects" className="showcase-block svelte-18wal5">
              <div className="showcase-inner svelte-18wal5">
                <div className="deets svelte-18wal5">
                  <div className="title svelte-18wal5">
                    Web Applications built
                  </div>
                  <span className="description svelte-18wal5">
                    Always keep track of whats supposed to be done - comes in nasty
                    pink... Here you will find multiple fully functional web applications that I built using React, TypeScrypt, Css(Tiwind) and HTML.
                  </span>
                </div>
                <div className="shot-holder svelte-18wal5">
                  <div className="shot svelte-18wal5">
                    <figure className="svelte-cmqfoo">
                      <img src={FirstCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" />
                    </figure>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/CssBR" className="showcase-block svelte-18wal5">
              <div className="showcase-inner svelte-18wal5">
                <div className="deets svelte-18wal5">
                  <div className="title svelte-18wal5">
                    Css Border-Radius
                  </div>
                  <span className="description svelte-18wal5">
                    Create a very cool effect with a rarely used feature
                  </span>
                </div>
                <div className="shot-holder svelte-18wal5">
                  <div className="shot svelte-18wal5">
                    <figure className="svelte-cmqfoo">
                      <img src={FourthCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" />
                    </figure>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
              <div className="deets svelte-18wal5">
                <div className="title svelte-18wal5">
                  Iphone 15 web clone
                </div>
                <span className="description svelte-18wal5">
                  Sharpening my web design skills by cloning the Iphone website that uses Three.js and Gsap.
                </span>
              </div>
              <div className="shot-holder svelte-18wal5">
                <div className="shot svelte-18wal5">
                  <figure className="svelte-cmqfoo">
                    <img src={SeventhCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div>
            </Link>

            <Link to="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
              <div className="deets svelte-18wal5">
                <div className="title svelte-18wal5">
                  Nike Website clone
                </div>
                <span className="description svelte-18wal5">
                  Check this out...
                </span>
              </div>
              <div className="shot-holder svelte-18wal5">
                <div className="shot svelte-18wal5">
                  <figure className="svelte-cmqfoo">
                    <img src={SixthCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>



        {/* 
        <div className="timeline-holder svelte-c4ft01">
          <div className="grid svelte-885gk8 xs">
            <h2 className="item svelte-885gk8">Architecture Projects</h2>
          </div>
        </div>
        <div className="showcase-holder svelte-18wal5">
          <div className="showcase svelte-18wal5">
            <Link to="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
              <div className="deets svelte-18wal5">
                <div className="title svelte-18wal5">
                  Theme Time
                </div>
                <span className="description svelte-18wal5">
                  Check your time here...
                  but the year`s 1999.
                </span>
              </div>
              <div className="shot-holder svelte-18wal5">
                <div className="shot svelte-18wal5">
                  <figure className="svelte-cmqfoo">
                    <img src={SixthCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
 */}




        <div className="timeline-holder svelte-c4ft01">
          <div className="grid svelte-885gk8 xs">
            <h2 className="item svelte-885gk8">My Art</h2>
          </div>
        </div>
        <div className="showcase-holder svelte-18wal5">

          <div className="showcase svelte-18wal5">
            <Link to="/ArtProjects" className="showcase-block svelte-18wal5">
              <div className="showcase-inner svelte-18wal5">
                <div className="deets svelte-18wal5">
                  <div className="title svelte-18wal5">
                    Ballpoint Pen Art
                  </div>
                  <span className="description svelte-18wal5">
                    What my art is like
                  </span>
                </div>
                <div className="shot-holder svelte-18wal5">
                  <div className="shot svelte-18wal5">
                    <figure className="svelte-cmqfoo">
                      <img src={SecondCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" />
                    </figure>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div >
    )
  }

export default PlayCards

