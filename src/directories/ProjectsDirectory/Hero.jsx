import star from '../../assets/images/hp/star-2.svg'
const Hero = () => {
  return (
    <>
      <main>
        <h1 className="svelte-veednl tight">
          <span slot="title" className="top-title svelte-18wal5">
            <span className="holder svelte-18wal5">
              Projects.
              <span className="stars svelte-18wal5">
                <figure className="svelte-cmqfoo">
                  <img
                    src={star}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                    className="svelte-cmqfoo skip loaded"
                  />
                </figure>
              </span>
            </span>
          </span>
        </h1>
        <div className="wrapper svelte-fn0uxd">
          <p className="svelte-fn0uxd center"></p>
          <div slot="subtitle">
            A collection of tools, web apps and sites I`ve created, designed to
            be helpful, fun, <span className="amp">&amp;</span> sometimes just a
            little bit weird.
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
