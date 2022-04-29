import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  //   counter-increment: my-counter;
  //   line-height: 1.5;

  //   &:before {
  //     content: counters(my-counter, ".") ".";
  //     font-weight: 700;
  //     text-transform: uppercase;
  //     padding-right: 3px;
  //   }
`;

const isObject = (value) => typeof value === "object" && value !== null;

const isArray = (value) => Array.isArray(value);

export const RecursiveComponent = ({ data }) => {
  if (!data || data === null) {
    return null;
  }
  if (!isObject(data)) {
    return <ListItem>{data}</ListItem>;
  }

  if (isArray(data)) {
    return (
      <>
        {data.map((val) => (
          <ListItem key={val}>{val}</ListItem>
        ))}
      </>
    );
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, val]) => {
        return (
          <ListItem key={key}>
            {key}:
            <ul>
              <RecursiveComponent data={val} />
            </ul>
          </ListItem>
        );
      })}
    </>
  );
};
