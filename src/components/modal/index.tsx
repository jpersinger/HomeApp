import React from "react";
import styled from "react-emotion";
import theme from "../theme";
import { Headline1 } from "../typography";

const ModalContainer = styled("div")`
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

const Overlay = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.darkBlue};
  opacity: 0.4;
  position: fixed;
  top: 0;
  margin-left: -16px;
  z-index: 2;
`;

interface Props {
  title: string;
  content: React.ReactChild;
  close: () => void;
  footer?: React.ReactChild;
}

const Modal = (props: Props) => {
  return (
    <div>
      <Overlay onClick={props.close} />
      <ModalContainer>
        <ModalTitle>
          <Headline1>{props.title}</Headline1>
        </ModalTitle>
        <div>{props.content}</div>
        {!!props.footer && <ModalFooter>{props.footer}</ModalFooter>}
      </ModalContainer>
    </div>
  );
};

export default Modal;
