import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring/hooks";
import Button from "../button";
import { Input } from "../inputs";
import theme from "../theme";
import {
  DropdownContainer,
  DropdownInputContainer,
  dropdownItem,
  dropdownItemContainer,
  DROPDOWN_ANIMATIONS
} from "./components";
import { getSearchedItems } from "./services";

interface Props {
  itemList: string[];
  selectedItem: string;
  selectItem: (item: string) => void;
  searchable?: boolean;
  placeholder: string;
}

const DropDown = ({
  itemList,
  selectedItem,
  selectItem,
  searchable,
  placeholder
}: Props) => {
  const [animProps, setAnimProps] = useSpring(
    () => DROPDOWN_ANIMATIONS.initial
  );
  const [listVisible, setListVisible] = useState(false);

  const [search, setSearch] = useState(selectedItem);
  const [items, setItems] = useState(itemList);

  const openDropdown = () => {
    setListVisible(true);
    setAnimProps(DROPDOWN_ANIMATIONS.slideIn);
  };

  const closeDropdown = () => {
    setListVisible(false);
    setAnimProps(DROPDOWN_ANIMATIONS.slideOut);
    setSearch(selectedItem);
  };

  useEffect(
    () => {
      setSearch(selectedItem);
      setItems(itemList);
    },
    [selectedItem]
  );

  const clickingstuff = (event: any) => {
    const el = document.getElementById("dropdown_container");

    if (
      event.target !== el &&
      el &&
      !el.contains(event.target) &&
      listVisible
    ) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("click", event => {
      clickingstuff(event);
    });
    return document.removeEventListener("click", event => {
      clickingstuff(event);
    });
  });

  return (
    <DropdownContainer listVisible={listVisible} id="dropdown_container">
      <DropdownInputContainer onClick={openDropdown}>
        <Input
          placeholder={placeholder}
          disabled={!searchable}
          style={{ cursor: "pointer", paddingLeft: "0.5em" }}
          value={search}
          onChange={event => {
            setSearch(event.target.value);
            setItems(getSearchedItems(event.target.value, itemList));
          }}
        />
      </DropdownInputContainer>
      <animated.div
        onClick={closeDropdown}
        style={animProps}
        className={dropdownItemContainer}
      >
        {items.map((item, index) => (
          <Button
            key={item}
            onClick={() => {
              selectItem(item);
            }}
            textOnly
            textColor={theme.colors.darkGray}
            style={{
              color: item === selectedItem ? theme.colors.affirmative : "",
              borderBottom:
                index === itemList.length - 1 ? "" : theme.borders.listRowBorder
            }}
            className={dropdownItem}
          >
            {item}
          </Button>
        ))}
      </animated.div>
    </DropdownContainer>
  );
};

export default DropDown;
