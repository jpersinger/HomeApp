import React, { useState } from "react";
import styled, { css } from "react-emotion";
import { animated, useSpring } from "react-spring/hooks";
import { timeout } from "../../services";
import Button from "../button";
import FixedPortal from "../fixedPortal";
import theme from "../theme";
import { Headline1 } from "../typography";
import { MODAL_ANIMATIONS, MODAL_ANIMATION_DURATION } from "./components";

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
  const [props, setProps] = useSpring(() => MODAL_ANIMATIONS.fadeIn);
  const [overlayOpen, setOverlayOpen] = useState(true);

  const closeUpShop = async () => {
    setProps(MODAL_ANIMATIONS.fadeOut);
    setOverlayOpen(false);
    await timeout(MODAL_ANIMATION_DURATION);
    close();
  };

  return (
    <FixedPortal>
      {/* <Overlay open={overlayOpen} duration={MODAL_ANIMATION_DURATION} /> */}
      <animated.div style={props} className={modalContainer}>
        <ModalTitle>
          <Headline1>{title}</Headline1>
        </ModalTitle>
        <div style={{ padding: "1em" }}>{content}</div>
        <div style={{ display: "flex", margin: "1em" }}>
          {!!cancelText && (
            <Button
              onClick={closeUpShop}
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
      </animated.div>
    </FixedPortal>
  );
};

export default ConfirmationModal;
