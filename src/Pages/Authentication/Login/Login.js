import React from "react";
import "./Login.css";
import SocialAuth from "./SocialAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
  return (
    <div className="body">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>
			
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Sign up</button>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider text-white">OR</div>
              <div class="grid h-10 card  rounded-box place-items-center">
			  <SocialAuth/>
              </div>
            </div>
          </form>
        </div>
        <div class="login">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Login</button>
			<div class="divider text-primary">OR</div>
              <div class="grid h-10 card  rounded-box place-items-center">
			  <SocialLogin/>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
