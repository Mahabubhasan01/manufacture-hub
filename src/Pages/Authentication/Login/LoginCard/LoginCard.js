import React from 'react';
import SocialLogin from '../SocialLogin';

const LoginCard = () => {
    return (
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
            <SocialLogin />
          </div>
        </form>
      </div>
    );
};

export default LoginCard;