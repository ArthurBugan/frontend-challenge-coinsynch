"use client";

import Dialog from "./Dialog";
import useRegisterModal from "@hooks/useRegisterModal";

const Modal: React.FC = () => {
  const register = useRegisterModal();

  const bodyContent = (
    <div>
      <p>Register Modal</p>
    </div>
  );

  return (
    <Dialog
      open={register.isOpen}
      onClose={register.onClose}
      bodyContent={bodyContent}
    />
  );
};

export default Modal;
