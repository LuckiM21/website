import hero from "./DiagonalImages/hero.jpg";
import first from "./DiagonalImages/1.jpg"
import second from "./DiagonalImages/2.jpg"
import third from "./DiagonalImages/3.jpg"
import fourth from "./DiagonalImages/4.jpg"
import fifth from "./DiagonalImages/5.jpg"
import sixth from "./DiagonalImages/6.jpg"
import last from "./DiagonalImages/last.jpg"
import { Link } from "react-router-dom";
const Diagonal = () => (
  <>
    <main className="svelte-1p8u9ev">
      <div className="article-holder svelte-9xj1dk">
        <div className="article-inner svelte-9xj1dk">
          <div className="article svelte-9xj1dk">
            <div className="article-holder svelte-9xj1dk">
              <div className="article-inner svelte-9xj1dk">
                <div className="article svelte-9xj1dk">
                  <div className="close-holder svelte-9xj1dk">
                    <Link
                      className="close svelte-9xj1dk"
                      to="/notes"
                      tabIndex="0"
                    >
                      <svg
                        width="13"
                        height="15"
                        viewBox="0 0 13 15"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.73716 0.324281C1.36397 -0.0828384 0.731405 -0.110341 0.324286 0.262851C-0.0828328 0.636044 -0.110336 1.26861 0.262857 1.67573L5.3632 7.23974L0.262845 12.8038C-0.110348 13.2109 -0.0828447 13.8434 0.324274 14.2166C0.731393 14.5898 1.36396 14.5623 1.73715 14.1552L6.5 8.95938L11.2628 14.1552C11.636 14.5623 12.2686 14.5898 12.6757 14.2166C13.0828 13.8434 13.1103 13.2109 12.7372 12.8038L7.63681 7.23975L12.7372 1.67573C13.1104 1.26861 13.0829 0.636044 12.6757 0.262851C12.2686 -0.110341 11.636 -0.0828384 11.2629 0.324281L6.50001 5.52011L1.73716 0.324281Z"
                          className="svelte-9xj1dk"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <article className="svelte-9xj1dk">
                    <h1>Create Diagonal Layouts Like It&apos;s 2020</h1>
                    <div className="date svelte-y08q9b">
                      <span>
                        <div className="avatars svelte-1oghubx">
                          <div className="avatar-wrapper svelte-1oghubx">
                            <div className="avatar svelte-1oghubx initial">
                              <figure className="svelte-cmqfoo skeleton">
                                <img
                                  src="/about/avatar.png"
                                  alt="Luckie Mumba"
                                  width="32"
                                  height="32"
                                  loading="lazy"
                                  className="svelte-cmqfoo skip fullwidth"
                                />
                              </figure>
                            </div>
                          </div>
                        </div>
                      </span>
                      <span className="mood svelte-y08q9b">Feeling prompt</span>{" "}
                      <span>•</span>
                      <span>
                        <time title="Jul 15, 2023" dateTime="July 15, 2023">
                          9 months ago
                        </time>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "contents",
                        "--radius": "var(--radius-base)",
                        "--margin": "0 0 var(--spacing-xs)",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={hero}
                          alt="Image of a robot with a laptop"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo fit skip fullwidth"
                        />
                      </figure>
                    </div>
                    <div className="callout svelte-n9q8ts">
                      TL/DR: Diagonal layouts are great. You can build them
                      easily with CSS. Take a look at this{" "}
                      <a
                        href="https://codepen.io/enbee81/full/yLyrmyg"
                        target="_blank"
                        rel="ref"
                      >
                        CodePen
                      </a>{" "}
                      to see how it works.
                    </div>
                    <p>
                      Layouts with diagonal sections are quite popular for
                      several years now. It is not
                      <i> the new hot stuff,</i> and you will probably not find
                      it in the articles titled &quot;Design trends for
                      2020&quot;. But I think it is here to stay. It is one tool
                      I use to bring some dynamic to all the rectangular boxes
                      with boring 90-degree angles.
                    </p>
                    <br />
                    <p>
                      As so often, there is nothing like a holy grail. There are
                      many ways to build these kind of layouts. And with many, I
                      mean three. At least three that I know of:
                    </p>
                    <ol
                      style={{
                        paddingLeft: "5%",
                      }}
                    >
                      <li
                        style={{
                          padding: "10px",
                        }}
                      >
                        Use an SVG in the form of a triangle. This technique is
                        nicely described by Erik Kennedy on{" "}
                        <a
                          href="https://css-tricks.com/creating-non-rectangular-headers/"
                          target="_blank"
                          rel="ref"
                        > CSS-Tricks.

                        </a>

                      </li>
                      <li
                        style={{
                          padding: "10px",
                        }}
                      >
                        Hide part of your section using CSS-Clip-Path. Read
                        {" "}
                        <a
                          href="https://codyhouse.co/blog/post/css-diagonal-containers"
                          target="_blank"
                          rel="ref"
                        >
                          Diagonal Containers in CSS
                        </a>
                        {" "}
                        by Sebastiano Guerriero or
                        {" "}
                        <a
                          href="https://kilianvalkhof.com/2017/design/sloped-edges-with-consistent-angle-in-css/"
                          target="_blank"
                          rel="ref"
                        >
                          Sloped edges with consistent angle in CSS
                        </a>
                        {" "}
                        by Kilian Valkhof.
                      </li>
                      <li
                        style={{
                          padding: "10px",
                        }}
                      >
                        Using CSS-Transforms.
                      </li>
                    </ol>
                    <p>
                      You may already have guessed, which of the given options
                      I&apos;m going to use. Right, the third one :-)
                    </p>
                    <h2>So let&apos;s start</h2>
                    <h3>I. Basic Markup</h3>
                    <p>
                      First, we will set up our HTML Markup. It basically
                      consists of two containers.
                    </p>
                    {/* html

                    <code >
                      <div className="diagonal-box">
                        <div className="content"> ... </div>
                      </div>
                    </code> */}
                    <p>
                      The outer div is our full-width section, whereas the inner
                      one will hold the actual content. Typically you will have
                      a max-width for the inner div and give it a horizontal
                      margin of auto to center it. For now, the outer container
                      gets nothing more than a nice little gradient as
                      background-image.
                    </p>
                    {/*css
                    .diagonal-box {
                      background-image: linear-gradient(45deg, #6303B1, #ff0099);
                    } 
                    .content { 	
                      max-width: 50em;
                        margin: 0 auto; 
                    }
                      */}

                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={first}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>

                    <h3>II. Do the transform</h3>
                    <p>
                      The first idea for creating the diagonals could be to
                      rotate the whole container. The problem here is that after
                      rotating the 100%-width-box, you have to increase the
                      width above 100% so that it still covers the entire
                      viewport. The amount of how much you have to increase the
                      width grows with the height of the section.
                    </p>
                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={second}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>
                    <p>
                      So instead of rotating it, we will use the lesser known
                      skew-transformation. More precisely, we will use SkewY to
                      skew the section along the Y-Axis.
                    </p>
                    {/* 
                    css
                    .diagonal-box {
                      background-image: linear-gradient(45deg, #6303B1, #ff0099);
                      transform: skewY(-11deg);
                    }
                    */}

                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={third}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>

                    <h3>III. Inner and outer transformation</h3>
                    <p>
                      You may have noticed that now the whole section is
                      transformed, and with it also the content-div living in
                      it. Even though this effect can be quite lovely, sometimes
                      you don&apos;t want the content to inherit the given
                      transformation. To reset everything back to normal, you
                      have to reverse the transition:
                    </p>
                    {/* 
                    css
                    .diagonal-box {
                      background-image: linear-gradient(45deg, #654ea3, #eaafc8);
                      transform: skewY(-11deg);
                    }
                    
                    .content {
                      max-width: 50em;
                      margin: 0 auto;
                      transform: skewY(11deg);
                    }
                    */}
                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={fourth}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>
                    <h3>IV. Use a Pseudo-Element</h3>
                    <p>
                      If you want to have some other transitions on the inner
                      element (i.e., some fade-in animation), you always have to
                      think about adding the re-transform first. Other
                      transformations will be stacked on top of the first one.
                      This can get a little bit daunting. Thankfully there is a
                      solution to the problem: Instead of transforming the whole
                      container, you can add a pseudo-element to it with the
                      same dimensions and then skew this. Our Code will look
                      like this:
                    </p>
                    {/* 
                    css
                    .diagonal-box {
                      position: relative;
                    }
                    
                    .diagonal-box:before {
                      position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        background-image: linear-gradient(45deg, #654ea3, #eaafc8); 	
                        transform: skewY(-11deg);
                    }
                    
                    .content {
                      max-width: 50em;
                        margin: 0 auto;
                        position: relative;
                    }
                    */}
                    <p>
                      Now all the magic happens in the before-element. Because
                      it is positioned using position-absolute, you need to add
                      two position-relative values. The first one to the outer
                      container, so all its children can be positioned relative
                      to its borders. And the other one to the inner container,
                      so it stays on top of the before-element.
                    </p>
                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={fifth}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>
                    <h3>V. Place your content without fear.</h3>
                    <p>
                      You may have noticed that now the content is not entirely
                      enclosed by the surrounding container. If you want to
                      place something in the container without being scared that
                      it will cross the diagonal lines, you need a little
                      padding. One way to find the right amount of padding that
                      works for you is to use some trial and error method. Or
                      you dig very deep in your knowledge of trigonometry and
                      calculate the exact height:
                    </p>
                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={sixth}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>
                    <p>
                      When you look at the illustration, you can see that we
                      already know the width of a, as it is our container-width.
                      Then α is the same angle we used to skew our element
                      (11deg). And we know that everything forms a right-angled
                      triangle. With this information we can calculate x using
                      this formula:
                    </p>
                    <p><b>x = tan(α) * a / 2</b></p>
                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={last}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>

                    <p>
                      Sadly we can not use this with CSS calculations as the
                      tangent function is not supported. It is not a huge
                      problem though. Most of the time, the angle will stay the
                      same, so you can calculate it once and then store it.
                      Still, there is one point where you have to be careful:
                      Most of you will use degrees as unit when you do the
                      transformation: <code>skewY(-11deg)</code>. If you do so, you also have
                      to use <b>Deg</b> and not <b>Rad</b> when you calculate tangent. The
                      standard
                      {" "}
                      <a
                        href="https://www.google.com/search?q=calculator"
                        target="_blank"
                        rel="ref"
                      >
                        google calculator
                      </a>
                      {" "}
                      uses Rad as default.
                    </p>
                    <h3>Update 2023: Using tan() in CSS</h3>
                    <p>
                      Since the publication of this article in 2020, there have
                      been some updates in CSS that allow us to use the tangent
                      function. This means that we can now calculate diagonal
                      layouts in CSS without the need for complex workarounds.
                      The tan() function takes an angle as an argument and
                      returns the tangent of that angle. To learn more about
                      using the tan() function in CSS, check out the
                      documentation on
                      <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/tan"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Mozilla Developer Network
                      </a>
                      You can also view an updated
                      <a
                        href="https://codepen.io/enbee81/pen/MWPwMMJ?editors=0100"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        CodePen demo
                      </a>
                      that showcases the use of tan() in CSS.
                    </p>
                    <h3>VI. Fun with Custom-Properties</h3>
                    <p>
                      The numbers you get from the tan-calculation don&apos;t
                      look that nice. In this example tan(11°) / 2 results in
                      0.09719. Fortunately, we can use Custom Properties and
                      make our code a lot easier to read:
                    </p>
                    {/* 
                    css
                    :root {
                      --magic-number: 0.09719; /* tan(11°)/2 */
                    /* --content-width: 100vw;
                      --skew-padding: calc(var(--content-width) * var(--magic-number));
                    }
                    
                    @media screen and (min-width: 42em) {
                      :root {
                        --content-width: 42em;
                      }
                    }
                    
                    */}

                    <p>
                      Let&apos;s see what&apos;s happening here. First, we calculate our
                      magic number and store it in a variable. Then we also
                      store the content-width. Finally, we calculate the
                      required padding by multiplying the previous two variables
                      and also save the value in a variable. Because
                      CSS-Variables are live-updated, we can change the{" "}
                      <b><code>--content-width</code></b>, and the <b><code>--skew-padding</code></b> will
                      adjust accordingly.
                    </p>
                    <p>
                      Now that you have the distance stored in a variable, you
                      can use it anywhere in your project. For example, you
                      could arrange some boxes so that they are aligned with the
                      diagonals. Depending on the number of boxes, you need to
                      use some calculations. Like: <br />
                      <code>transform: translateY(calc(var(--skew-padding) / 2));</code>
                    </p>

                    <div
                      style={{
                        display: "contents",
                        "--maxwidth": "588px",
                        "--radius": "var(--radius-base)",
                        "--shadow": "0 0 0 2px var(--color-primary-border)",
                        "--alignment": "var(--spacing-xs) auto",
                      }}
                    >
                      <figure className="svelte-cmqfoo">
                        <img
                          src={last}
                          alt="image"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          className="svelte-cmqfoo skip maxwidth alignment"
                        />
                      </figure>
                    </div>
                  </article>
                  <div className="newsletter svelte-9xj1dk">
                    <div className="newsletter-content svelte-9xj1dk">
                      <p className="newsletter-text svelte-9xj1dk">
                        <span className="svelte-9xj1dk"></span>
                      </p>
                      <div
                        style={{
                          display: "contents",
                          "--fill": "var(--color-text-primary)",
                        }}
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
                            style={{
                              display: "contents",
                              "--fill": "var(--color-text-secondary)",
                            }}
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
                          href="https://twitter.com/share?url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fhow-i-code-with-ai"
                          className="newsletter-link svelte-9xj1dk"
                          title="Share on twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            style={{
                              display: "contents",
                              "--fill": "var(--color-text-secondary)",
                            }}
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
                          href="#"
                          className="newsletter-link svelte-9xj1dk"
                          target="_blank"
                          title="Share on LinkedIn"
                          rel="noopener noreferrer"
                        >
                          <div
                            style={{
                              display: "contents",
                              "--fill": "var(--color-text-secondary)",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <div className="spacer svelte-1dke9pl"></div> */}
    </main>
  </>
);

export default Diagonal;
