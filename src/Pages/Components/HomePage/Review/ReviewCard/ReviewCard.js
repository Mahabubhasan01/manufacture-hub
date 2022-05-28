import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../../firebase.init";
import useReview from "../../../../Hooks/useReview";
import './ReviewCard.css'
import SingleReviewCard from "./SingleReviewCard";

const ReviewCard = () => {
  const [user] = useAuthState(auth)
  const email = user?.email;
  const [review] = useReview(email);
  console.log(review)
  return (
    <div className="review md:my-32">
      <h1 className="font-bold text-4xl text-center">Review Satisfaction</h1>
      <ul class="cards">
        <li>
          <Link to='/'  class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'  class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/' href="" class="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Jessica Parker</h3>
                  <span class="card__tagline">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                  <span class="card__status">1 hour ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/' href="" class="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">kim Cattrall</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <SingleReviewCard/>
      </ul>
    </div>
  );
};

export default ReviewCard;
