import React, { FC, ReactElement } from "react";
import "./Modal.scss";
import exitIcon from "../../assets/icons/exitIcon.png"

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
  }
  
  export default function Modal(props: ModalProps): ReturnType<FC> {
    return (
      <div
        className={`${"modal"} ${props.open ? "display-block" : "display-none"}`}>
        <div className="modal-main">
            <img onClick={props.onClose} className="exitIcon"src={exitIcon} alt="" />
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    );
  }