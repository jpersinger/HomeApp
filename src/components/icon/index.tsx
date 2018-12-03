import React, { CSSProperties } from "react";
import Add from "../../assets/add";
import Close from "../../assets/close";
import Delete from "../../assets/delete";
import Edit from "../../assets/edit";
import EmptyCheckbox from "../../assets/emptyCheckbox";
import FilledCheckbox from "../../assets/filledCheckbox";
import ListMenu from "../../assets/listMenu";
import IconName from "./iconNames";

export interface IconProps {
  size: number;
  fill: string;
}

export interface IconHelperProps extends Partial<IconProps> {
  name: IconName;
  styleOverrides?: CSSProperties;
}

const Icon: React.SFC<IconHelperProps> = ({
  name,
  size = 24,
  fill = "#FFFFFF",
  styleOverrides = {}
}) => (
  <div style={styleOverrides}>
    {(() => {
      switch (name) {
        case "close":
          return <Close size={size} fill={fill} />;
        case "list-menu":
          return <ListMenu size={size} fill={fill} />;
        case "add":
          return <Add size={size} fill={fill} />;
        case "empty-checkbox":
          return <EmptyCheckbox size={size} fill={fill} />;
        case "filled-checkbox":
          return <FilledCheckbox size={size} fill={fill} />;
        case "edit":
          return <Edit size={size} fill={fill} />;
        case "delete":
          return <Delete size={size} fill={fill} />;
      }
    })()}
  </div>
);

export default Icon;
