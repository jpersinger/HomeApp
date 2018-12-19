import { cloneDeep } from "lodash";
import moment from "moment";
import React, { useLayoutEffect, useRef } from "react";
import styled from "react-emotion";
import Button from "../../ui_components/button";
import theme from "../../ui_components/theme";

export const CircleContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding-bottom: 2em;
  padding-top: 2em;
`;

const CircleListContainer = styled("div")`
  display: grid;
  grid-column-gap: 1em;
  overflow-y: scroll;
`;

const FadeOverlay = styled("div")`
  position: absolute;
  width: 200px;
  height: 3.3em;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const DateCircle = ({
  month,
  day,
  onClick,
  isLast
}: {
  month: number;
  day: number;
  onClick: () => void;
  isLast: boolean;
}) => (
  <Button
    style={{
      width: 50,
      height: 50,
      borderRadius: 100,
      backgroundColor: isLast ? "" : theme.colors.primary,
      gridRow: 1
    }}
    onClick={onClick}
  >
    {month}/{day}
  </Button>
);

export const DateCircleList = ({
  start,
  end,
  selectDate
}: {
  start: moment.Moment;
  end: moment.Moment;
  selectDate: (date: moment.Moment) => void;
}) => {
  const list: moment.Moment[] = [];
  let curr = start;
  while (curr.isSameOrBefore(end)) {
    list.push(cloneDeep(curr));
    curr = curr.add(1, "day");
  }
  const containerRef = useRef<any>({ scrollLeft: 0, scrollWidth: 0 });

  useLayoutEffect(
    () => {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    },
    [containerRef]
  );

  return (
    <CircleListContainer ref={containerRef}>
      {list.map(date => {
        const month = date.month();
        const day = date.date();
        return (
          <DateCircle
            key={`${month} ${day}`}
            month={month}
            day={day}
            onClick={() => {
              selectDate(date);
            }}
            isLast={date.startOf("day").isSame(end.startOf("day"))}
          />
        );
      })}
      {/* <FadeOverlay /> */}
    </CircleListContainer>
  );
};
