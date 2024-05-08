import styled from "styled-components";
import { Button } from "../Button/styled";

export const Container = styled.section`
  background-color: #282f33;

  display: flex;
`;

export const FilterElements = styled.div`
  display: flex;
  height: 60px;
  padding: 14px;
  border-right: 1px solid #313a3f;
  width: 84%;
`;

export const ClearFilterButton = styled(Button)`
  border-radius: 4px;
  padding: 7px 8px;
  background-color: #212628;
`;

export const NameAndDateWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 18px;
`;

export const KingAndOneMatchWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
`;

export const MatchEndTitle = styled.div<{ wideRatio: string }>`
  font-size: 12px;
  line-height: 13px;
  font-weight: 700;
  color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  
  & > h5 {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #313A3F;
    width: ${({ wideRatio }) => wideRatio}
`;
