import { useRef, useEffect, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const isRef = useRef(document.createElement("div"));

  if (!isRef.current.classList.contains("modal-wrapper")) {
    isRef.current.classList.add("modal-wrapper");
  }

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");

    if (!modalRoot) {
      return;
    }

    modalRoot.appendChild(isRef.current);

    return () => {
      modalRoot.removeChild(isRef.current);
    }
  }, []);

  return createPortal(children, isRef.current);
};

export default Modal;
