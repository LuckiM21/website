// import { Link } from "react-router-dom";
import AiPng from "../../assets/images/hp/ai.png";
import Figma from "../../assets/images/hp/figma.png";
import Docs from "../../assets/images/hp/docs.png";
import Hs from "../../assets/images/hp/hs.png";
const Cards = () => {
  return (
    <>
      <div className="cards svelte-1eg3i2g">
        <div className="cards-content">
          <div
            style={{
              display: "contents",
              "--grid-column-start": "1",
              "--grid-column-end": "10",
            }}
          >
            <a
              className="card svelte-vd84gr"
              href="#"
            >
              <div className="card-wrap svelte-vd84gr"
                style={{
                  background: "var(--color-pink)",
                  color: "var(--color-text-bold)",
                }}
              >
                <div className="info svelte-vd84gr">
                  <span className="svelte-vd84gr">Border Radius</span>
                  <h2>Bubble</h2>
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
                        style={{
                          borderRadius: "20px"
                        }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            style={{
              display: "contents",
              background: "var(--color-mint)",
              color: "var(--color-text-bold)",
              "--grid-column-start": "11",
              "--grid-column-end": "26",
            }}
          >
            <a
              className="card svelte-vd84gr"
              href="#"
            >
              {/* <div className="card-flourish svelte-vd84gr"></div> */}
              <div className="card-wrap svelte-vd84gr"
                style={{
                  background: "var(--color-mint)",
                  color: "var(--color-text-bold)",
                }}
              >
                <div className="info svelte-vd84gr">
                  <span className="svelte-vd84gr">3D Portifolio</span>
                  <h2>Website</h2>
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
                        style={{
                          borderRadius: "20px"
                        }}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div
            style={{
              display: "contents",
              background: "var(--color-rust)",
              color: "var(--color-text-bold)",
              "--grid-column-start": "1",
              "--grid-column-end": "16",
            }}
          >
            <a
              className="card svelte-vd84gr"
              href="#"
            >
              <div className="card-wrap svelte-vd84gr"
                style={{
                  background: "var(--color-rust)",
                  color: "var(--color-text-bold)",
                }}
              >
                <div className="info svelte-vd84gr">
                  <span className="svelte-vd84gr">Css</span>
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
            </a>
          </div>
          <div
            style={{
              display: "contents",
              background: "var(--color-babyblue)",
              color: "var(--color-text-bold)",
              "--grid-column-start": "17",
              "--grid-column-end": "26",
            }}
          >
            <a
              className="card svelte-vd84gr large"
              href="#"
            >
              <div className="card-wrap svelte-vd84gr"
                style={{
                  background: "var(--color-babyblue)",
                  color: "var(--color-text-bold)",
                }}>
                <div className="info svelte-vd84gr">
                  <span className="svelte-vd84gr">Iphone 15 pro clone</span>
                  <h2>Website</h2>
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
