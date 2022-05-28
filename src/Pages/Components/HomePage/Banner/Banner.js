import React from "react";
import Icons from "../../../Shared/Icons";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="">
        <div class="bannerFondo shadow-2xl bg-primary h-full bg-left-top bg-auto bg-repeat-x rounded-b-xl">
          <div className="flex justify-center items-center ">
            <div className="p-20">
              <h1 className="text-5xl text-white font-bold"><span className="text-success">Car</span> <span className="text-success">Pa</span>rts <span className="text-success">Ex</span>change  provide are</h1>
              <p className="text-white w-2/3 my-5 text-xl"> among the world's largest suppliers of car parts, exporting motor vehicle parts and accessories worth $34.8 billion in 2018, according to the UN's Comtrade database
              </p>
              <ul>
                <ol className="flex my-5 text-white text-xl items-center"><Icons/>Shopping Cart Wheels & Casters</ol>
                <ol className="flex my-5 text-white text-xl items-center" ><Icons/>Material Handling Wheels & Casters</ol>
                <ol className="flex my-5 text-white text-xl items-center" ><Icons/>Cart Handles</ol>
                <ol className="flex my-5 text-white text-xl" ><Icons/>Cart Leg Hole Closures</ol>
                <ol className="flex my-5 text-white text-xl items-center" ><Icons/>Tuggable carts.</ol>
              </ul>
            </div>
            <img
              className="p-5"
              src="https://i.ibb.co/4Y35cyr/spare-parts.png"
              alt=""
            />
          </div>
        </div>

        <div class="-mt-48">
          <div class="w-full text-center">
            <p class="text-sm tracking-widest text-white font-bold">Best Power tools and sold available</p>
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

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
            <div class="p-2 sm:p-10 text-center cursor-pointer">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                <div class="space-y-10">
                  <i class="fa fa-spa" style={{ fontSize: "48px" }}></i>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-xl mb-2">Spa</div>
                      <p class="text-gray-700 text-base">
                        Todo tipo de masajes y técnicas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer text-white">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                <div class="space-y-10">
                  <i
                    class="fa fa-head-side-mask"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-xl mb-2">Bioseguridad</div>
                      <p class="text-base">Altos estandares de bioseguridad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                <div class="space-y-10">
                  <i class="fa fa-swimmer" style={{ fontSize: "48px" }}></i>

                  <div class="px-6 py-4">
                    <div class="space-y-5">
                      <div class="font-bold text-xl mb-2">Piscina</div>
                      <p class="text-gray-700 text-base">Piscina temperada</p>
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
