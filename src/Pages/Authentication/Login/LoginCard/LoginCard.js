import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin';
import {  toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hooks/useToken';
import Spinner from '../../../Shared/Spiner/Spinner';
const LoginCard = () => {
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate()
  const [token] = useToken()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  useEffect(()=>{
    if(token){
      navigate(from,{replace:true})
    }
  },[token,navigate,from]);
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    signInWithEmailAndPassword(data.email,data.password)
      console.log(data);
      /* event.target.reset(); */
    };
    if(loading){
      return <Spinner/>
    }
    if(errors){
      toast.error('please  make sure your credential')
    }
    return (
        <div class="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label" for="chk" aria-hidden="true">
            Login
          </label>
          <input {...register('email')}
           type="email" name="email" placeholder="Email" required="" />
          <input {...register('password')}
            type="password"
            name="password"
            placeholder="Password"
            required=""
          />
          {loading?<button class="btn loading  max-w-xs  text-white">loading</button>:<button className=' text-white  max-w-xs '>Login</button>
          }
          <div class="divider text-primary">OR</div>
          <div class="grid h-10 card  rounded-box place-items-center">
            <SocialLogin />
          </div>
        </form>
      </div>
    );
};

export default LoginCard;