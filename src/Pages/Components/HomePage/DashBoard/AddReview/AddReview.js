import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";
const AddReview = () => {
  const [user] = useAuthState(auth)
    console.log(user)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data,event) =>{ 
    const img=user?.photoURL;
    const email = user?.email
    const order ={
      name:data.name,
      email:email,
      rate:data.ratting,
      info:data.feedback,
      img:img
    }
    const url = 'http://localhost:5000/review';
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
    }).then(res=>res.json()).then(data=>{
      console.log('success',data);
      event.target.reset()
    })
    console.log(data);}
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-primary text-center">
            Product Feedback
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="font-bold text-xl">Your Name</label>
            <input
              class="input input-bordered input-primary w-full max-w-xs bg-slate-300 "
              {...register("name")}
            />
            <label className="font-bold text-xl">Rate Your Feedback</label>
            <input
              class="input input-bordered input-primary w-full max-w-xs bg-slate-300 "
              {...register("ratting",{ min: 1, max: 5 }, { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <h2 class="text-xl font-bold text-primary mb-3">
              Product Feedback
            </h2>{" "}
            <textarea {...register('feedback')}
              className="w-full max-w-xs"
              name="feedback"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div class="card-actions justify-end">
              <input className="btn btn-primary mx-auto" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
