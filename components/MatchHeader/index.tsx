import React from "react";
import { Container, Date } from "./styled";
import { Props } from "./types";

export const MatchHeader = ({ day }: Props) => {
  return <Container>
    <Date>{day}</Date>
  </Container>;
};
