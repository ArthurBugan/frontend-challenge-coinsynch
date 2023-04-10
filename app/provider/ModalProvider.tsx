"use client";

import LoginModal from "@components/dialogs/Login";
import RegisterModal from "@components/dialogs/Register";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalsProvider;
