import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    type?: 'button' | 'submit',
    title: string,
    styles?: string,
    handleClick?:MouseEventHandler<HTMLButtonElement>
}

export interface ManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}