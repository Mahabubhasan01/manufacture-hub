import React from "react";
import Icons from "../../../Shared/Icons";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="">
        <div class="bannerFondo shadow-2xl bg-primary h-full bg-left-top bg-auto bg-repeat-x rounded-b-xl">
          <div className="md:flex justify-center items-center">
            <div className="md:p-20 lg:p-20  ">
              <h1 className="text-5xl text-white font-bold px-3">
                <span className="text-success">Car</span>{" "}
                <span className="text-success">Pa</span>rts{" "}
                <span className="text-success">Ex</span>change provide are
              </h1>
              <p className="text-white w-2/3 my-5 text-xl px-3">
                {" "}
                among the world's largest suppliers of car parts, exporting
                motor vehicle parts and accessories worth $34.8 billion in 2018,
                according to the UN's Comtrade database
              </p>
              <ul className="mx-auto px-3">
                <ol className="flex my-5 text-white text-xl items-center">
                  <Icons />
                  Shopping Cart Wheels & Casters
                </ol>
                <ol className="flex my-5 text-white text-xl items-center">
                  <Icons />
                  Material Handling Wheels & Casters
                </ol>
                <ol className="flex my-5 text-white text-xl items-center">
                  <Icons />
                  Cart Handles
                </ol>
                <ol className="flex my-5 text-white text-xl">
                  <Icons />
                  Cart Leg Hole Closures
                </ol>
                <ol className="flex my-5 text-white text-xl items-center">
                  <Icons />
                  Tuggable carts.
                </ol>
              </ul>
            </div>

            <img
              className="p-5"
              src="https://i.ibb.co/4Y35cyr/spare-parts.png"
              alt=""
            />
          </div>
        </div>

        <div class="-mt-48 ">
          <div class="w-full text-center">
            <p class="text-sm tracking-widest text-white font-bold">
              Best Power tools and sold available
            </p>
            <h1 class="font-bold text-5xl text-white">
              <button class="btn btn-wide sm:btn-sm md:btn-md lg:btn-l btn-success rounded-lg gap-2">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </h1>
          </div>

          <div class="grid grid-cols-1 gap-4  sm:grid-cols-3 ">
            <div class="p-2 sm:p-10 text-center  cursor-pointer">
              <div class="py-16 max-w-sm mx-auto  rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                <div class="space-y-10">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 mx-auto -mt-4 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-xl mb-2">Car Parts</div>
                      <p class="text-gray-700 text-base font-bold">
                       Good Quality sold here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer text-white">
              <div class="py-16 max-w-sm mx-auto rounded overflow-hidden bg-indigo-500 shadow-lg hover:bg-primary transition duration-500">
                <div class="space-y-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 mx-auto -mt-4 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>
                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-xl mb-2">Body Parts</div>
                      <p class="text-base font-bold">Powerful body parts here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div class="py-16 max-w-sm mx-auto rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                <div class="space-y-10">
                  {/* <i class="fa fa-swimmer" style={{ fontSize: "48px" }}></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-20 w-20 mx-auto -mt-4 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-xl mb-2">Engine Parts</div>
                      <p class="text-gray-700 text-base font-bold">Powerful Engine items here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
