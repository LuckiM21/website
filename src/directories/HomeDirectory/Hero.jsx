import FirstStar from "../../assets/images/hp/Star1";
import SecondStar from "../../assets/images/hp/Star2";

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
                  <SecondStar />
                </figure>
              </span>
            </span>
          </span>
          <span className="holder svelte-pbuplb">
            <span className="holder-content svelte-pbuplb">
              Developer.
              <span className="stars left svelte-pbuplb">
                <figure className="svelte-cmqfoo">
                  <FirstStar />
                </figure>
              </span>
            </span>
          </span>
        </span>
      </h1>
      <div className="wrapper svelte-fn0uxd">
        <div className="svelte-fn0uxd">
          I`m passionate about crafting experiences that are engaging,
          accessible, and user-centric.
          Here we can dealv deep into what I`ve worked on in the past, current and what my endeavors are!
        </div>
      </div>
    </>
  );
};

export default Hero;
