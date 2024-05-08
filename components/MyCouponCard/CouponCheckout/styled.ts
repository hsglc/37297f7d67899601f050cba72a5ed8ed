import styled from "styled-components";

import { Button } from "../../Button/styled";

export const Container = styled.div`
  background-color: #282f33;
  border-radius: 0 0 6px 0;
  padding: 10px 9px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  color: white;
`;

export const BetAmount = styled.p`
  line-height: 13.3px;
  font-size: 11px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const FlexTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  line-height: 13.3px;
  & > :first-child {
    font-weight: 500;
  }
  & > :last-child {
    font-weight: 700;
  }
`;

export const ApproveBetButton = styled(Button)`
  background-color: #008641;
  color: white;
  font-weight: 600;
  font-size: 12px;
  line-height: 14.5px;
  padding: 11px 35.5px;
  transition: background-color 0.3s;
  border-radius: 4px;
  &:hover {
    background-color: #00a651;
  }
`;
