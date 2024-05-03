import React from "react";
import { Props } from "./types";
import { Container, Wrapper } from "./styled";

export const MainContent = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
