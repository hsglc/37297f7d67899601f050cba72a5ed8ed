import styled from "styled-components";
import { Button } from "@/components/Button/styled";

export const Container = styled.div`
  padding: 8px 9px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #282f33;
  font-size: 12px;
  line-height: 10px;
  font-weight: 500;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TrashButton = styled(Button)`
  border-radius: 2px;
  background-color: #d9d9d9;
`;

export const EventTime = styled.span`
  display: block;
  font-size: 10px;
  line-height: 10px;
  margin-left: 21px;
`;

export const EventName = styled.p`
    max-width: 170px;
    line-height: 13px;
`;

export const EventBet = styled.div`
  font-size: 10px;
  line-height: 10px;
  display: flex;
  justify-content: space-between;
`;

export const MbBadge = styled.div<{ mb: number }>`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2.5px;
  color: white;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  height: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  width: 16px;
  background-color: ${({ mb }) =>
    mb === 1 ? "#FF4242" : mb === 2 ? "#A9D023" : "#1C6A9F"};
`;

export const MatchBet = styled.span`
  color: #008642;
  font-weight: 600;
`;

export const Odd = styled.span`
    letter-spacing: -0.24px;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
`;
