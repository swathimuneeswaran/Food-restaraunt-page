import React, { useEffect, useState } from 'react';
import 'animate.css';
import './MainPage.css';
import food from "../images/food.png"

const slogans = [
  {
    id: 1,
    text: "Flavors That Dance on Your Palate",
  },
  {
    id: 2,
    text: "Discover the exquisite flavors of Poriyaalans"
  },
  {
    id: 3,
    text: "Delicious and delectable flavors that will make you fall in love"
  }
];

const MainPage = () => {
  const [currentSlogan, setCurrentSlogan] = useState(slogans[0].text);
  const [animationClass, setAnimationClass] = useState('animate__jackInTheBox');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate__fadeOut');
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * slogans.length);
        setCurrentSlogan(slogans[randomIndex].text);
        setAnimationClass('animate__jackInTheBox');
      }, 1000); // Duration of fadeOut animation
    }, 6000); // Total cycle time including animations

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="main_contain" id="home">
        <h1 className="animate__animated animate__zoomInDown" id="head">Poriyaalans</h1>
        <h2 className={`animate__animated ${animationClass} slogan`}>{currentSlogan}</h2>
        <img src={food} alt="food"  className="food_img" />
      </div>
    </>
  );
}

export default MainPage;
