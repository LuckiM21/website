import Doodler from "../../assets/images/wip/doodler.png";
import Droplate from "../../assets/images/wip/hp-droplette.png";

const InProgress = () => {
  return (
    <>
      <h2 className="h1-display principles svelte-pbuplb">
        <span className="svelte-pbuplb">In Progress.</span>
      </h2>
      <div className="wrapper svelte-fn0uxd">
        <p className="svelte-fn0uxd center">
          Work in various states of design and development, from side projects,
          to in-flight product design and development.
        </p>
      </div>
      {/* ====================================CARDS================================= */}
      <div className="cards svelte-131t5ir">
        <div className="cards-content">
          <div
            style={{
              display: "contents",
              "--grid-column-start": "1",
              "--grid-column-end": "16",
              "--align": "center",
            }}
          >
            <a className="card svelte-vd84gr" href="#">
              <div
                className="card-wrap svelte-vd84gr"
                style={{
                  background: "var( --spectrum-purple-190)",
                  color: "var(--color-text-bold)",
                }}
              >
                <div className="info svelte-vd84gr">
                  <span className="svelte-vd84gr">Minecraft</span>
                  <h2>Game</h2>
                </div>
                <div className="inner svelte-vd84gr">
                  <div className="image-holder doodler svelte-131t5ir">
                    <figure className="svelte-cmqfoo">
                      <img
                        src={Doodler}
                        alt="Doodler"
                        width="100%"
                        height=""
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
              "--grid-column-start": "17",
              "--grid-column-end": "26",
              "--align": "flex-end",
            }}
          >
            <a
              className="card svelte-vd84gr"
              href="#"
            >
              <div
                className="card-wrap svelte-vd84gr"
                style={{
                  background: "#1c1c1c",
                  color: "var(--color-white)",
                }}
              >
                <div className="info svelte-vd84gr">
                  <span className="svelte-vd84gr">Figma</span>
                  <h2>Droplette</h2>
                </div>
                <div className="inner svelte-vd84gr">
                  <div className="image-holder dm svelte-131t5ir">
                    <figure className="svelte-cmqfoo">
                      <img
                        src={Droplate}
                        alt="Droplette"
                        width="100%"
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

export default InProgress;
