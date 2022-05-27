import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import "./Login.css";
import LoginCard from "./LoginCard/LoginCard";
import SocialAuth from "./SocialAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithLogin, Luser, Lloading, Lerror] =
    useSignInWithEmailAndPassword(auth);

    // react hook form 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data,event)=>
  {console.log(data);
  event.target.reset()}
  return (
    <div className="body">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>

            <input {...register('name')}
             type="text" name="txt" placeholder="User name" required="" />
             {errors.name?.type === 'required' &&(<span className="label-text-alt text-red-500">{errors.name.message} </span>)}
            <input {...register('email',{
              required:{
                value:true,
              message:'Email is required'},
              pattern:{
                value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message:'Enter valid email here'
              }
            })}
             type="email" name="email" placeholder="Email" required="" />
            <input {...register('password',{
              required:{
                value:true,
                message:'Password is must required'
              },
              pattern:{
                value:/[a-zA-Z0-9]{8,}/,
                message:'Must be 8 letter or number'
              }
            })}
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="">Sign up</button>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider text-white">OR</div>
              <div class="grid h-10 card  rounded-box place-items-center">
                <SocialAuth />
              </div>
            </div>
          </form>
        </div>
        <LoginCard/>
      </div>
    </div>
  );
};

export default Login;
