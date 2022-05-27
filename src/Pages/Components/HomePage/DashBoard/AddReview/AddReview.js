import React from "react";

const AddReview = () => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <form>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Name</span>
                <span class="label-text-alt">Alt label</span>
              </label>
              <input 
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">Alt label</span>
                <span class="label-text-alt">Alt label</span>
              </label>
            </div>
          </form>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
