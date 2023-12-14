import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="login-content">
        <img
          src="https://images.assetsdelivery.com/compings_v2/mdranahamid/mdranahamid2010/mdranahamid201000054.jpg"
          alt="logo"
        />
        <h1 className="login-heading">Choose Email From Your Browser To Login</h1>
        <div className="choose__div">
          <img  className="image" src="https://static.vecteezy.com/system/resources/previews/022/648/084/non_2x/email-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" alt="Email"/>
          <button onClick={handleSubmit} className="btn-login">
            Click Here to Choose
          </button>
        </div>
      </div>
      <div class="login-containers">
        <h2>Login</h2>
        <form class="login-form">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div class="form-group">
        <label for="password">Password:</label>
          <input type="password" id="password" name="password" required/>
          </div>
        <div class="form-group">
        <button type="submit">Login</button>
      </div>
      </form>
      </div>
      </div>
  );
}

export default Login;