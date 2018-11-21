import React from "react";
import AccordionSection from "../accordion";
import { Input } from "../inputs";
import { ListRow } from "../listRow";
import theme from "../theme";

interface Props {
  itemList: string[];
  selectedItem: string;
  selectItem: (item: string) => void;
  searchable?: boolean;
}

const DropDown = (props: Props) => {
  return (
    <AccordionSection
      aboveTheFold={
        props.searchable ? (
          <Input defaultValue={props.selectedItem} />
        ) : (
          <div>{props.selectedItem}</div>
        )
      }
      selectMode={false}
      selected={false}
    >
      {props.itemList.map(item => (
        <div key={item} style={{ borderBottom: theme.borders.listRowBorder }}>
          <ListRow
            text={item}
            onClick={() => {
              props.selectItem(item);
            }}
          />
        </div>
      ))}
    </AccordionSection>
  );
};

export default DropDown;
