import React from "react";
import "./Bussiness.css";
import CustomCard from "../../../Shared/CustomCard";

const Business = () => {
  return (
    <div className="">
      <h1 className="font-bold text-4xl text-center md:-mb-10 ">
        Our Business Summary{" "}
      </h1>
      {/*  <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 banner banner1-img'>
            <CustomCard info={'Countries'} number={222}/>
            <CustomCard info={'Our Revenue'} number={'23 Billion'} />
            <CustomCard info={'Export Products'} number={64363456}/>
            <CustomCard info={'Quality'} number={'99.99%'}/>
        </div> */}

      <div className="container mx-auto px-20">
        <div className="bg-#f3f4f6;">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20">
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5 text-center">
                <svg
                  className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500  "
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                   <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>

              </div>
              <div className="flex justify-around items-center mt-20">
                <h3 className="text-2xl font-bold mb-2">Countries</h3>

                <p className="text-sm leading-6 text-gray-600">
                  <span className="font-bold text-4xl">222</span>
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5 text-center">
                <svg
                  className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex justify-around items-center mt-20">
                <h3 className="text-2xl font-bold mb-2">Our Revenue</h3>

                <p className="text-sm leading-6 text-gray-600">
                  <span className="font-bold text-4xl">32.3M</span>
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5 text-center">
                <svg
                  className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>

              <div className="flex justify-around items-center mt-20">
                <h3 className=" font-bold mb-2 text-2xl">Exports</h3>

                <p className="text-sm leading-6 text-gray-600">
                  <span className="font-bold text-4xl">432.2M</span>
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5 text-center">
                <svg
                  className="hi-outline hi-sparkles inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                   <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <div className="flex justify-around items-center mt-20">
                <h3 className="text-2xl font-bold mb-2">Quality</h3>

                <p className="text-sm leading-6 text-gray-600">
                  <span className="font-bold text-4xl">99.9%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
