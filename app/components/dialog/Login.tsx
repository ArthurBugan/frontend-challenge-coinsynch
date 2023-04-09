"use client";

import Dialog from "./Dialog";
import useLoginModal from "@hooks/useLoginModal";

const Modal: React.FC = () => {
  const login = useLoginModal();

  const bodyContent = (
    <div>
      <p>Login Modal</p>
    </div>
  );

  return (
    <Dialog
      open={login.isOpen}
      onClose={login.onClose}
      bodyContent={bodyContent}
    />
  );
};

export default Modal;
