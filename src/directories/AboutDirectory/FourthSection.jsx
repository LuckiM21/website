import LargeImage from "../../assets/images/AboutImages/large-07.png";
import SmallImage from "../../assets/images/AboutImages/small-03.jpg";

const FourthSection = () => {
  return (
    <>
      <div className="content">
        <div className="grid svelte-885gk8">
          <div className="item svelte-885gk8">
            <p className="svelte-c4ft01">
              Before I stepped into the world of product design and web
              developing, I was Front desk data analyst. One of my earliest jobs involved emails,
              in a time before email linters. Lots of wishing, hoping, and
              finger crossing that your email arrived in a recipient`s inbox in
              one piece.
            </p>
            <p className="svelte-c4ft01">
              Coding emails forced me to understand how HTML and CSS play
              together, a skill set I`ve carried and kept fresh in the years
              since. My side project work is just an excuse to satisfy my
              curiosity about new technologies and understand how the web is
              moving forward.
            </p>
            <p className="svelte-c4ft01">
              Outside coding, web designing,
              I am a geek that likes learning new things that excites me all the time,
              listening to music, exploring the world with my
              partner, and playing with my dog Sportty.
            </p>
          </div>
        </div>
        <div className="pics svelte-c4ft01">
          <div className="large col svelte-c4ft01">
            <figure className="svelte-cmqfoo skeleton">
              <img
                src={LargeImage}
                alt="Weekly Plan"
                width="844"
                height="542"
                loading="lazy"
                className="svelte-cmqfoo fit skip loaded"
              ></img>
            </figure>
            <p>
              Image by{" "}
              <a
                href="https://unsplash.com/@jessbaileydesigns?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit"
                className="link"
              >
                Jess Bailey
              </a>{" "}
              /{" "}
              <a
                href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit"
                className="link"
              >
                Unsplash
              </a>
            </p>
          </div>
          <div className="small col svelte-c4ft01">
            <figure className="svelte-cmqfoo skeleton">
              <img
                src={SmallImage}
                alt="Art"
                width="373"
                height="542"
                loading="lazy"
                className="svelte-cmqfoo fit skip"
              ></img>
            </figure>
            <p>
              Image by{" "}
              <a href="https://unsplash.com/@simonppt" className="link">
                Simon Lee
              </a>{" "}
              /{" "}
              <a
                href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit"
                className="link"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
