import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="svelte-veednl tight"><span slot="title">Whoops</span></h1>
      <div className="wrapper svelte-fn0uxd">
        <p className="svelte-fn0uxd center"></p>
        <div slot="subtitle">
          <p className="svelte-1s0lt5v">
            You`ve taken a wrong turn somewhere. Let`s get you back on track.
          </p>
          <Link to="/" className="button svelte-1s0lt5v">
            Home
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Error
