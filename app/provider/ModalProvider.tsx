"use client";

import LoginModal from "@components/dialogs/Login";
import RegisterModal from "@components/dialogs/Register";
import AddCrypto from "@components/dialogs/AddCrypto";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <AddCrypto />
    </>
  );
};

export default ModalsProvider;
