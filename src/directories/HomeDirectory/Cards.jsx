import { Link } from "react-router-dom";
import Svg1 from "../../assets/images/work/docs/flurish/card_docs_icon_01.svg";
import Svg2 from "../../assets/images/work/docs/flurish/card_docs_icon_02.svg";
import Svg3 from "../../assets/images/work/docs/flurish/card_docs_icon_03.svg";
import AiPng from "../../assets/images/hp/ai.png";
import Figma from "../../assets/images/hp/figma.png";
import Docs from "../../assets/images/hp/docs.png";
import Hs from "../../assets/images/hp/hs.png";

const Cards = () => {
  return (
    <div className="cards svelte-1eg3i2g">
      <div className="cards-content">
        <div
          className="
          display: contents;
          --background: var(--color-pink);
          --color: var(--color-text-bold);
          --grid-column-start: 1;
          --grid-column-end: 10;
        "
        >
          <Link
            className="card svelte-vd84gr"
            // data-sveltekit-preload-code=""
            // data-sveltekit-preload-data=""
            href="work/ai"
          >
            <div className="card-flourish svelte-vd84gr">
              <img
                src={Svg1}
                alt=""
                className="top: -80px; left: 70px svelte-vd84gr"
                // className="svelte-vd84gr"
              />
            </div>
            <div className="card-wrap svelte-vd84gr">
              <div className="info svelte-vd84gr">
                <span className="svelte-vd84gr">Help Scout</span>
                <h2>AI</h2>
              </div>
              <div className="inner svelte-vd84gr">
                <div className="image-holder docs svelte-1eg3i2g">
                  <figure className="svelte-cmqfoo">
                    <img
                      src={AiPng}
                      alt="AI"
                      width="810"
                      height="422"
                      loading="lazy"
                      className="svelte-cmqfoo skip loaded"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="
          display: contents;
          --background: var(--color-mint);
          --color: var(--color-text-bold);
          --grid-column-start: 11;
          --grid-column-end: 26;
        "
        >
          <Link
            className="card svelte-vd84gr"
            // data-sveltekit-preload-code=""
            // data-sveltekit-preload-data=""
            href="work/docs"
          >
            <div className="card-flourish svelte-vd84gr">
              <img
                src={Svg2}
                alt=""
                className="top: -70px; left: 70px"
                // className="svelte-vd84gr"
              />
              <img
                src={Svg3}
                // alt=""
                className="top: -80px; right: 250px"
                // className="svelte-vd84gr"
              />
            </div>
            <div className="card-wrap svelte-vd84gr">
              <div className="info svelte-vd84gr">
                <span className="svelte-vd84gr">Help Scout</span>
                <h2>Articles</h2>
              </div>
              <div className="inner svelte-vd84gr">
                <div className="image-holder docs svelte-1eg3i2g">
                  <figure className="svelte-cmqfoo">
                    <img
                      src={Docs}
                      alt="Articles"
                      width="1300"
                      height="600"
                      loading="lazy"
                      className="svelte-cmqfoo skip loaded"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="
          display: contents;
          --background: var(--color-rust);
          --color: var(--color-text-bold);
          --grid-column-start: 1;
          --grid-column-end: 16;
        "
        >
          <Link
            className="card svelte-vd84gr"
            // data-sveltekit-preload-code=""
            // data-sveltekit-preload-data=""
            href="work/plugins"
          >
            <div className="card-flourish svelte-vd84gr">
              <img
                src={Svg1}
                // alt=""
                className="bottom: 200px; left: -100px"
                // className="svelte-vd84gr"
              />
              <img
                src={Svg2}
                // alt=""
                className="top: -100px; right: 300px"
                // className="svelte-vd84gr"
              />
            </div>
            <div className="card-wrap svelte-vd84gr">
              <div className="info svelte-vd84gr">
                <span className="svelte-vd84gr">Figma</span>
                <h2>Plugins</h2>
              </div>
              <div className="inner svelte-vd84gr">
                <div className="image-holder figma svelte-1eg3i2g">
                  <figure className="svelte-cmqfoo">
                    <img
                      src={Figma}
                      alt="Plugins"
                      width="1300"
                      height="600"
                      loading="lazy"
                      className="svelte-cmqfoo skip loaded"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="
          display: contents;
          --background: var(--color-babyblue);
          --color: var(--color-text-bold);
          --grid-column-start: 17;
          --grid-column-end: 26;
        "
        >
          <Link
            className="card svelte-vd84gr large"
            // data-sveltekit-preload-code=""
            // data-sveltekit-preload-data=""
            href="work/mobile"
          >
            <div className="card-flourish svelte-vd84gr">
              <img
                src={Svg1}
                alt=""
                className="top: -70px; left: 100px"
                // className="svelte-vd84gr"
              />
            </div>
            <div className="card-wrap svelte-vd84gr">
              <div className="info svelte-vd84gr">
                <span className="svelte-vd84gr">Help Scout</span>
                <h2>Mobile</h2>
              </div>
              <div className="inner svelte-vd84gr">
                <div className="image-holder hs svelte-1eg3i2g">
                  <figure className="svelte-cmqfoo">
                    <img
                      src={Hs}
                      alt="Mobile"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip loaded"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
