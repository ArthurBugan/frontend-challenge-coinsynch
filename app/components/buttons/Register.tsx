"use client";

import Button from "./Button";
import useRegisterModal from "@hooks/useRegisterModal";

const SignInButton = () => {
  const registerModal = useRegisterModal();

  return (
    <Button
      title="Sign up"
      className="primary"
      onClick={registerModal.onOpen}
    />
  );
};

export default SignInButton;
