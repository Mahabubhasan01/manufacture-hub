import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div class="card w-full lg:card-side bg-base-100 shadow-xl">
        <div class="card-body shadow-lg">
          <h2 class="card-title">Name: Mahabub Hasan</h2>
          <h2 class="card-title">Education:</h2>
          <p>Complete Higher Secondary Certificate from Chowmuhani Government College 2019</p>
          <h2 class="card-title">Skills are:</h2>
          <p>HTML,CSS,JAVASCRIPT,REACT,TAILWIND,BOOTSTRAP,DAISY UI,FIREBASE,[PYTHON,DJANGO,DJANGO REST FRAMEWORK(BEGINNER LEVEL)]</p>
          <h1 className="text-2xl font-bold "> There are three projects link</h1>
          <a className="text-primary font-bold text-xl  underline" target='blank' href="https://eco-hub-eb09e.web.app/">Project one click me</a>
          <a className="text-primary font-bold text-xl underline" target='blank' href="https://prismatic-taffy-4bd65e.netlify.app/">Project two click me</a>
          <a  className="text-primary font-bold text-xl  underline"target='blank' href="https://assignment-10-84c8f.web.app/">Project three click me</a>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
