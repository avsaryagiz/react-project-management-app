import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
  buttonCaption: string;
}

const Modal = forwardRef(function Modal({ children, buttonCaption }: ModalProps, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      showModal() {
        dialog.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
