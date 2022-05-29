import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../../firebase.init";
import useReview from "../../../../Hooks/useReview";
import Ratting from "../../../../Shared/Ratting";
import "./ReviewCard.css";
import SingleReviewCard from "./SingleReviewCard";

const ReviewCard = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [review] = useReview(email);
  console.log(review);
  return (
    <div className="review md:my-32">
      <h1 className="font-bold text-4xl text-center">Review Satisfaction</h1>
      <ul className="cards">
        <li>
          <Link to="/" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                  <span className="card__status">
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-xl mr-3 text-primary" >5</p>
                    <div className="rating rating-xs">
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />

                    </div>
                  </div>
                  </span>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-xl mr-3 text-primary" >5</p>
                    <div className="rating rating-xs">
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />

                    </div>
                  </div>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" href="" className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">Jessica Parker</h3>
                  <span className="card__tagline">
                    Lorem ipsum dolor sit amet consectetur
                  </span>
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-xl mr-3 text-primary" >5</p>
                    <div className="rating rating-xs">
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />

                    </div>
                  </div>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" href="" className="card">
            <img
              src="https://i.imgur.com/2DhmtJ4.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  className="card__thumb"
                  src="https://i.imgur.com/sjLMNDM.png"
                  alt=""
                />
                <div className="card__header-text">
                  <h3 className="card__title">kim Cattrall</h3>
                  <div className="flex items-center justify-center">
                    <p className="font-bold text-xl mr-3 text-primary" >5</p>
                    <div className="rating rating-xs">
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <Ratting />
                      <input
                        type="radio"
                        name="rating-5"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />

                    </div>
                  </div>
                </div>
              </div>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </Link>
        </li>
        <SingleReviewCard />
      </ul>
    </div>
  );
};

export default ReviewCard;
