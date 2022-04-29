import React, { useContext } from "react";
import { TestContext } from "../context/TestContext";

export const ContextComponent = () => {
  return (
    <TestContext.Consumer>
      {(value) => `returning test as ${value}`}
    </TestContext.Consumer>
  );
};
