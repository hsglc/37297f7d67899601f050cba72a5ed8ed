import styled from "styled-components";

export const Container = styled.div`
  -webkit-box-align: center;
  align-items: center;
  background: #353f45;
  color: rgb(255, 255, 255);
  display: flex;
  flex: 1 1 0%;
  font-size: 14px;
  font-weight: 600;
  height: 30px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 30px;
`;

export const Date = styled.span`
  font-weight: 700;
  line-height: 17px;
  font-size: 14px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 30px;
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;
  padding-left: 15px;
`;
