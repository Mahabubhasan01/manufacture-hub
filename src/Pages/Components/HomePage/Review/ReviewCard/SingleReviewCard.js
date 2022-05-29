import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from '../../../../Shared/Ratting'

const SingleReviewCard = () => {
    return (
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
              <p class="card__description">
                Everything is good and sold item
              </p>
            </div>
          </Link>
        </li>
    );
};

export default SingleReviewCard;