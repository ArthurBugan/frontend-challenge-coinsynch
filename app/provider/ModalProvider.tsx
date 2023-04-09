"use client";

import LoginModal from "@components/dialog/Login";
import RegisterModal from "@components/dialog/Register";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
    </>
  );
};

export default ModalsProvider;
