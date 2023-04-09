"use client";

import { Dialog } from "@headlessui/react";
import useLoginModal from "@hooks/useLoginModal";

interface DialogProps {
  bodyContent: JSX.Element;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<DialogProps> = (props) => {
  const loginModal = useLoginModal();
  const { bodyContent, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          {bodyContent}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
