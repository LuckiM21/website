import hero from "./GradientImages/hero.jpg"
import first from "./GradientImages/1.jpg"
import second from "./GradientImages/2.jpg"
import third from "./GradientImages/3.jpg"
import fourth from "./GradientImages/4.jpg"
import fifth from "./GradientImages/5.jpg"
import sixth from "./GradientImages/6.jpg"
import seventh from "./GradientImages/7.jpg"
import eighth from "./GradientImages/8.jpg"
import ninth from "./GradientImages/9.png"
import tenth from "./GradientImages/10.jpg"
import eleventh from "./GradientImages/11.jpg"
import twelvth from "./GradientImages/12.jpg"
import thirteenth from "./GradientImages/13.jpg"
import fourteenth from "./GradientImages/14.jpg"
import fifteenth from "./GradientImages/15.jpg"
import sixteenth from "./GradientImages/16.jpg"

import { Link } from "react-router-dom";
const Gradients = () => {
  return (
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
                      <h1>Gradient angles in CSS, Figma & Sketch</h1>
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
                        <span className="mood svelte-y08q9b">
                          Feeling optimistic
                        </span>{" "}
                        <span>•</span>
                        <span>
                          <time title="Jul 15, 2023" dateTime="July 15, 2023">
                            1 months ago
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
                      <p>
                        Do you know the feeling when a subject never lets you
                        go? In the last years, I have worked with different
                        graphics programs and have written many lines of CSS.
                        Even though it is now easy to copy CSS code for
                        gradients directly from e.g. Figma, I always had the
                        feeling that gradients in graphics programs behave
                        somewhat differently than gradients created with CSS.
                        Especially the angle of a gradient sometimes seemed more
                        like a random product to me. In the end, copying the CSS
                        code often leads to subtle, but intolerable differences
                        in the design.
                      </p>
                      <br />
                      <p>
                        It becomes even more confusing when you look at how a
                        gradient behaves when the element is resized (At least
                        for me it was confusing). So I&apos;ve been digging very deep
                        to find out what&apos;s really going on when I assign an
                        angle to a gradient in CSS, Figma, or Sketch. If you are
                        also interested in this, well <br />
                        ... keep on reading. But let me warn you. There&apos;s gonna
                        be some trigonometry involved.
                      </p>
                      <h2>I. Gradients in CSS</h2>
                      <h3>Basic Syntax</h3>
                      <p>
                        Gradients have existed in CSS for over ten years. In the
                        beginning it was very challenging to implement them
                        because every browser used its own syntax. Nowadays,
                        this is fortunately much easier. For a simple gradient,
                        it is sufficient to specify some colors. Not even the
                        position of the colors is necessary. <br />
                        <code>linear-gradient(#f09, #3023AE, #0ff)</code>
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
                            src={first}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        If only colors are specified, the gradient runs from top
                        to bottom. This can be changed, for example, by putting
                        {" "}<code>to top right</code>{" "}as the direction in front of the color values: <br />
                        <code>
                          linear-gradient(to top right, #f09, #3023AE, #0ff)
                        </code>
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
                        Now the gradient runs from the lower-left corner of the
                        element to the upper right corner. The angle of the
                        gradient is determined by the size of the element. For a
                        square, this results in an angle of precisely 45
                        degrees. If the aspect ratio of the element changes, the
                        gradient&apos;s angle is adjusted to the angle of the
                        diagonal. For example, an aspect ratio of 2:1 results in
                        an angle of approximately 26.5 degrees.
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
                            src={third}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                        <span style={{
                          textAlign: "center"
                        }}><b >

                            You can see that the axis that runs along the middle
                            color stop is positioned exactly on the diagonal
                            opposite to the one defined in CSS (bottom-left to
                            top-right). We will have a closer look at this in the
                            next part.
                          </b>
                        </span>
                      </div>

                      <p>
                        Since the angle here depends on the width of the
                        element, you should be careful when defining a gradient
                        for a button, for example. Different widths can easily
                        result in a non-homogeneous look. Especially if you want
                        the gradient to be parallel to some other line in your
                        design.
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
                            src={fourth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <h3>Specification of exact angles</h3>
                      <p>
                        In addition to the direction from a side or a corner, it
                        is also possible to specify an exact angle. This happens
                        at the same place where we indicated the direction
                        before: <br />
                        <code>linear-gradient(36deg, #f09, #3023AE, #0ff)</code>
                      </p>
                      <p>What happens now can best be described as follows:</p>
                      <div className="callout svelte-n9q8ts">
                        Draw a gradient at an angle of 36 degrees, but make sure
                        that all the colors indicated are visible.
                      </div>
                      <p>
                        I try to explain step by step what this means: First, we
                        draw a vertical axis and rotate it by 36 degrees. Let&apos;s
                        call this one the gradient-axis.
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
                      <p>
                        Next, we draw the diagonal of the rectangle closest to
                        the <i>gradient-axis</i>. In our case, this is the diagonal
                        line from the bottom left to the top right. On this
                        diagonal, we place the given color points – Pink at 0%,
                        purple at 50%, and cyan at 100%.
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
                        We&apos;re almost there now. Only three lines are missing,
                        which run through the given color points and are
                        orthogonal to the <i>gradient-axis</i>. I will refer to them as
                        <i>color-stop-axes</i> (Watch out: The lines are <b>not</b> orthogonal
                        to the rectangle&apos;s diagonal!)
                      </p>
                      <p>
                        At the intersection of the two outer color-stop-axes
                        with the gradient-axis are now the gradient&apos;s start- and
                        end-points.
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
                            src={seventh}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        Finally, the gradient can be painted. And we can see
                        that it runs exactly at the specified angle, and yet a
                        small part of the colors defined at 0 and 100 can be
                        seen on the outer edges.
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
                            src={eighth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        If you are a fan of geometry, you may have seen that the
                        diagonal, the <i>gradient-axis</i>, and the outer{" "}
                        <i>color-stop-axis</i> form a right-angled triangle.
                        Applying the{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Thales%27s_theorem"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          theorem of Thales
                        </a>
                        , we can draw a circle around this triangle. And if we
                        repeat the whole procedure at the remaining three
                        corners, we get a figure that reminds a little bit of a
                        flower. When the gradient is rotated, its endpoints run
                        along the outer line of this flower shape. Pretty cool,
                        right??
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
                            src={ninth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        Now let&apos;s look at the buttons again. First the version
                        from above and for comparison, the same buttons with a
                        fixed angle. It’s only a subtle difference, but in the
                        end, it’s often the little things that matter.
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
                            src={tenth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <h3>II. Gradients in Sketch</h3>
                      <p>
                        Now, what does it look like when we try to recreate the
                        same process in Sketch? First of all, you have to deal
                        with the fact that it is not possible to specify an
                        exact angle for a gradient in Sketch. So let&apos;s start
                        with a square and drag a gradient from one corner to the
                        other. This way we know for sure that it has an angle of
                        45 degrees. Fortunately, smart alignment works here, so
                        it&apos;s pretty easy to hit the exact corner.
                      </p>
                      <p>
                        The result is a gradient that can be recreated with CSS
                        in two ways. Either via <code>to top right</code> or via{" "}
                        <code>45deg</code>.
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
                            src={eleventh}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        Now it gets very interesting when we stretch the square
                        to three times its width and compare the result with the
                        respective CSS declarations:
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
                            src={twelvth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>I don’t want to bore you too much with math.</p>
                      <p>
                        The important thing here is that{" "}
                        <b>
                          neither of the two CSS options behave as they do in
                          Sketch
                        </b>
                        . The gradient in Sketch has an angle of about 71.5
                        degrees (If you&apos;re genuinely interested: this is the arc
                        tangent of 3/1 ). In the{" "}
                        <b>
                          <code>to-top-right</code>
                        </b>{" "}
                        version, the angle is about 18.5 degrees (that is 90 -
                        71.5 or arc tangent of 1/3).
                      </p>
                      <p>
                        In Sketch, the <i>gradient-axis</i> stays on the
                        diagonal, whereas in CSS, the <i>gradient-axis</i> is
                        adjusted so that the <i>color-stop-axes</i> are parallel
                        to the opposing diagonal.
                      </p>
                      <p>
                        Finally, in the <code>45deg</code> version, we have an angle
                        of (surprise) 45 degrees. If you wanted to reproduce
                        this gradient in Sketch, you need to place the
                        gradient&apos;s endpoints at the intersections of{" "}
                        <i>gradient-axis</i> and <i>color-stop-axis</i>. This
                        only works as long as you do not resize the object
                        again.
                      </p>
                      <h2>III. Gradients in Figma</h2>
                      <p>
                        Finally, let’s have a look at how things look like in
                        Figma. Again, we start with a square and draw a gradient
                        from one corner to the other.
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
                            src={thirteenth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        And also in this case we enlarge the square to three
                        times its width to be able to compare the result with
                        the two CSS versions.
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
                            src={fourteenth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        In fact, it looks like Figma behaves exactly like the <code>
                          to top right</code> CSS version. At least that&apos;s what it looks
                        like in the current example. Unfortunately this is not
                        always true. Figma takes the created gradient as if it
                        was a pixel graphic and distorts it. Thus the angle of
                        the gradient also changes. This becomes clear if we
                        start with a 3:1 rectangle, fill it with a gradient and
                        then reduce it to a square.
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
                            src={fifteenth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <p>
                        The changed angle is shown in Figma by a small dot that
                        can easily be overlooked. If you want to change this
                        angle, you have to move this point while holding down
                        the option-key. Unfortunately I don&apos;t know why the
                        distance can be changed as well.
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
                            src={sixteenth}
                            alt="image"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div>
                      <h2>IV. Conclusion</h2>
                      <p>
                        We can see that it is almost impossible to reproduce the
                        behavior of CSS with Figma or Sketch (At least with
                        gradients whose angle is not a multiple of 90). The only
                        thing that can be recreated in Figma is a gradient from
                        one corner to the other. But again, you have to make
                        sure that you first create a square, fill it with the
                        gradient and then distort the square to the desired
                        size.
                      </p>
                      <br />
                      <p>
                        So next time before you blindly copy the given CSS
                        properties into your code, better check if the result
                        really looks like you imagined it. And while you&apos;re at
                        it, take a look at the color stops as well and check if
                        they are positioned correctly or if you can do without
                        the percentage values completely.
                      </p>
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
      </main>
    </>
  );
};

export default Gradients;
