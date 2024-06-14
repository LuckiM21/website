import { Link } from "react-router-dom";
const CssBR = () => {
  return (
    <>
      <main className="svelte-1p8u9ev">
        <div className="article-holder svelte-9xj1dk">
          <div className="article-inner svelte-9xj1dk">
            <div className="article svelte-9xj1dk">
              <div className="close-holder svelte-9xj1dk __web-inspector-hide-shortcut__">
                <Link
                  className="close svelte-9xj1dk"
                  tabIndex="0"
                  data-sveltekit-preload-code=""
                  data-sveltekit-preload-data=""
                  to="/projects"
                >
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                <div className="close-holder svelte-9xj1dk"></div>
                <h1>CSS Border - Radius Can Do That?</h1>

                <div className="date svelte-y08q9b">
                  <span className="mood svelte-y08q9b">Feeling fantastic</span>
                  <span>•</span>
                  <span>
                    <time title="Dec 27, 2023" dateTime="Dec 27, 2023">
                      1 year ago
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
                <h2>
                  How to create very cool effects with a rarely used feature.
                </h2>
                <p>
                  <b>TL/DR:</b> When you use eight values specifying
                  border-radius in CSS, you can create organic looking shapes.
                  WOW. No time to read it all ?— we made a visual tool for you.
                  Find it here.
                </p>

                <h2>Introduction</h2>
                <p>
                  During 2018&apos;s{" "}
                  <a href="https://frontendconf.ch/" target="_blank" rel="ref">
                    Frontend Conference Zurich
                  </a>{" "}
                  <a
                    href="https://medium.com/@rachelandrew"
                    target="_blank"
                    rel="ref"
                  >
                    Rachel Andrew
                  </a>{" "}
                  talked about <b>Unlocking the Power of CSS Grid Layout</b>. At
                  the end of her talk, she mentioned something about an old CSS
                  property that got stuck in my head:
                </p>
                <div className="callout svelte-n9q8ts">
                  “The Image is set round just by using the well-supported
                  border-radius. Don’t forget that old CSS still exists and is
                  useful. You don’t need to use something fancy for every
                  effect.” — Rachel Andrew
                </div>
                <p>
                  Shortly after I heard this talk, I thought that you certainly
                  could create more than just circles and started to dig deeper
                  into what can be done using border-radius.
                </p>

                <h1
                  style={{
                    padding: "1em",
                  }}
                >
                  Mastering border-radius
                </h1>
                <h3>Single value</h3>
                <p>
                  Let’s start with the basics. Hope this will not bore you. You
                  are probably familiar with CSS, and you also know
                  border-radius. It is around for some years now, mostly used
                  with a single value like this: <code>border-radius: 1em</code>{" "}
                  and was maybe one of the most discussed/loved CSS3 features
                  back in the
                </p>
                <p>
                  Whenever you only use a single value, all corners are rounded
                  by this value:
                </p>
                <div
                  style={{
                    display: "contents",
                    "--maxwidth": "588px",
                    "--shadow": "0 0 0 2px var(--color-primary-border)",
                    "--alignment": "var(--spacing-xs) auto",
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/chatgpt/robots.jpg"
                      alt="image"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip maxwidth alignment"
                    />
                  </figure>
                </div>
                <p>
                  As you can see in the example above, next to fixed length
                  values like <code>px</code>, <code>rem</code> or{" "}
                  <code>em</code> you can also use percentages. Those are mostly
                  used to create a circle by setting border-radius to 50%. The
                  percentage value is based on the width and height of the given
                  element. So when you use it on a rectangle, you will no longer
                  have symmetrical corners. Here’s an example showing the
                  difference between <code>border-radius: 110px</code> and{" "}
                  <code>border-radius: 30%</code> applied to a rectangle.
                </p>
                <div
                  style={{
                    display: "contents",
                    "--maxwidth": "588px",
                    "--shadow": "0 0 0 2px var(--color-primary-border)",
                    "--alignment": "var(--spacing-xs) auto",
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/chatgpt/robots.jpg"
                      alt="image"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip maxwidth alignment"
                    />
                  </figure>
                </div>
                <span>
                  Notice that the corners on the right side are not symmetrical
                  and keep that in mind. We’ll come back to this later
                </span>

                <h3>Four different values</h3>
                <p>
                  When you use more than one value, you start setting values for
                  each corner, beginning in the top left corner and then moving
                  clockwise. Again you can also use percentages, and you could
                  also mix percentages with fixed-length values.
                </p>
                <div
                  style={{
                    display: "contents",
                    "--maxwidth": "588px",
                    "--shadow": "0 0 0 2px var(--color-primary-border)",
                    "--alignment": "var(--spacing-xs) auto",
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/chatgpt/robots.jpg"
                      alt="image"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip maxwidth alignment"
                    />
                  </figure>
                </div>
                <h3>
                  Eight values separated by a slash (this is where it gets
                  interesting)
                </h3>
                <p>
                  I think most of you have already done everything I explained
                  above. Now we get to the exciting part. What happens, if you
                  separate values with a slash and specify up to eight values?
                  Let’s see, what the spec says about that:
                </p>
                <p>
                  “If values are given before and after the slash, then the
                  values before the slash set the horizontal radius and the
                  values after the slash set the vertical radius. If there is no
                  slash, then the values set both radii equally.”{" "}
                  <a
                    href="https://www.w3.org/TR/css-backgrounds-3/#border-radius"
                    target="_blank"
                    rel="ref"
                  >
                    W3C
                  </a>{" "}
                </p>
                <p>
                  So, values before the slash are responsible for horizontal
                  distances whereas values after the slash define the vertical
                  lengths. But what does that mean? Remember percentage values
                  on rectangular shapes? We had different absolute values for
                  vertical and horizontal distances and asymmetrically rounded
                  corners, and that is precisely what you get when you use the{" "}
                  <i>slash syntax</i>.
                </p>
                <p>
                  So when you compare <code>border-radius: 4em 8em</code> to{" "}
                  <code>border-radius: 4em / 8em</code> the results are quite
                  different.
                </p>
                <div
                  style={{
                    display: "contents",
                    "--maxwidth": "588px",
                    "--shadow": "0 0 0 2px var(--color-primary-border)",
                    "--alignment": "var(--spacing-xs) auto",
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/chatgpt/robots.jpg"
                      alt="image"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip maxwidth alignment"
                    />
                  </figure>
                </div>
                <span>
                  The symmetrical corners on the left form quarter of a circle,
                  whereas the asymmetrical corners on the right are part of an
                  ellipsis.
                </span>
                <p>
                  The shapes that you get with this look a little odd, to be
                  honest. But remember the circles you create with
                  {" "}<code>border-radius: 50%</code>{" "}. You get a circle because both values
                  defining one side add up to 100% (50% + 50% = 100%) and there
                  is no straight line left, that reminds you of the original
                  square. If you apply the same logic to the full eight value
                  border-radius syntax, you can create a shape that looks a
                  little like a plectrum or an organic cell:
                </p>
                <div
                  style={{
                    display: "contents",
                    "--maxwidth": "588px",
                    "--shadow": "0 0 0 2px var(--color-primary-border)",
                    "--alignment": "var(--spacing-xs) auto",
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/chatgpt/robots.jpg"
                      alt="image"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip maxwidth alignment"
                    />
                  </figure>
                </div>
                <div
                  style={{
                    display: "contents",
                    "--maxwidth": "588px",
                    "--shadow": "0 0 0 2px var(--color-primary-border)",
                    "--alignment": "var(--spacing-xs) auto",
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/chatgpt/robots.jpg"
                      alt="image"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo skip maxwidth alignment"
                    />
                  </figure>
                </div>
                <span>
                  In the end it is four overlapping ellipses that build the final shape. Easy ha!
                </span>
                <h3>
                  Don’t panic… we made a visual generator for you
                </h3>
                <p>
                  It took me some time to get used to this syntax. Somehow it is not that intuitive. To make things a little easier for you, we built a little tool, that helps you create your very own organic shape.

                </p>
                <a
                  href="https://www.w3.org/TR/css-backgrounds-3/#border-radius"
                  target="_blank"
                  rel="ref"
                >
                  FANCY BORDER RADIUS
                </a>{" "}


                {/* ----------------------------------------white spaces------------------------ */}
                <div>
                  <p className="ep-133-holder svelte-1u4x8wq">
                    here is a portfolio website
                  </p>
                  <div className="ep-133-holder svelte-1u4x8wq">
                    <img
                      src="../resources/showcase/showcase_browso-dm.png"
                      alt="image"
                    />
                  </div>
                </div>

                {/* -------------------------callout-------------------------------------- */}
                <div className="callout svelte-n9q8ts">
                  This approach is fine for CSS art, but I`m hesitant to
                  recommend it for production code. I found the CSS generated by
                  Figma at times confusing when using CSS variables.
                </div>
              </article>
              <div className="container">
                <h4>
                  to walkthrough through my work click
                  <a href="#">here</a>
                </h4>
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
            </div>
          </div>
        </div>
        <div className="spacer svelte-1dke9pl"></div>
      </main>
    </>
  );
};

export default CssBR;
