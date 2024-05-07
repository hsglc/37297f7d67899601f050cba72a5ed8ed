import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-align: center;
  align-items: center;
  background: #353f45;
  color: rgb(255, 255, 255);
  display: flex;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
`;

export const Date = styled.div`
  font-weight: 700;
  line-height: 17px;
  font-size: 14px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  line-height: 30px;
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;
  padding-left: 15px;
  border-right: 1px solid #414e55;
  width: 84%;
`;

export const Odds = styled.div`
  display: flex;
  width: 92px;
  justify-content: space-between;
  color: white;
  height: 100%;
  & > div {
    border-right: 1px solid #414e55;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
  }
`;

export const ExpandIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 18px;
`;
