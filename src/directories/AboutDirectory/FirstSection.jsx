import Motion from "./AboutIcons/Motion";
import Html from "./AboutIcons/Html";
import Javascript from "./AboutIcons/Javascript";
import Nextjs from "./AboutIcons/Nextjs";
import Nodejs from "./AboutIcons/Nodejs";
import React from "./AboutIcons/React";
import Tailwind from "./AboutIcons/Tailwindcss";
import Threejs from "./AboutIcons/Threejs";
import Typescript from "./AboutIcons/Typescript";
import css from "./AboutIcons/Images/css.png";
import figma from "./AboutIcons/Images/figma.png";

const FirstSection = () => {
  return (
    <>
      <div className="grid-wrap">
        <div className="principles svelte-c4ft01 ">
          <h1>Skills</h1>

          <div className="timeline-holder svelte-c4ft01">
            <div className="grid svelte-885gk8 xs">
              <h3 className="item svelte-885gk8">Front End</h3>
            </div>
            <div className="timeline grid svelte-c4ft01">
              <div
                style={{
                  display: "contents",
                  "--row": "3/3",
                  "--column": "10 / span 16",
                  background: "var(--color-pink)",
                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">Javascript</div>
                      <div className="title svelte-16qh449">
                        Typescript / JSX / Three.Js
                      </div>
                    </div>
                    {/* <div className="time svelte-16qh449">
                      12~
                    </div> */}
                    <Javascript />
                    <Typescript />
                    <Threejs />
                    {/* </div> */}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "5/5",
                  "--column": "1 / span 13",
                  background: "var(--color-purple)",
                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">React</div>
                      <div className="title svelte-16qh449">
                        React Native / FramerMotion / Gsap
                      </div>
                    </div>
                    <React />
                    <Motion />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "2/2",
                  "--column": "12 / span 13",
                  background: "var(--color-red)",
                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">CSS</div>
                      <div className="title svelte-16qh449">Taiwind</div>
                    </div>
                    <img
                      src={css}
                      alt=""
                      style={{
                        height: "3em",
                        width: "3em",
                      }}
                    />
                    <Tailwind />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "1/1",
                  "--column": "20 / span 7",
                  background: "var(--color-red)",
                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">HTML</div>
                      <div className="title svelte-16qh449">Lead Designer</div>
                    </div>
                    <Html />
                    <div className="time svelte-16qh449">{/* 23~ */}</div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "4/4",
                  "--column": "6 / span 6",
                  background: "var(--color-yellow)",
                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">Figma</div>
                      <div className="title svelte-16qh449">Design</div>
                    </div>
                    <img
                      src={figma}
                      alt="figma.png"
                      style={{
                        width: "3em",
                        height: "3em",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-holder svelte-c4ft01">
              <div className="grid svelte-885gk8 xs">
                <h3 className="item svelte-885gk8">Back End</h3>
              </div>
              <div className="timeline grid svelte-c4ft01">
                <div
                  style={{
                    display: "contents",
                    "--row": "5/5",
                    "--column": "1 / span 5",
                    background: "var(--color-purple)",
                  }}
                ></div>
                <div
                  style={{
                    display: "contents",
                    "--row": "4/4",
                    "--column": "6 / span 6",
                    background: "var(--color-yellow)",
                  }}
                ></div>
                <div
                  style={{
                    display: "contents",
                    "--row": "3/3",
                    "--column": "7 / span 13",
                    background: "var(--color-pink)",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Python</div>
                        <div className="title svelte-16qh449">Django</div>
                      </div>
                      <div className="time svelte-16qh449">12~</div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "contents",
                    "--row": "1/1",
                    "--column": "17 / span 9",
                    background: "var(--color-red)",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Javascript</div>
                        <div className="title svelte-16qh449">
                          Node.Js / Next.Js
                        </div>
                      </div>
                      <Javascript />
                      <Nodejs />
                      <Nextjs />
                      {/* <div className="time svelte-16qh449">
                        23~
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
