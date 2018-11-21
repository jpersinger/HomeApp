import styled, { css } from "react-emotion";

export const ListStyle = styled("ul")`
  list-style-type: none;
  padding: 0;
`;

export const NavContainer = styled("nav")`
  position: fixed;
  background-color: black;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
`;

export const linkStyles = css`
  color: white;
  text-decoration: inherit;
  font-family: Quicksand;
  font-size: 1.3em;
  height: 2.5em;
  width: 100%;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
  padding-left: 1em;
  :hover {
    background-color: darkgray;
    padding-left: 1.2em;
    font-weight: 600;
  }
`;
