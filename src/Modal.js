import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const isRef = useRef(null);

  if (!isRef.current) {
    const div = document.createElement("div");
    div.classList.add("modal-wrapper");
    isRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    modalRoot.appendChild(isRef.current);

    return () => modalRoot.removeChild(isRef.current);
  }, []);

  return createPortal(children, isRef.current);
};

export default Modal;
