import React from "react";
import { Portal } from "react-portal";

const FixedPortal = ({ children }: { children: JSX.Element[] }) => (
  <Portal>
    <div style={{ position: "fixed", top: 0 }}>{children}</div>
  </Portal>
);

export default FixedPortal;
