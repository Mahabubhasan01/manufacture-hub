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
import useToken from "../../Hooks/useToken";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Shared/Spiner/Spinner";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user);
  // react hook form
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data, event) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
    event.target.reset();
  };

  if (token) {
    navigate("/");
  }
  if (loading) {
    return <Spinner />;
  }
  if (error || errors) {
    toast.error(
      <p className="text-red-500">{error?.message || errors?.message}</p>
    );
  }
  return (
    <div className="body">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="signup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>

            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="Your name"
              required="Your name is required"
            />
            {/* {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}{" "}
              </span>
            )} */}
            <input
              {...register(
                "email"
                /*  {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Enter valid email here",
                },
              } */
              )}
              type="email"
              name="email"
              placeholder="Email"
              required="Email is required"
            />
            <input
              {...register(
                "password"
                /* {
                required: {
                  value: true,
                  message: "Password is must required",
                },
                pattern: {
                  value: /[a-zA-Z0-9]{8}/,
                  message: "Must be 8 letter or number",
                },
              } */
              )}
              type="password"
              name="password"
              placeholder="Password"
              required="password is required"
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
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
