import { Link } from 'react-router-dom'
import hero from '../../../assets/images/cards/hero (1).png'

const Ai = () => {
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
                      // sveltekit:prefetch=""
                      // data-sveltekit-preload-code=""
                      // data-sveltekit-preload-data=""
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
                      <h1>How I leverage AI in my everyday work</h1>
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
                          display: 'contents',
                          '--radius': 'var(--radius-base)',
                          '--margin': '0 0 var(--spacing-xs)',
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
                        AI is here to eat all the things. I agree with `
                        <a
                          href="https://mailchi.mp/eab7a0eacb6a/ai-design-system-20230502?e=8f8a54d0a5"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Design Dept’s Mia Blume `
                        </a>
                        in their assessment that large swaths of the design process are
                        ripe for automation. It’s simply a matter of time.
                      </p>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <div
                          style={{
                            display: 'contents',
                            '--maxwidth': '588px',
                            '--shadow': '0 0 0 2px var(--color-primary-border)',
                            '--alignment': 'var(--spacing-xs) auto'
                          }}
                        >
                          <figure className="svelte-cmqfoo">
                            <img
                              src="https:// /notes/chatgpt/robots.jpg"
                              alt="Cartoon depicting a robot telling a human they are obsolete"
                              width="100%"
                              height="auto"
                              loading="lazy"
                              className="svelte-cmqfoo skip maxwidth alignment"
                            />
                          </figure>
                        </div> */}
                      </a>
                      <p>
                        Rather than pushing back against this development, I feel it’s
                        wise to stay ahead of the game and learn to capitalize on AI in
                        our everyday work. Developers are
                        <a
                          href="https://github.blog/2023-06-13-survey-reveals-ais-impact-on-the-developer-experience/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          `` already doing this
                        </a>
                        , and designers should too.
                      </p>
                      <p>
                        Having been immersed in AI for the past number of months,
                        I wanted to share how I’ve started to bring AI into my day to
                        day.
                      </p>
                      <h2>Real fake data</h2>
                      <p>
                        As a front-end web designer and developer, I want to make things look pretty. One of the
                        pitfalls of working in an abstraction like Figma, is that we are
                        detached from the real data that will eventually power our
                        designs.
                      </p>
                      <p>
                        What looks good in a mock may not accurately reflect the data
                        that will eventually be displayed. AI is a great way to get a
                        sense of what real data will look like in our designs, or ‘real
                        fake data’ as I like to call it.
                      </p>
                      {/* <p>
                        In the below example, I run a rudimentary prompt through OpenAI
                        to generate a conversation between a customer and a support
                        agent. I then use that data to populate a mock conversation in
                        Figma, leveraging the relevant design system components.
                      </p>
                      <figure className="video svelte-1q0lkgh shadow">
                        <video
                          // playsinline=""
                          autoPlay=""
                          loop=""
                          preload="auto"
                          poster="https:// /notes/how-i-code-with-ai"
                          className="svelte-1q0lkgh"
                        >
                          <source
                            src="https:// /notes/chatgpt/plugin.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </figure> */}
                      {/* <p>
                        While the above may seem complex, the prompt in of itself is
                        not. You can accomplish similar results using
                        <a
                          href="https://chat.openai.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          OpenAI’s chat
                        </a>
                        .
                      </p> */}
                      <p>
                        To go one step deeper, you can ask OpenAI to generate a response
                        in JSON. At this point you have the building blocks for how data
                        populates modern frameworks at your disposal.
                      </p>
                      <p>
                        There are several Figma plugins, such as
                        <a
                          href="https://www.figma.com/community/plugin/749195619095691211"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          JSON to Figma
                        </a>
                        , that allow you to import JSON data into your designs.
                      </p>
                      <h2>Coding superpowers</h2>
                      <p>
                        AI has the capability of letting us all utilize code, regardless
                        of our technical abilities.
                      </p>
                      <p>
                        <a
                          href="https://github.com/features/copilot"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          GitHub’s Copilot
                        </a>
                        ` is one of the better known examples of AI assisting developers.
                        It uses OpenAI’s GPT-3 to generate code based on the context of
                        the code you are writing.
                      </p>
                      <div className="callout svelte-n9q8ts">
                        There are questions regarding the
                        <a
                          href="https://githubcopilotlitigation.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ethics of Copilot
                        </a>
                        , and the potential for it to be used to generate code that is
                        not original. If you have ethical concerns, proceed with
                        caution.
                      </div>
                      <p>
                        As someone who moonlights as a developer, I’ve come to find
                        Copilot an invaluable tool. It’s been a game changer in terms of
                        the work I’m able to accomplish.
                      </p>
                      {/* <figure className="video svelte-1q0lkgh shadow">
                        <video
                          // playsinline=""
                          autoPlay=""
                          loop=""
                          preload="auto"
                          poster="https:// /notes/how-i-code-with-ai"
                          className="svelte-1q0lkgh"
                        >
                          <source
                            src="https:// /notes/chatgpt/figma-rest.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </figure> */}
                      {/* <p>
                        I shared this video with my design team about how I connected to
                        Figma’s REST API with OpenAI. Using natural language, I’m able
                        to query Help Scouts Design System (HSDS), discover if a
                        component exists, and if so, return some results.
                      </p>
                      <p>
                        The best part? I didn’t have to write a single line of code. It
                        was created completely from prompting, all the way from
                        understanding how to create a Python app, to displaying the
                        linked results.
                      </p> */}
                      <p>
                        I don’t know about you, but I find that pretty amazing. It’s a
                        level of complexity that would have taken me hours, or even
                        days, to figure out on my own.
                      </p>
                      <h2>UX writing</h2>
                      <p>
                        I leverage AI to generate copy ideas, giving me different
                        variations and tone choices that best fit the UX. This means
                        less time time sweating over micro copy and more time dialing in
                        the overall experience.
                      </p>

                      {/* <div
                        style={{
                          display: 'contents',
                          '--maxwidth': '768px',
                          '--radius': 'var(--radius-base)',
                          '--shadow': '0 0 0 2px var(--color-primary-border)'
                        }}
                      >
                        <figure className="svelte-cmqfoo">
                          <img
                            src="https:// /notes/chatgpt/team.jpg"
                            alt="Photo of Help Scouts Product Design team"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div> */}
                      <p>
                        I spend the majority of our time in Figma, brainstorming
                        principles that reflected the values I want to bring to the
                        work.
                      </p>
                      <p>
                        As I got closer to narrowing in on what the principles are, I
                        leveraged chatGPT as a first pass on copy ideas. This let me
                        have working examples to iterate on, rather than starting from
                        scratch.
                      </p>
                      {/* <div
                        style={{
                          display: 'contents',
                          '--maxwidth': '768px',
                          '--radius': 'var(--radius-base)',
                          '--shadow': '0 0 0 2px var(--color-primary-border)'
                        }}

                      >
                        <figure className="svelte-cmqfoo">
                          <img
                            src="https:// /notes/chatgpt/figjam.png"
                            alt="Screenshot of a FigJam board with a variety of copy ideas"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div> */}
                      <p>
                        This unlocked me so many times. <strong>Writing is tough!</strong> It’s hard to
                        come up with the right words to convey the right message. AI
                        helpes that process move along and prevents me from getting
                        stuck.
                      </p>
                      <p>I’m really delighted with the results.</p>
                      {/* <div
                        style={{
                          display: 'contents',
                          '--maxwidth': '768px',
                          '--radius': 'var(--radius-base)'
                        }}
                      >
                        <figure className="svelte-cmqfoo">
                          <img
                            src="https:// /notes/chatgpt/principles.png"
                            alt="Screenshot that reads: Respectful, Effortless, Familiar"
                            width="100%"
                            height="auto"
                            loading="lazy"
                            className="svelte-cmqfoo skip maxwidth alignment"
                          />
                        </figure>
                      </div> */}
                      <h2>Change</h2>
                      <p>
                        I’m still scratching the surface of what’s possible with AI.
                        It’s been eye-opening to see how quickly changes have taken
                        place, and how much more is on the horizon.
                      </p>
                      <p>
                        Rather than being pessimistic about my jobs, I’m excited to see
                        what the future brings. But I need to be realistic, and
                        understand that my roles will change, and change significantly.
                      </p>
                      <p>
                        How I prepare with AI today will go a long way to how we handle
                        the changes of tomorrow.
                      </p>
                    </article>
                    <div className="newsletter svelte-9xj1dk">
                      <div className="newsletter-content svelte-9xj1dk">
                        <p className="newsletter-text svelte-9xj1dk">
                          <span className="svelte-9xj1dk"></span>
                        </p>
                        <div
                          style={{
                            display: 'contents',
                            '--fill': 'var(--color-text-primary)',
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
                                display: 'contents',
                                '--fill': 'var(--color-text-secondary)',
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
                                display: 'contents',
                                '--fill': 'var(--color-text-secondary)',
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
                            href="httl=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fhow-i-code-with-ai"
                            className="newsletter-link svelte-9xj1dk"
                            target="_blank"
                            title="Share on LinkedIn"
                            rel="noopener noreferrer"
                          >
                            <div
                              style={{
                                display: 'contents',
                                '--fill': 'var(--color-text-secondary)',
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
                </div >
              </div >
            </div>
          </div >
        </div >
        {/* <br /> */}
        {/* <div className="spacer svelte-1dke9pl"></div> */}
      </main>
    </>
  );
};

export default Ai;
