import styled from "styled-components";

export const CustomInput = styled.input`
  line-height: 14px;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  padding: 7px 8px;
  padding-right: 32px;
  font-size: 12px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #212629;
  color: #fff;
  height: 100%;
  ::placeholder {
    color: #4D5153;
    line-height: 14px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const InputWrapper = styled.label`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
