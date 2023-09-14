'use client'
import { CustomButtonProps } from '@/types';
import React from 'react'

function CustomButton({ type, title, styles, handleClick }:CustomButtonProps) {
  return (
    <button type={type} onClick={handleClick} className={`hero__btn ${styles}`}>
      {title}
    </button>
  );
}

export default CustomButton