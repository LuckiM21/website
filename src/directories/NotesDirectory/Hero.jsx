const Hero = () => {
  return (
    <>
      <main>
        <h1 className="svelte-veednl tight">
          <span slot="title" className="top-title svelte-88yij0">
            <span className="holder svelte-88yij0">Notes.</span>
          </span>
        </h1>
        <div className="wrapper svelte-fn0uxd">
          {/* <p className="svelte-fn0uxd center"></p> */}
          <div slot="subtitle">
            Some thoughts, reflections
            <span className="amp"> &amp; </span>
            notes on design and development, along with some latest work in
            progress.
          </div>

        </div>
      </main>
    </>
  );
};

export default Hero;
