'use client'
import React from 'react'
import Image from 'next/image';
import CustomButton from './CustomButton';

function Hero() {
  const handleScroll = () => {
    alert('ss');
  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find, book or rent a car quickly and easily.
        </h1>
        <CustomButton
          type="button"
          title="Explore the car"
          styles="bg-primary-blue text-white fill rounded"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
}

export default Hero