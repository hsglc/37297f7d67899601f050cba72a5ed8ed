import Image from "next/image";
import { useRouter } from "next/router";

import { getCurrentDateTime } from "@/utils/getCurrentDateTime";

import {
  Container,
  NavMenuWrapper,
  LinkItem,
  NavLinkContainer,
  TimeElement,
  TimeContainer,
  LinkItemContainer,
} from "./styled";

export const NavMenu = () => {
  const router = useRouter();
  const program = router.query.id;
  return (
    <NavMenuWrapper>
      <Container>
        <NavLinkContainer>
          <LinkItemContainer isActiveProgram={program === "futbol"}>
            <LinkItem href="/program/futbol">
              <Image
                src="/svg/futbol.svg"
                alt="futbol logo"
                width={20}
                height={20}
              />
              <span>FUTBOL</span>
            </LinkItem>
          </LinkItemContainer>
          <LinkItemContainer isActiveProgram={program === "basketbol"}>
            <LinkItem href="/program/basketbol">
              <Image
                src="/svg/basketbol.svg"
                alt="basketbal Logo"
                width={20}
                height={20}
              />
              <span>BASKETBOL</span>
            </LinkItem>
          </LinkItemContainer>
          <LinkItemContainer isActiveProgram={program === "tenis"}>
            <LinkItem href="/program/tenis">
              <Image
                src="/svg/tenis.svg"
                alt="tenis Logo"
                width={20}
                height={20}
              />
              <span>TENİS</span>
            </LinkItem>
          </LinkItemContainer>
        </NavLinkContainer>
        <TimeContainer>
          <TimeElement>{getCurrentDateTime().dateElement}</TimeElement>
          <TimeElement>{getCurrentDateTime().timeElement}</TimeElement>
        </TimeContainer>
      </Container>
    </NavMenuWrapper>
  );
};
