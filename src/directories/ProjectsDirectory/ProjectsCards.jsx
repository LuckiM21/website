import FirstCardImage from '../../assets/images/resources/showcase/showcase_wirebox-dm.png'
import SecondCardImage from '../../assets/images/resources/showcase/showcase_figchat-dm.png'
// import ThirdCardImage from '../../assets/images/resources/showcase/showcase_outline-dm.png'
import FourthCardImage from '../../assets/images/resources/showcase/showcase_custoji-dm.png'
// import FifthCardImage from '../../assets/images/resources/showcase/showcase_droplette-dm.png'
import SixthCardImage from '../../assets/images/resources/showcase/showcase_browso-dm.png'
import SeventhCardImage from '../../assets/images/resources/showcase/showcase_cover-dm.png'
// import EighthCardImage from '../../assets/images/resources/showcase/showcase_jeffsum-dm.png'
import { Link } from 'react-router-dom'


const PlayCards
  = () => {
    return (
      <div>
        <div className="showcase-holder svelte-18wal5">
          <h2>Web Projects</h2>
          <div className="showcase svelte-18wal5">
            <Link to="#" className="showcase-block svelte-18wal5">
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

            <Link to="#" className="showcase-block svelte-18wal5">
              <div className="showcase-inner svelte-18wal5">
                <div className="deets svelte-18wal5">
                  <div className="title svelte-18wal5">
                    Custoji
                  </div>
                  <span className="description svelte-18wal5">
                    Create emojis that-should-not-be to torment your friends with.
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
                  Cover Status
                </div>
                <span className="description svelte-18wal5">
                  Let folks know what`s up with status thumbnails for your work.
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

          </div>
        </div>
        <div className="showcase-holder svelte-18wal5">
          <h2>Architecture Projects</h2>
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
        <div className="showcase-holder svelte-18wal5">
          <h2>Art Projects</h2>
          <div className="showcase svelte-18wal5">
            <Link to="#" className="showcase-block svelte-18wal5">
              <div className="showcase-inner svelte-18wal5">
                <div className="deets svelte-18wal5">
                  <div className="title svelte-18wal5">
                    ChitChat
                  </div>
                  <span className="description svelte-18wal5">
                    Chat, rage, or table flip about design with your team with this chat app prototype.
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

