import styled from "styled-components";

export const MbBadge = styled.li<{ mb: number }>`
  width: 34px;
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #dbe3e7;
  height: 34px;
  ::before {
    -webkit-box-align: center;
    align-items: center;
    border-radius: 2.5px;
    color: white;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    content: "${({ mb }) => mb}";
    display: flex;
    height: 16px;
    -webkit-box-pack: center;
    justify-content: center;
    width: 16px;
    background-color: ${({ mb }) =>
      mb === 1 ? "#FF4242" : mb === 2 ? "#A9D023" : "#1C6A9F"};
  }
`;
