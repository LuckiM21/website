import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="svelte-veednl tight"><span slot="title">Hello</span></h1>
      <div className="wrapper svelte-fn0uxd">
        <p className="svelte-fn0uxd center">
          Click the button bellow to be Directed to the home page.
        </p>
        <div className="wrapper svelte-fn0uxd">
          <div className="svelte-fn0uxd">
            <div style={{
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
            }}>
              <Link to="/" className="button svelte-1s0lt5v">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Error
