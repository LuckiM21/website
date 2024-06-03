import { Link } from 'react-router-dom'
const Throwaways = () => {
  return (
    <>
      <main className="svelte-1p8u9ev" >
        <div className="article-holder svelte-9xj1dk" >
          <div className="article-inner svelte-9xj1dk">
            <div className="article svelte-9xj1dk">
              <div className="close-holder svelte-9xj1dk">
                <Link
                  className="close svelte-9xj1dk"
                  to="/Notes"
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
                <h1>Throwaway projects are the best projects</h1>
                <div className="date svelte-y08q9b">
                  <span>
                    <div className="avatars svelte-1oghubx">
                      <div className="avatar-wrapper svelte-1oghubx">
                        <div className="avatar svelte-1oghubx initial">
                          <figure className="svelte-cmqfoo skeleton">
                            <img
                              src="https:// /about/avatar.png"
                              alt="Seán Halpin"
                              width="32"
                              height="32"
                              loading="lazy"
                              className="svelte-cmqfoo skip fullwidth loaded"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span className="mood svelte-y08q9b">Feeling destructive</span>
                  <span>•</span>
                  <span>
                    <time title="Jul 13, 2023" dateTime="July 13, 2023">
                      a year ago
                    </time>
                  </span>
                </div>
                <div
                  style={{
                    display: 'contents',
                    '--radius': 'var(--radius-base)',
                    '--shadow': 'none',
                    '--margin': '0 0 var(--spacing-xs)',
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/throwaway/hero.png"
                      alt="Image of a project with an X over it"
                      width="768"
                      height="476"
                      loading="lazy"
                      className="svelte-cmqfoo fit skip fullwidth loaded"
                    />
                  </figure>
                </div>
                <p>
                  Not every idea works. Some don`t fit at the time, some never
                  will. I`ve had my fair share that haven`t panned out the way
                  I`d hoped. Here`s a few personal projects of mine that have
                  struggled to get off the ground.
                </p>
                <p>
                  Why share these? I think it`s important to share the failures
                  as well as the successes. I`ve learnt a lot from these
                  projects, both the good and bad. If any of these inspire
                  others to get creative, I`ll view them as a success.
                </p>
                <h2>Builder</h2>
                <br />
                <p>
                  I put together a POC that allowed anyone to build a HTML based
                  prototype of Help Scouts app by slotting various components
                  together. You could then have it up on CodePen with the push
                  of a button in under a minute.
                </p>
                <figure className="video svelte-1q0lkgh shadow">
                  {/* <video

                    autoPlay=""
                    loop=""
                    preload="auto"
                    poster="https:// /notes/throwaways"
                    className="svelte-1q0lkgh"
                  >
                    <source
                      src="https:// /notes/throwaway/scaff.mp4"
                      type="video/mp4"
                    />
                  </video> */}
                </figure>
                <p>
                  <strong>Why didn’t it work?</strong> It still required
                  technical skills if you wanted to elaborate upon it within
                  CodePen. I made it for designers, but for those without
                  technical knowledge, it was difficult to iterate with and make
                  their own. For those with the technical skills, they preferred
                  to use their own tools. At the end of they day, prototyping
                  should be quick and easy for the individual, which this
                  solution didn’t necessarily address.
                </p>
                <h2>Muood</h2>
                <p>
                  A piece I felt was missing from Spotify — being able to record
                  how I felt when listening to a song, and why. I wanted to
                  capture the moment, then be able to go back and see what I was
                  thinking at the time. So I created the badly named ‘Muood’ as
                  a way to do so.
                </p>
                <figure className="video svelte-1q0lkgh shadow">
                  <video

                    autoPlay=""
                    loop=""
                    preload="auto"
                    poster="https:// /notes/throwaways"
                    className="svelte-1q0lkgh"
                  >
                    <source
                      src="https:// /notes/throwaway/player.mp4"
                      type="video/mp4"
                    />
                  </video>
                </figure>
                <p>
                  <strong>Why didn’t it work?</strong> Paradoxically, capturing
                  the moment takes you out of it. I couldn’t work the action of
                  recording my mood into listening to music. It’s like the
                  <a
                    href="https://youtu.be/3Iyugz1bjyw?t=288"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dystopian Vision Pro promo
                  </a>
                  Apple released, where the parent is recording their child’s
                  birthday in VR/AR, meaning they are never really in the moment
                  in the first place.
                </p>
                <h2>Tada</h2>
                <p>
                  I wanted to find a todo list I could share with my fiancé that
                  didn’t involve a monthly subscription fee. I have to draw the
                  line at subscription services somewhere, and todo lists is it.
                  Turns out that’s hard to find! Todo lists are the base example
                  whenever anyone learns how to make a
                  <a
                    href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CRUD
                  </a>
                  app, so I figured it would be possible to make my own.
                </p>
                <div
                  style={{
                    display: 'contents',
                    '--radius': '0',
                    '--shadow': 'none'
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/throwaway/tada.png"
                      alt="Detailed screens of the tada app UI"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo fit skip fullwidth"
                    />
                  </figure>
                </div>
                <p>I thought it’d be fun to try out some playful UIs.</p>
                <div
                  style={{
                    display: 'contents',
                    '--radius': 'var(--radius-base)',
                    '--shadow': '0 0 0 2px var(--color-primary-border)'
                  }}
                >
                  <figure className="svelte-cmqfoo">
                    <img
                      src="https:// /notes/throwaway/collection.png"
                      alt="Screenshots of the tada app UI"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      className="svelte-cmqfoo fit skip fullwidth"
                    />
                  </figure>
                </div>
                <p>
                  <strong>Why didn’t it work?</strong> Because it’s web based
                  and not a native app.
                </p>
                <p>
                  Trying to replicate native iOS “feel” in mobile Safari is
                  hard. The browser is also quite quirky in terms of it’s
                  functionality. If you’ve used the browser on iOS, you’ll know
                  the viewport size changes depending on scroll, with navigation
                  showing and hiding. This makes placing fixed UI on the screen
                  really cumbersome, which I had leaned into heavily with Tada’s
                  UI. I recently learnt about
                  <a
                    href="https://ishadeed.com/article/new-viewport-units/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dynamic viewport units
                  </a>
                  so maybe there’s hope yet to improve this.
                </p>
                <h2>Pics</h2>
                <p>
                  I decided to make my own personal Instagram. I’m not a huge
                  social media person, and wanted control and privacy over my
                  content.
                </p>
                <figure className="video svelte-1q0lkgh shadow">
                  <video

                    autoPlay=""
                    loop=""
                    preload="auto"
                    poster="https:// /notes/throwaways"
                    className="svelte-1q0lkgh"
                  >
                    <source
                      src="https:// /notes/throwaway/pics.mp4"
                      type="video/mp4"
                    />
                  </video>
                </figure>
                <p>
                  <strong>Why didn’t it work?</strong> The jury is still out on
                  this one — but the stumbling blocks I’ve encountered are
                  mostly around processing images, optimizing them, and making
                  sure I don’t tank the app with too much media.
                </p>
                <p>
                  The technical challenges are tough, but I knew this would be a
                  fairly ambitious project to pull off. Still, it’s taught me a
                  lot about the various techniques and tricks that apps like
                  this employ to stay functional. Back-end optimization wasn’t
                  on my radar for this one but, hey, that’s part of the fun of
                  these projects. Check back in with me in a few months if it’s
                  worked out or not.
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
                      '--fill': 'var(--color-text-secondary)'
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
                      // strokeinejoin="round"
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
                          '--fill': 'var(--color-text-secondary)'
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
                          // strokeinejoin="round"
                          className="svelte-wu96f2"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                    </button>
                    <a
                      href="https://twitter.com/share?url=https%3A%2F%2F luckiemumba.xyz.com%2Fnotes%2Fthrowaways"
                      className="newsletter-link svelte-9xj1dk"
                      title="Share on twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        style={{
                          display: 'contents',
                          '--fill': 'var(--color-text-secondary)'
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
                          // strokeinejoin="round"
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
                          display: 'contents',
                          '--fill': 'var(--color-text-secondary)'
                        }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          // strokeinejoin="round"
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
        </div >
        <div className="spacer svelte-1dke9pl"></div>
      </main >
    </>
  );
};

export default Throwaways;
