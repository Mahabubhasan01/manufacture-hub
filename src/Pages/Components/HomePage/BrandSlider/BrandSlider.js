import React from "react";
import { Component } from "react";
import Slider from "react-slick";

const BrandSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className='my-20'>
      <h3 className="text-center text-primary text-2xl">Our trusted  Brand here are</h3>
      <Slider {...settings}>
       {/*  <div className="w-52 h-40">
          
            <img src="https://i.ibb.co/8mvWh57/ide-logo-T1.webp" alt="" />
          
        </div> */}
        
        <div className="">
          <img className='' src=" https://i.ibb.co/mt4T5Z5/Advics.webp" alt="" />
        </div>
        <div>
          <img
            src="https://i.ibb.co/TgHHG34/brembo.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/TgHHG34/brembo.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="xhttps://i.ibb.co/CQLHLdN/koito.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/hYDBqbX/piaa.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/HHt95G0/pirelli.webp"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/ftRzL0L/tokico.webp"
            alt=""
          />
        </div>
        <div>
            <img src="https://i.ibb.co/VVNgFX7/toyota.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default BrandSlider;
