
const WebProjects = () => {
  return (
    <>
      <main className="svelte-1p8u9ev">
        <div className="article-holder svelte-9xj1dk">
          <div className="article-inner svelte-9xj1dk">
            <div className="article svelte-9xj1dk">
              <article className="svelte-9xj1dk">
                <div className="close-holder svelte-9xj1dk">

                </div>
                <h1>Web Projects</h1>

                <div className="date svelte-y08q9b">

                  <span className="mood svelte-y08q9b">Feeling puntastic</span>
                  <span>•</span>
                  <span>
                    <time title="Dec 27, 2023" dateTime="Dec 27, 2023">
                      3 months ago
                    </time>
                  </span>
                </div>
                <div
                  className="
                  display: contents;
                  --radius: var(--radius-base);
                  --margin: 0 0 var(--spacing-xs);
                "
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="../assets/images/AboutImages/large-07.png"
                      alt="Abstract image dipicting the website templates I built"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo fit skip fullwidth loaded"
                    />
                  </figure>
                </div>
                <h2>How I source up my ideas</h2>
                <p>
                  CSS art never captivated me from a creator`s perspective.
                  Despite seeing amazing examples, the idea of investing time in
                  what seemed like an aimless endeavor puzzled me. To me, design
                  was a tool for communication and problem-solving, not an end in
                  itself.
                </p>
                <p>
                  Yet, during an intense period — wrapping up my final months at
                  Help Scout
                  <a
                    href="https://www.helpscout.com/ai-features/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    shipping neat features
                  </a>
                  , diving into an
                  <a
                    href="https://www.droplette.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ambitious AI side project
                  </a>
                  , quietly
                  <a
                    href="https://www.docsthemepro.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    launching another
                  </a>
                  , and on the cusp of leading design at
                  <a
                    href="https://www.givedirectly.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    GiveDirectly
                  </a>
                  — I found myself completely fatigued. It wasn`t just physical
                  exhaustion; I was creatively spent. The past year of
                  purpose-driven work had made me drained.
                </p>
                <h2>Code as a refuge</h2>
                <p>
                  Over the years, coding had become a refuge of sorts. It engaged
                  my brain in ways designing didn`t. So much of its binary in
                  aspect. It either works or it doesn`t. The grey area often found
                  when designing is less apparent with code, and so it had evolved
                  into an enjoyable pastime.
                </p>
                <p>
                  I craved a project that would let me wear my coding hat whilst
                  creating something visually appealing, without the usual heavy
                  scrutiny.
                </p>
                <p>
                  During this time, Teenage Engineering launched the
                  <a
                    href="https://teenage.engineering/products/ep-133"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ep-133
                  </a>
                  . Designers tend to fawn over all their gadgets, with fairly
                  good reason. In my opinion, their devices showcase the
                  creativity and playfulness often missing in designers`` lives.
                </p>
                <p>
                  For the first time, I was interested in recreating something
                  with CSS for the sake of it. It was time to disengage my design
                  brain and play!
                </p>
                {/* ----------------------------------------white spaces------------------------ */}
                <div>

                  <p className="ep-133-holder svelte-1u4x8wq">here is a portfolio website</p>
                  <div className="ep-133-holder svelte-1u4x8wq">
                    <img src="../resources/showcase/showcase_browso-dm.png" alt="image" />
                  </div>
                </div>
                <p>
                  Above is the outcome. Switching to `blueprint`` mode, you can see
                  the underlying structure. It`s interesting to see how clear and
                  simple the layout is when the complexity of the visuals is
                  stripped away. The excellent UI and colour choices by Teenage
                  Engineering are what makes this device so tactile and appealing,
                  in my view.
                </p>
                <p>
                  Here`s a short walkthrough for how I approached the project.
                </p>
                <h2>Getting the colours right</h2>
                <p>
                  An important first step — getting the colours right. I used the
                  reliable eye-picker tool to identify the gradient values for
                  each element and then replicated these elements in Figma.
                </p>
                <div
                  className="
                  display: contents;
                  --radius: var(--radius-base);
                  --margin: 0 0 var(--spacing-xs);
                "
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https://www.luckiemumba.xyz/notes/cssart/ep133-colors.png"
                      alt="colour palette for the ep-133"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo fit skip fullwidth"
                    />
                  </figure>
                </div>
                <p>
                  From there I switched to Figmas dev mode to see the generated
                  code. This is a great way to get a head start on the CSS. I
                  copied the values and pasted them into my CSS file.
                </p>
                {/* -------------------------callout-------------------------------------- */}
                <div className="callout svelte-n9q8ts">
                  This approach is fine for CSS art, but I`m hesitant to recommend
                  it for production code. I found the CSS generated by Figma at
                  times confusing when using CSS variables.
                </div>
                <p>
                  If you dig into the code, you`ll notice quite a number of
                  instances where I`ve used CSS grid. The overall architecture of
                  the device lends itself well to this approach. The underlying
                  code uses `
                  <a
                    href="https://svelte.dev/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Svelte
                  </a>
                  , which lets me tackle repeating divs with ease. Take, for
                  example, the speaker located in the top right corner.
                </p>

                <p>
                  There’s quite a few divs for the speaker vents (168!), but the
                  code is clean and easy to read. Using
                  <code>nth-child</code> selectors, I can target specific vents
                  and apply the appropriate colours and box-shadows.
                </p>


                <h2>To be continued</h2>
                <p></p>
                <p> Overall, I`m happy with the progress. There`s plenty of room for
                  improvement.</p>
                <p>
                  The process, the learning, and the joy of
                  creating something is just wondafoul . I`ll be back to create
                  more in the future.
                </p>
              </article>
              {/* --------------------------------------------------------------------WEB APPS----------------------------------------------------------------------- */}
              <div className="showcase-holder svelte-18wal5">
                <h2>Web Apps</h2>
                <div className="showcase svelte-18wal5">
                  <a href="#" className="showcase-block svelte-18wal5 big">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Clicker Game
                        </div>
                        <span className="description svelte-18wal5">
                          Instantly spec out your designs so developers can have no excuses.
                          Here are some awesome websites and templates that i built,
                          as part of my Css, HTML, and Javascript practices.
                          <ul >
                            <li className='svelte-gfa3ns'>
                              <a href="#" target="_blank" rel="nofollow noreferrer" className="svelte-gfa3ns">
                                Portfolio templates
                              </a>
                            </li>
                            <li className='svelte-gfa3ns'>
                              <a href="#" target="_blank" rel="nofollow noreferrer" className="svelte-gfa3ns">
                                Portfolio templates
                              </a>
                            </li>
                            <li className='svelte-gfa3ns'>
                              <a href="#" target="_blank" rel="nofollow noreferrer" className="svelte-gfa3ns">
                                Portfolio templates
                              </a>
                            </li>
                            <li className='svelte-gfa3ns'>
                              <a href="#" target="_blank" rel="nofollow noreferrer" className="svelte-gfa3ns">
                                Portfolio templates
                              </a>
                            </li>
                          </ul>
                        </span>
                        <div className="preview-holder svelte-18wal5">
                          <div className="preview svelte-18wal5">
                            <div className="svelte-l9lsq7">
                              <figure className="svelte-cmqfoo">
                                {/* <img src='/assets/images/resources/showcase/showcase_outline-dm.png' alt="" width="" height="" loading="lazy" className="svelte-cmqfoo loaded" /> */}
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Todo Application
                        </div>
                        <span className="description svelte-18wal5">
                          Always keep track of whats supposed to be done - comes in nasty
                          pink... Here you will find multiple fully functional web applications that I built using React, TypeScrypt, Css(Tiwind) and HTML.
                        </span>
                      </div>
                      <div className="shot-holder svelte-18wal5">
                        <div className="shot svelte-18wal5">
                          <figure className="svelte-cmqfoo">
                            {/* <img src={FirstCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                          </figure>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Chat App
                        </div>
                        <span className="description svelte-18wal5">
                          Chat, rage, or table flip about design with your team with this chat app prototype.
                        </span>
                      </div>
                      <div className="shot-holder svelte-18wal5">
                        <div className="shot svelte-18wal5">
                          <figure className="svelte-cmqfoo">
                            {/* <img src={SecondCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                          </figure>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="showcase-block coming-soon svelte-18wal5 big">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          <span className="category-info">
                            Currently In The Workings
                          </span>
                          <span className="soon svelte-18wal5">
                            Coming Soon
                          </span>
                        </div>
                        <span className="description svelte-18wal5">
                          Document A11y concerns to start conversations with developers.
                        </span>
                        <span className="description svelte-18wal5">
                          Currently Creating an AI enhanced color palettes Plugin in Figma based on your color system..
                          Once its complete it will be available on this section..
                        </span>
                        <span className="description svelte-18wal5">
                          <b><i>As for now stay tuned</i></b>
                        </span>
                        <div className="preview-holder svelte-18wal5">
                          <div className="preview svelte-18wal5">
                            <div className="svelte-l9lsq7"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
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
                          {/* <img src={SixthCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                        </figure>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
                    <div className="deets svelte-18wal5">
                      <div className="title svelte-18wal5">
                        Job Search
                      </div>
                      <span className="description svelte-18wal5">
                        Let folks know what`s up with status thumbnails for your work.
                      </span>
                    </div>
                    <div className="shot-holder svelte-18wal5">
                      <div className="shot svelte-18wal5">
                        <figure className="svelte-cmqfoo">
                          {/* <img src={SeventhCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                        </figure>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
                    <div className="deets svelte-18wal5">
                      <div className="title svelte-18wal5">
                        Other
                      </div>
                      <span className="description svelte-18wal5">
                        Let folks know what`s up with status thumbnails for your work.
                      </span>
                    </div>
                    <div className="shot-holder svelte-18wal5">
                      <div className="shot svelte-18wal5">
                        <figure className="svelte-cmqfoo">
                          {/* <img src={SeventhCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                        </figure>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
              {/* ----------------------------------------------------------------------WEB-TEMPLATES------------------------------------------------------------------- */}

              <div className="showcase-holder svelte-18wal5">
                <h2>Web Templates</h2>
                <div className="showcase svelte-18wal5">
                  <a href="#" className="showcase-block svelte-18wal5 big">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Portfolio Templates
                        </div>
                        <span className="description svelte-18wal5">
                          Instantly spec out your designs so developers can have no excuses.
                          Here are some awesome websites and templates that i built,
                          as part of my Css, HTML, and Javascript practices.
                        </span>
                        <span className="description svelte-18wal5">
                          These are clean, modern and responsive professional looking resume /
                          personal portfolio template for all types of career choices.
                          well crafted Designed for user experience on multiple device screen sizes like laptops, desktops and smartphones.
                          These templates give flexibilty to customise the theme easly as per the your requirements.
                          Included with all latest technology HTML5, CSS3 and jQuery.
                        </span>
                        <span className="description svelte-18wal5">
                          <h4>Key features</h4>
                          <ul>
                            <li>Fully Responsive</li>
                            <li>Fully Customizable</li>
                            <li>Browser compatability</li>
                            <li>Multipurpose theme</li>
                            <li>Smooth Scrolling</li>
                            <li>All in One Page</li>
                          </ul>
                        </span>
                        <div className="preview-holder svelte-18wal5">
                          <div className="preview svelte-18wal5">
                            <div className="svelte-l9lsq7">
                              <figure className="svelte-cmqfoo">
                                {/* <img src='/assets/images/resources/showcase/showcase_outline-dm.png' alt="" width="" height="" loading="lazy" className="svelte-cmqfoo loaded" /> */}
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Company Tailored Templates
                        </div>
                        <span className="description svelte-18wal5">
                          Always keep track of whats supposed to be done - comes in nasty
                          pink... Here you will find multiple fully functional web applications that I built using React, TypeScrypt, Css(Tiwind) and HTML.
                        </span>
                      </div>
                      <div className="shot-holder svelte-18wal5">
                        <div className="shot svelte-18wal5">
                          <figure className="svelte-cmqfoo">
                            {/* <img src={FirstCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                          </figure>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Coming Soon
                        </div>
                        <span className="description svelte-18wal5">
                          Are your website is currently being maintained and offline for a
                          while? then you can use these templates can be of use to you.
                          My Coming Soon templates designs are well designed,
                          modern and responsive.
                        </span>
                        <span className="description svelte-18wal5">
                          These themes have a jquery countdown plugin in build.
                          and they are designed with height quality standards
                          to meet the latest requirements that fit in
                          all devices with multi browser support.
                        </span>
                      </div>
                      <div className="shot-holder svelte-18wal5">
                        <div className="shot svelte-18wal5">
                          <figure className="svelte-cmqfoo">
                            {/* <img src={SecondCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                          </figure>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="showcase-block svelte-18wal5">
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
                            {/* <img src={FourthCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                          </figure>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5 big">
                    <div className="showcase-inner svelte-18wal5">
                      <div className="deets svelte-18wal5">
                        <div className="title svelte-18wal5">
                          Current in the workings
                        </div>
                        <span className="description svelte-18wal5">
                          Create AI enhanced color palettes in Figma based on your color system.
                        </span>
                        <div className="preview-holder svelte-18wal5">
                          <div className="preview svelte-18wal5">
                            <div className="svelte-l9lsq7">
                              <figure className="svelte-cmqfoo">
                                <img src='/assets/images/resources/showcase/showcase_cim-dm.png' alt="" width="" height="" loading="lazy" className="svelte-cmqfoo loaded" />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
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
                          {/* <img src={SixthCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                        </figure>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="#" className="showcase-block svelte-18wal5"><div className="showcase-inner svelte-18wal5">
                    <div className="deets svelte-18wal5">
                      <div className="title svelte-18wal5">
                        Other
                      </div>
                      <span className="description svelte-18wal5">
                        Let folks know what`s up with status thumbnails for your work.
                      </span>
                    </div>
                    <div className="shot-holder svelte-18wal5">
                      <div className="shot svelte-18wal5">
                        <figure className="svelte-cmqfoo">
                          {/* <img src={SeventhCardImage} alt="" width="100" height="100" loading="lazy" className="svelte-cmqfoo skip fullwidth loaded" /> */}
                        </figure>
                      </div>
                    </div>
                  </div>
                  </a>
                </div>
              </div>
              {/* --------------------------------------------/SPAN---------------------------------------------------- */}

              <div className="newsletter svelte-9xj1dk">
                <div className="newsletter-content svelte-9xj1dk">
                  <p className="newsletter-text svelte-9xj1dk">
                    <span className="svelte-9xj1dk"></span>
                  </p>
                  <div className="display: contents; --fill: var(--color-text-primary)">
                    <svg

                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="svelte-wu96f2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <span className="svelte-9xj1dk">
                    Enjoy this note? Feel free to share!
                  </span>
                  <p></p>
                  <div className="newsletter-buttons svelte-9xj1dk">
                    <button
                      className="newsletter-link svelte-9xj1dk"
                      title="Copy link"
                    >
                      <div
                        className="
                        display: contents;
                        --fill: var(--color-text-secondary);
                      "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="svelte-wu96f2"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                    </button>
                    <a
                      href="https://twitter.com/share?url=https%3A%2F%2Fluckiemumba.xyz.com%2Fnotes%2Fcss-for-kicks"
                      className="newsletter-link svelte-9xj1dk"
                      title="Share on twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="
                        display: contents;
                        --fill: var(--color-text-secondary);
                      "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="svelte-wu96f2"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fluckiemumba.xyz.com%2Fnotes%2Fcss-for-kicks"
                      className="newsletter-link svelte-9xj1dk"
                      target="_blank"
                      title="Share on LinkedIn"
                      rel="noopener noreferrer"
                    >
                      <div
                        className="
                        display: contents;
                        --fill: var(--color-text-secondary);
                      "
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="svelte-wu96f2"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div >
          </div>
        </div >
        <div className="spacer svelte-1dke9pl"></div>
      </main >
    </>
  )
}

export default WebProjects
