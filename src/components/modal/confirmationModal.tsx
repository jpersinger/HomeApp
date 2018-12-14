import React, { useState } from "react";
import styled, { css } from "react-emotion";
import Button from "../button";
import theme from "../theme";
import { Headline1 } from "../typography";
import ModalHandler from "./modalHandler";

const modalContainer = css`
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
}: Props) => {
  const [open, setOpen] = useState(true);
  const [confirmSelected, setConfirmSelected] = useState(false);

  return (
    <ModalHandler
      open={open}
      onCloseComplete={confirmSelected && confirm ? confirm : close}
      containerStyles={modalContainer}
    >
      <React.Fragment>
        <ModalTitle>
          <Headline1>{title}</Headline1>
        </ModalTitle>
        <div style={{ padding: "1em" }}>{content}</div>
        <div style={{ display: "flex", margin: "1em" }}>
          {!!cancelText && (
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color={theme.colors.darkBlue}
              style={{ marginRight: !!confirmationText ? "1em" : 0 }}
            >
              {cancelText}
            </Button>
          )}
          {confirmationText && confirm && (
            <Button
              onClick={() => {
                setOpen(false);
                setConfirmSelected(true);
              }}
              color={theme.colors.negative}
            >
              {confirmationText}
            </Button>
          )}
        </div>
      </React.Fragment>
    </ModalHandler>
  );
};

export default ConfirmationModal;
