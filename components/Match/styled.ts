import styled from "styled-components";

export const Container = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
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
  width: 104px;
`;
