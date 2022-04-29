import React, { useRef } from "react";
import styled from "styled-components";

const Input = styled.input``;

const Container = styled.div`
  display: flex;
  column-gap: 2vh;
`;

const Button = styled.button``;

export const RefComponent = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log("current value is ", inputRef.current?.value);
  };

  const onClickFocus = () => {
    console.log("focussing on input");
    inputRef?.current?.focus();
  };

  return (
    <Container>
      <Input ref={inputRef} />
      <Button onClick={onClick}>See current value</Button>
      <Button onClick={onClickFocus}>Focus on input</Button>
    </Container>
  );
};
