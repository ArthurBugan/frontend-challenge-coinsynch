"use client";

import Button from "./Button";
import useLoginModal from "@hooks/useLoginModal";

const SignUpButton = () => {
  const loginModal = useLoginModal();

  return (
    <Button title="Sign in" className="ghost" onClick={loginModal.onOpen} />
  );
};

export default SignUpButton;