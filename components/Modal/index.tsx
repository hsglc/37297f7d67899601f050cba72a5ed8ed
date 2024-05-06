import { createPortal } from "react-dom";
import { ModalContent, ModalWrapper } from "./styled";
import type { Props } from "./types";

export const Modal = ({ onClose, children }:Props) => {
  return createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("__next") as HTMLElement
  );
};
