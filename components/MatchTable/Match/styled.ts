import styled from "styled-components";

export const Container = styled.div<{ index: number }>`
  background: ${({ index }) => (index % 2 === 0 ? "white" : "#E8EDEF")};
  display: flex;
  min-height: 34px;
`;

export const Detail = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  border-right: 1px solid #9babb5;
  width: 84%;
  padding-right: 10px;
`;

export const StartTime = styled.li`
  line-height: 14px;
  font-size: 11px;
  color: #212121;
  font-weight: 700;
  padding: 0 3.5px;
  min-width: 38px;
  border-right: 1px solid #dbe3e7;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchDetail = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const MatchName = styled.div`
  letter-spacing: -0.2px;
  color: #262626;
  line-height: 12px;
  font-size: 12px;
  padding: 0 3.5px;
  border-right: none;
  font-weight: 700;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OddContainer = styled.ul`
  display: flex;
  width: 92px;
  justify-content: space-between;
  color: white;
  font-size: 11px;
  letter-spacing: -0.2px;
  line-height: 14.5px;
  font-weight: 700;
`;

export const Odd = styled.button<{ isSelected: boolean }>`
  cursor: pointer;
  padding: 0;
  border: none;
  border-right: 1px solid #dbe3e7;
  text-align: center;
  background-color: ${({ isSelected }) =>
    isSelected ? "#F3E300" : "transparent"};
  flex: 1;
`;

export const DummyOdd = styled.p`
  cursor: pointer;
  padding: 0;
  border: none;
  text-align: center;
  color: white;
  flex: 1;
  font-size: 11px;
  letter-spacing: -0.2px;
  line-height: 14.5px;
  font-weight: 700;
  background-color: #2f373c;
  display: flex;
  align-items: center;
  justify-content: center;
`;
