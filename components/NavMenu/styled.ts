import styled from "styled-components";
import Link from "next/link";

export const NavMenuWrapper = styled.nav`
  height: 50px;
  background-color: #192125;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const NavLinkContainer = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const LinkItemContainer = styled.li<{
    isActiveProgram: boolean;
}>`
  height: 100%;
  transition: background-color 0.2s;
  background-color: ${({ isActiveProgram }) => (isActiveProgram ? "#384750" : "transparent")};
  &:hover {
    background-color: #384750;
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  gap: 5px;
  color: white;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  padding: 15px 15px 14px 10px;
  height: 100%;
`;

export const TimeContainer = styled.div`
  margin: auto 0;
`;

export const TimeElement = styled.time`
  color: #fafafa;
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  display: block;
  text-align: center;
`;
