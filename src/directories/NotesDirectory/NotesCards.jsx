import FirstCardImage from '../../assets/images/notes/cssart/icon.png'
import SecondCardImage from '../../assets/images/notes/chatgpt/icon.png'
import ThirdCardImage from '../../assets/images/notes/throwaway/icon.png'
import FourthCardImage from '../../assets/images/notes/cover/icon.png'
import FifthCardImage from '../../assets/images/notes/prototypes/icon.png'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
// import CssFTSOI from './NotesCardPages/CssFTSOI'

const NotesCards = () => {

  // const [showDetails, setShowDetails] = useState(false);

  // const handleOpenButton = () => {
  //   setShowDetails(true);
  // };
  // const handleCloseButton = () => {
  //   setShowDetails(false);
  // }



  return (
    <>
      {/* <button onClick={handleOpenButton}>
        showDetails
      </button>
      {showDetails && <CssFTSOI onClose={handleCloseButton} />} */}
      <div>
        <div className="showcase-holder svelte-88yij0">
          <div className="showcase svelte-88yij0">
            <Link to='Figma' className="showcase-block svelte-88yij0" data-sveltekit-preload-code="" data-sveltekit-preload-data="">
              <div className="showcase-inner svelte-88yij0">
                <div className="deets svelte-88yij0">
                  <div className="title svelte-88yij0">CSS for the shell of it</div>
                  <span className="description svelte-88yij0">Not all work needs to lead somewhere.</span>
                </div>
                <div className="showcase-icon svelte-88yij0">
                  <div className="display: contents; --radius: 0; --shadow: none">
                    <figure className="svelte-cmqfoo">
                      <img src={FirstCardImage} alt="" width="80" height="80" loading="lazy" className="svelte-cmqfoo fit skip fullwidth loaded" />
                    </figure>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="notes/how-i-code-with-ai" className="showcase-block svelte-88yij0" data-sveltekit-preload-code="" data-sveltekit-preload-data=""><div className="showcase-inner svelte-88yij0">
              <div className="deets svelte-88yij0">
                <div className="title svelte-88yij0">
                  How I leverage AI in my everyday work
                </div>
                <span className="description svelte-88yij0">AI is here to eat all the things. Here`s how I use it to my
                  advantage.</span>
              </div>
              <div className="showcase-icon svelte-88yij0">
                <div className="display: contents; --radius: 0; --shadow: none">
                  <figure className="svelte-cmqfoo">
                    <img src={SecondCardImage} alt="" width="80" height="80" loading="lazy" className="svelte-cmqfoo fit skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div> </Link><Link to="notes/throwaways" className="showcase-block svelte-88yij0" data-sveltekit-preload-code="" data-sveltekit-preload-data=""><div className="showcase-inner svelte-88yij0">
              <div className="deets svelte-88yij0">
                <div className="title svelte-88yij0">
                  Throwaway projects are the best kinds of projects
                </div>
                <span className="description svelte-88yij0">Not all ideas are good ideas. But thats a good thing.</span>
              </div>
              <div className="showcase-icon svelte-88yij0">
                <div className="display: contents; --radius: 0; --shadow: none">
                  <figure className="svelte-cmqfoo">
                    <img src={ThirdCardImage} alt="" width="80" height="80" loading="lazy" className="svelte-cmqfoo fit skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div>
            </Link>
            <Link to="notes/cover" className="showcase-block svelte-88yij0" data-sveltekit-preload-code="" data-sveltekit-preload-data=""><div className="showcase-inner svelte-88yij0">
              <div className="deets svelte-88yij0">
                <div className="title svelte-88yij0">
                  Architecture
                </div>
                <span className="description svelte-88yij0">I`m reworking my Cover Status plugin for Figma, here`s a
                  sneak peak.</span>
              </div>
              <div className="showcase-icon svelte-88yij0">
                <div className="display: contents; --radius: 0; --shadow: none">
                  <figure className="svelte-cmqfoo">
                    <img src={FourthCardImage} alt="" width="80" height="80" loading="lazy" className="svelte-cmqfoo fit skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div>
            </Link>
            <Link to="notes/prototyping" className="showcase-block svelte-88yij0" data-sveltekit-preload-code="" data-sveltekit-preload-data=""><div className="showcase-inner svelte-88yij0">
              <div className="deets svelte-88yij0">
                <div className="title svelte-88yij0">
                  Flash to Figma: My love story with prototyping tools
                </div>
                <span className="description svelte-88yij0">I`ve witnessed coding simplify and prototyping principles
                  endure.</span>
              </div>
              <div className="showcase-icon svelte-88yij0">
                <div className="display: contents; --radius: 0; --shadow: none">
                  <figure className="svelte-cmqfoo">
                    <img src={FifthCardImage} alt="" width="80" height="80" loading="lazy" className="svelte-cmqfoo fit skip fullwidth loaded" />
                  </figure>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotesCards
