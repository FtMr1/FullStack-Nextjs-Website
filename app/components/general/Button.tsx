import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
  disable?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  disable,
  icon:Icon
  
}) => {
  return  <button disabled={disable} className={`rounded-lg p-3 flex  justify-center items-center gap-2 ${small ? "w-[250px]" : "w-full" } ${outline ? "border text-black" : " bg-slate-400 text-white"}}`} onClick={onClick}>
   {Icon && <Icon/>}
    {text}
    </button>;
};

export default Button;
