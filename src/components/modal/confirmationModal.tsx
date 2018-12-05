import React from "react";
import styled from "react-emotion";
import Button from "../button";
import FixedPortal from "../fixedPortal";
import theme from "../theme";
import { Headline1 } from "../typography";
import { Overlay } from "./components";

const ModalContainer = styled("div")`
  font-family: Quicksand;
  position: fixed;
  width: 50%;
  border: 1px solid darkgray;
  left: 25%;
  background-color: white;
  z-index: 3;
  text-align: center;
  border-radius: 10px;
  top: 25%;
`;

const ModalTitle = styled("div")`
  height: 4em;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  title: string;
  content: string;
  confirmationText?: string;
  cancelText?: string;
  confirm?: () => void;
  close: () => void;
}

const ConfirmationModal = ({
  title,
  content,
  confirmationText,
  cancelText,
  confirm,
  close
}: Props) => (
  <FixedPortal>
    <Overlay onClick={close} />
    <ModalContainer>
      <ModalTitle>
        <Headline1>{title}</Headline1>
      </ModalTitle>
      <div style={{ padding: "1em" }}>{content}</div>
      <div style={{ display: "flex", margin: "1em" }}>
        {!!cancelText && (
          <Button
            onClick={close}
            color={theme.colors.darkBlue}
            style={{ marginRight: !!confirmationText ? "1em" : 0 }}
          >
            {cancelText}
          </Button>
        )}
        {!!confirmationText && (
          <Button onClick={confirm} color={theme.colors.negative}>
            {confirmationText}
          </Button>
        )}
      </div>
    </ModalContainer>
  </FixedPortal>
);

export default ConfirmationModal;
