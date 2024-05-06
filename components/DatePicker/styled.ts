import styled from "styled-components";

export const SelectContainer = styled.div<{ fullWidth: boolean }>`
  -webkit-box-align: center;
  align-items: center;
  background: rgb(33, 38, 41);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 32px;
  line-height: 32px;
  min-width: 80px;
  padding-left: 8px;
  padding-right: 15px;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "82px")};
`;

export const SelectedOption = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const Placeholder = styled.div<{ isChecked: boolean }>`
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  user-select: none;
  width: 100%;
  color: ${({ isChecked }) => (isChecked ? "rgb(247, 225, 2);" : "#fff;")};
`;

export const OptionsList = styled.ul`
  background: rgb(46, 52, 56);
  flex-direction: column;
  left: 0px;
  min-width: 200px;
  overflow: hidden;
  padding: 8px;
  position: absolute;
  top: 32px;
  display: flex;
  z-index: 106;
`;

export const OptionLabel = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 25px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  max-height: 25px;
  padding: 5px 0px 5px 22px;
  position: relative;
`;

export const OptionInput = styled.input`
  cursor: pointer;
  height: 0px;
  opacity: 0;
  position: absolute;
  width: 0px;
`;

export const Checkmark = styled.span<{ isChecked: boolean }>`
  border: ${({ isChecked }) =>
    isChecked ? "2px solid rgb(247, 225, 2);" : "2px solid #fff"};
  height: 16px;
  left: 0px;
  position: absolute;
  top: 5px;
  width: 16px;
  background: ${({ isChecked }) =>
    isChecked ? "rgb(0, 109, 53);" : "transparent"};
`;

export const Date = styled.span<{ isChecked: boolean }>`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  font-style: normal;
  padding-top: 3px;
  position: relative;
  text-align: left;
  white-space: nowrap;
  z-index: 99;
  color: ${({ isChecked }) => (isChecked ? "rgb(247, 225, 2);" : "#fff;")};
`;

export const IconWrapper = styled.div<{ isOpen: boolean; isChecked: boolean }>`
  position: absolute;
  right: 9px;
  top: 12px;
  transition: transform 0.1s ease;
  ${({ isOpen }) => isOpen && "transform: rotate(180deg)"};
`;
