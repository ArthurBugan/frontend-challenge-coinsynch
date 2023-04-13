"use client";

import { twMerge } from "tailwind-merge";
import { useFormContext } from "react-hook-form";
import { BsArrowRightShort } from "react-icons/bs";

import Loader from "@components/Loader";

interface ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  icon?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, className, onClick, disabled, icon, type = "button" } = props;

  // If a button is contained on a FORM we can show the loader
  const formContext = useFormContext();

  return (
    <button
      className={twMerge(
        "primary bg-primary-500 px-7 hover:bg-primary-600",
        className
      )}
      title={title}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span>
        {!formContext?.formState?.isSubmitting && title}
        {formContext?.formState?.isSubmitting && <Loader />}
        {icon && (
          <BsArrowRightShort className="mx-auto -mt-1 ml-2 inline h-6 w-6" />
        )}
      </span>
    </button>
  );
};

export default Button;
