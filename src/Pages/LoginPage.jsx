import '../styles/BackgroundPages/Login.css'
const LoginPage = () => {
  return (
    <div>
      {/* <!--ring div starts here-->>> */}
      <div className="ring">
        <i className="--clr:#00ff0a;"></i>
        <i className="--clr:#ff0057;"></i>
        <i className="--clr:#fffd44;"></i>
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
          <div className="links">
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </div>
      </div>
      {/* <!--ring div ends here--> */}
    </div>
  )
}

export default LoginPage
