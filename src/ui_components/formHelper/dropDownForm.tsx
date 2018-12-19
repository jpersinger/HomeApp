import React from "react";
import DropDown from "../dropdown";
import { DropDownFormElement } from "./form.definitions";

const DropDownForm = ({
  options,
  select,
  searchable,
  value
}: DropDownFormElement) => {
  return (
    <React.Fragment>
      <DropDown
        placeholder="TODO"
        itemList={options}
        selectedItem={value || ""}
        selectItem={select}
        searchable={searchable}
      />
    </React.Fragment>
  );
};

export default DropDownForm;
