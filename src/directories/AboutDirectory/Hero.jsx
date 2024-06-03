import Avator from "../../assets/images/avators/Avator.jpg";

const Hero = () => {
  return (
    <>
      <h1 className="svelte-veednl">
        <span slot="title">I`m Luckie.</span>
      </h1>


      <div className="deets grid svelte-c4ft01">
        <div className="me svelte-c4ft01" >
          <div className="me-content svelte-c4ft01">
            <div className="me-holder svelte-c4ft01">
              <div style={{
                display: 'contents',
                '--display': 'block'
              }}>
                <figure className="svelte-cmqfoo radius skeleton">
                  <img
                    src={Avator}
                    alt="Photo of Luckie"
                    width="384"
                    height="384"
                    loading="lazy"
                    className="svelte-cmqfoo radius fit skip loaded"
                  />
                </figure>
              </div>
            </div>
            <div className="music-player svelte-c4ft01">
              <div style={{
                display: 'contents',
                '--color': 'var(--color-text-tertiary'
              }} >
                <div className="icon svelte-1ybcdb5">
                  <div style={{
                    display: 'contents',
                    '--fill': 'var(--color-primary)'
                  }}>
                    <svg
                      width="41"
                      height="40"
                      viewBox="0 0 41 40"
                      fill="none"
                      className="svelte-13vxf5t"
                    >
                      <path d="M20.5013 0.0664062C9.48964 0.0664062 0.5625 8.99331 0.5625 20.005C0.5625 31.0171 9.48964 39.9433 20.5013 39.9433C31.5142 39.9433 40.4404 31.0171 40.4404 20.005C40.4404 8.99403 31.5142 0.0673586 20.5011 0.0673586L20.5013 0.0664062V0.0664062ZM29.6451 28.8236C29.56 28.963 29.4483 29.0842 29.3163 29.1804C29.1843 29.2766 29.0346 29.3458 28.8758 29.3841C28.717 29.4223 28.5522 29.4289 28.3909 29.4034C28.2296 29.3779 28.0748 29.3208 27.9356 29.2355C23.2542 26.3759 17.3608 25.7283 10.4204 27.314C10.099 27.3871 9.76174 27.3296 9.48275 27.1541C9.20375 26.9787 9.00584 26.6996 8.9325 26.3783C8.89597 26.2192 8.89119 26.0545 8.91842 25.8935C8.94565 25.7326 9.00436 25.5786 9.09118 25.4404C9.17801 25.3021 9.29126 25.1824 9.42443 25.088C9.5576 24.9936 9.70808 24.9264 9.86726 24.8902C17.4625 23.1543 23.9775 23.9021 29.2332 27.114C29.8189 27.4736 30.0046 28.2378 29.6451 28.8236V28.8236ZM32.0856 23.3938C31.6356 24.1259 30.6785 24.3569 29.9475 23.9069C24.588 20.6119 16.4182 19.6578 10.0789 21.5821C9.25679 21.8305 8.38845 21.3671 8.13893 20.5464C8.01986 20.1518 8.06213 19.7262 8.25647 19.3627C8.4508 18.9993 8.78134 18.7277 9.1756 18.6076C16.4168 16.4105 25.4189 17.4747 31.5737 21.2569C32.3046 21.7069 32.5356 22.664 32.0856 23.394V23.3938ZM32.2951 17.7405C25.8689 13.9236 15.2665 13.5726 9.13107 15.4347C8.14583 15.7335 7.10393 15.1774 6.80536 14.1921C6.66179 13.7188 6.71209 13.2078 6.94521 12.7715C7.17832 12.3353 7.57515 12.0094 8.04845 11.8657C15.0915 9.7276 26.7999 10.1407 34.1985 14.5328C34.4093 14.6576 34.5935 14.8227 34.7404 15.0187C34.8874 15.2147 34.9942 15.4378 35.0548 15.6752C35.1154 15.9126 35.1286 16.1596 35.0936 16.4021C35.0586 16.6446 34.9761 16.8778 34.8508 17.0883C34.327 17.9745 33.1794 18.2666 32.2961 17.7405H32.2951Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="track-list svelte-1ybcdb5">
                  <div className="artist svelte-1ybcdb5">On repeat</div>
                  <div className="song svelte-1ybcdb5">
                    <a
                      href="https://open.spotify.com/track/5xYZXIgVAND5sWjN8G0hID"
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="svelte-1ybcdb5"
                    >
                      Go! by Public Service Broadcasting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blurb svelte-c4ft01">
          <h2 className="intro svelte-c4ft01" >
            I`m a front end web developer &amp; designer located in Lusaka, Zambia.
          </h2>
          <p className="svelte-c4ft01" >
            Over the past 4+ years, I`ve worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I`m proud to have worn many hats
          </p>
          <p className="svelte-c4ft01" >
            I focus on creating &amp; designing web apps with clean &amp;
            user-friendly experiences, and for that, I am passionate about
            building exciting software`s that improves the lives of those around
            me.
          </p>
        </div>
      </div >
    </>
  );
};

export default Hero;
