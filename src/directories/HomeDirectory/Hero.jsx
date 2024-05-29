import FirstStar from "../../assets/images/hp/star-1.svg";
import SecondStar from "../../assets/images/hp/star-2.svg";

const Hero = () => {
  return (
    <>
      <h1 className="svelte-veednl tight">
        <span slot="title" className="svelte-pbuplb">
          <span className="holder svelte-pbuplb">
            <span className="holder-content svelte-pbuplb">
              Hi. I`m Luckie.
              <span className="stars right svelte-pbuplb">
                <figure className="svelte-cmqfoo">
                  <img
                    src={SecondStar}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                    className="svelte-cmqfoo skip"
                  />
                </figure>
              </span>
            </span>
          </span>
          <span className="holder svelte-pbuplb">
            <span className="holder-content svelte-pbuplb">
              Developer.
              <span className="stars left svelte-pbuplb">
                <figure className="svelte-cmqfoo">
                  <img
                    src={FirstStar}
                    alt=""
                    width=""
                    height=""
                    loading="lazy"
                    className="svelte-cmqfoo skip"
                  />
                </figure>
              </span>
            </span>
          </span>
        </span>
      </h1>
      <div className="wrapper svelte-fn0uxd">
        {/* <p className="svelte-fn0uxd center"></p> */}
        <div slot="subtitle">
          I`m passionate about crafting experiences that are engaging,
          accessible, and user-centric.
          Here we can delv deep into what I`ve worked on in the past, current and what my endeavors are!
        </div>
      </div>
    </>
  );
};

export default Hero;
