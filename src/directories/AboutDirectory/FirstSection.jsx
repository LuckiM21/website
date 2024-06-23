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
import Python from "./AboutIcons/Images/python.png"
import Gsap from "./AboutIcons/Images/Gsap.png"
import Express from "./AboutIcons/Images/express.png"
import MySQL from "./AboutIcons/Images/mySQL.png"
import Flask from "./AboutIcons/Images/flask.png"
import PS from "./AboutIcons/Images/ps.png"
import AI from "./AboutIcons/Images/ai.png"
import Blender from "./AboutIcons/Images/blender.png"
import Revit from "./AboutIcons/Images/Revit1.png"
import Autocad from "./AboutIcons/Images/autocad.png"
import ThreeDsMax from "./AboutIcons/Images/3DsMax.png"
import Maya from "./AboutIcons/Images/maya.png"
import Vray from "./AboutIcons/Images/vray.png"
import Sass from "./AboutIcons/Images/sass.svg"
import Php from "./AboutIcons/Images/php.png"
import Django from "./AboutIcons/Images/django.png"







const FirstSection = () => {
  return (
    <>
      <div className="grid-wrap">
        <div className="principles svelte-c4ft01 ">
          <h1>Skills</h1>

          <div className="timeline-holder svelte-c4ft01">
            <div className="grid svelte-885gk8 xs">
              <h3 className="item svelte-885gk8">Front End Development</h3>
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

                    <Javascript />
                    <Typescript />
                    <Threejs />

                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "5/5",
                  "--column": "1 / span 13",

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
                    <img
                      src={Gsap}
                      alt=""
                      style={{
                        height: "3em",
                        width: "3em",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "2/2",
                  "--column": "12 / span 13",

                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">CSS</div>
                      <div className="title svelte-16qh449">Sass / Tailwind</div>
                    </div>
                    <img
                      src={css}
                      alt=""
                      style={{
                        height: "3em",
                        width: "3em",
                      }}
                    />
                    <img
                      src={Sass}
                      alt=""
                      style={{
                        height: "2.5em",
                        width: "2.5em",
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

                }}
              >
                <div className="timeline svelte-16qh449">
                  <div className="content svelte-16qh449">
                    <div className="work svelte-16qh449">
                      <div className="company svelte-16qh449">HTML</div>
                      <div className="title svelte-16qh449">Lead Designer</div>
                    </div>
                    <Html />

                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "contents",
                  "--row": "4/4",
                  "--column": "6 / span 6",

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
                      alt="figma"
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
                <h3 className="item svelte-885gk8">Back End Development</h3>
              </div>
              <div className="timeline grid svelte-c4ft01">
                <div
                  style={{
                    display: "contents",
                    "--row": "5/5",
                    "--column": "2 / span 9",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">mySQL</div>
                      </div>
                      <div style={{
                        width: "3em",
                        height: "3em"
                      }}>

                        {/* <img
                          src={MySQL}
                          alt="mySQL"
                          style={{
                            width: "700px",
                            height: "50px",
                            zoom: "",
                            overflow: "hidden",
                          }}
                        /> */}
                      </div>


                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "contents",
                    "--row": "4/4",
                    "--column": "1 / span 9",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">PHP</div>

                      </div>
                      <img
                        src={Php}
                        alt="php"
                        style={{
                          width: "4em",
                          height: "3em",
                        }}
                      />


                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "contents",
                    "--row": "3/3",
                    "--column": "7 / span 13",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Python</div>
                        <div className="title svelte-16qh449">Django / Flask</div>
                      </div>
                      <img
                        src={Python}
                        alt="python"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                      <img
                        src={Django}
                        alt="Django"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                      <img
                        src={Flask}
                        alt="flask"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />

                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "contents",
                    "--row": "1/1",
                    "--column": "13 / span 15",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Node.js</div>
                        <div className="title svelte-16qh449">
                          Next.Js / Express.js
                        </div>
                      </div>
                      <Nodejs />
                      <Nextjs />
                      <img
                        src={Express}
                        alt="flask"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>




            <div className="timeline-holder svelte-c4ft01">
              <div className="grid svelte-885gk8 xs">
                <h3 className="item svelte-885gk8">Architecture</h3>
              </div>
              <div className="timeline grid svelte-c4ft01">
                <div
                  style={{
                    display: "contents",
                    "--row": "6/6",
                    "--column": "4 / span 15",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Autodesk Maya</div>

                      </div>
                      <img
                        src={Maya}
                        alt="maya"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "contents",
                    "--row": "5/5",
                    "--column": "1 / span 15",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">AutoCAD</div>

                      </div>
                      <img
                        src={Autocad}
                        alt="autocad"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "contents",
                    "--row": "4/4",
                    "--column": "6 / span 22",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Autodesk Revit</div>
                      </div><img
                        src={Revit}
                        alt="autodesk Revit"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "contents",
                    "--row": "3/3",
                    "--column": "10 / span 14",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Blender</div>
                      </div><img
                        src={Blender}
                        alt="blender"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "contents",
                    "--row": "2/2",
                    "--column": "14 / span 8",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">3Ds Max</div>
                      </div><img
                        src={ThreeDsMax}
                        alt="3Dsmax"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "contents",
                    "--row": "1/1",
                    "--column": "17 / span 9",

                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Vray</div>
                      </div>
                      <img
                        src={Vray}
                        alt="vray"
                        style={{
                          width: "6em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>




            <div className="timeline-holder svelte-c4ft01">
              <div className="grid svelte-885gk8 xs">
                <h3 className="item svelte-885gk8">Graphic Designing</h3>
              </div>
              <div className="timeline grid svelte-c4ft01">
                <div
                  style={{
                    display: "contents",
                    "--row": "3/3",
                    "--column": "3 / span 25",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Corel Draw</div>
                      </div>
                      <img
                        src={""}
                        alt="Corel Draw"
                        style={{
                          width: "6em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "contents",
                    "--row": "2/2",
                    "--column": "7 / span 13",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">PhotoShop</div>
                      </div>
                      <img
                        src={PS}
                        alt="photoshop"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />

                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "contents",
                    "--row": "1/1",
                    "--column": "15 / span 10",
                    background: "var(--color-red)",
                  }}
                >
                  <div className="timeline svelte-16qh449">
                    <div className="content svelte-16qh449">
                      <div className="work svelte-16qh449">
                        <div className="company svelte-16qh449">Adobe Illustrator</div>

                      </div>
                      <img
                        src={AI}
                        alt="flask"
                        style={{
                          width: "3em",
                          height: "3em",
                        }}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default FirstSection;
