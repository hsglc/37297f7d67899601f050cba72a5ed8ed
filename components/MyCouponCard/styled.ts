import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 240px;
  height: 100%;
  max-height: calc(-55px + 100vh);
  border-radius: 0 4px 4px 0;
  background-color: #ffffff;
  margin-left: 4px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 6px;
    margin: auto;
    margin-bottom: 10px;
  }
`;

export const CardContainer = styled.div`
  height: auto;
  position: sticky;
`;

export const CardHeader = styled.div`
  position: sticky;
  border-radius: 0 4px 0 0;
  background-color: #3a4449;
  padding: 10px 12px;
  height: 63px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const TotalOddsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 6px;
`;

export const MyCouponTitle = styled.h4`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
`;
export const TotalOdds = styled.span`
  line-height: 17px;
  font-weight: 500;
`;

export const TotalMatchesWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "#898e92;")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchCount = styled.div`
  background-color: #f7e102;
  border-radius: 3px;
  padding: 6px 11px;
  color: black;
  font-weight: 700;
  font-size: 12px;
  line-height: 14.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const TotalMatchesIconContainer = styled.div<{ isHovered: boolean }>`
  transform: ${({ isHovered }) =>
    isHovered ? "rotate(-180deg)" : "rotate(0deg)"};
`;

export const TotalMatches = styled.span`
  border-radius: 50%;
  border: 1px solid #3a4449;
  padding: 2px;
  width: 14px;
  height: 14px;
  background-color: #f3e300;
  position: absolute;
  right: -5px;
  top: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

export const CardBody = styled.div`
  min-height: 135px;
  overflow: hidden auto;
  position: relative;
  border-right: 1px solid #282f33;
`;

export const SelectedEvents = styled.div`
  max-height: 230px;
  overflow: auto;
`;

export const NoMatches = styled.div`
  background-color: #ffffff;
  padding: 49px 10px;
  max-height: 230px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  color: #8ba1ad;
  text-align: center;
`;

export const NoMatchesTitle = styled.h4`
  line-height: 19px;
  font-weight: 700;
  font-size: 16px;
`;
export const NoMatchesDescription = styled.p`
  line-height: 14px;
  font-size: 12px;
  max-width: 220px;
`;

export const ModalContent = styled.div`
  text-align: center;
  font-family: "Inter", sans-serif;
  padding: 60px 80px;
  & > h2 {
    color: #008641;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 23px;
    max-width: 254px;
  }
  & > button {
    border-radius: 4px;
    color: white;
    background-color: #008641;
    border: none;
    padding: 15px 48px;
    line-height: 19.3px;
    font-weight: 500;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #00a651;
    }
  }
`;
