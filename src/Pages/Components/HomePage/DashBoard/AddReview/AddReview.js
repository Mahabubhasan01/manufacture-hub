import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-primary text-center">Product Feedback</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="font-bold text-xl" >Your Name</label>
            <input class="input input-bordered input-primary w-full max-w-xs bg-slate-300 " {...register("name")} />
            <label className="font-bold text-xl" >Rate Your Feedback</label>
            <input   class="input input-bordered input-primary w-full max-w-xs bg-slate-300 " {...register("ratting", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            <h2 class="text-xl font-bold text-primary">Product Feedback</h2>            <textarea className="w-full max-w-xs" name="feedback" id="" cols="30" rows="10"></textarea>
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
