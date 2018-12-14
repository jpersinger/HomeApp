import React from "react";
import styled, { css } from "react-emotion";
import { Headline1 } from "../typography";
import ModalHandler from "./modalHandler";

const modalContainer = css`
  font-family: Quicksand;
  position: fixed;
  width: 70%;
  border: 1px solid darkgray;
  left: 50%;
  margin-left: -35%;
  top: 4em;
  background-color: white;
  bottom: 4em;
  z-index: 3;
`;

const ModalTitle = styled("div")`
  height: 4em;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalFooter = styled("div")`
  height: 4em;
  border-top: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 1em;
`;

interface Props {
  title: string;
  content: React.ReactChild;
  close: () => void;
  footer?: React.ReactChild;
}

const Modal = (props: Props) => (
  <ModalHandler open containerStyles={modalContainer} onCloseComplete={close}>
    <React.Fragment>
      <ModalTitle>
        <Headline1>{props.title}</Headline1>
      </ModalTitle>
      <div>{props.content}</div>
      {!!props.footer && <ModalFooter>{props.footer}</ModalFooter>}
    </React.Fragment>
  </ModalHandler>
);

export default Modal;
