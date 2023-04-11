"use client";

import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useRegisterModal from "@hooks/useRegisterModal";

interface SignUpProps {
  className?: string;
  icon?: string;
  label?: string;
}

const SignInButton: React.FC<SignUpProps> = (props) => {
  const { className, icon, label } = props;
  const registerModal = useRegisterModal();

  return (
    <Button
      title={label || "Sign up"}
      icon={icon}
      className={twMerge(className)}
      onClick={registerModal.onOpen}
    />
  );
};

export default SignInButton;
