import styled from "react-emotion";

export const Dot = styled("div")<{ size: number; color: string }>(
  ({ size, color }) => `
  width: ${size}px;
  height: ${size}px;
  border-radius: 50px;
  background-color: ${color};
  margin: 0.5em;
  transition: background-color 700ms ease
`
);
