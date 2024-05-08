import styled from "styled-components";
import { Component } from "./types";

export const NoMatches = styled.div<{ component: Component }>`
  background-color: #ffffff;
  padding: 49px 10px;
  max-height: 230px;
  ${({ component }) => component === "matches" && "height: 350px;"}
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  color: #8ba1ad;
  text-align: center;
`;

export const NoMatchesTitle = styled.h4`
  line-height: 19px;
  font-weight: 700;
  font-size: 16px;
`;
export const NoMatchesDescription = styled.p`
  line-height: 14px;
  font-size: 12px;
  max-width: 220px;
`;
