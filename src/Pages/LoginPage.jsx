import '../styles/BackgroundPages/Login.css'
const LoginPage = () => {
  return (
    <>
      {/* <!--ring div starts here-->>> */}
      <div style={{
        // background: 'black',
        paddingTop: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>

        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div className="login">
            <h2>Login</h2>
            <div className="inputBx">
              <input type="text" placeholder="Username" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
            <div>
              <div className="links" >
                <a href="#"
                  className='fb'
                >Forget Password?</a>
                {/* <a href="#">Signup</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--ring div ends here--> */}
    </>
  )
}

export default LoginPage
