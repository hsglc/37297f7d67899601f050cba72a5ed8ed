import styled from "styled-components";
import { Button } from "../Button/styled"

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #008641;
  color: #fff;
  height: 51px;
`;

export const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonDefault = styled(Button)`
  padding: 7px 26px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 12px;
  color: #1d2225;
  line-height: 14px;
`;

export const LoginButton = styled(ButtonDefault)`
  background-color: #f3e300;
`;
export const RegisterButton = styled(ButtonDefault)`
  background-color: #ffffff;
`;
