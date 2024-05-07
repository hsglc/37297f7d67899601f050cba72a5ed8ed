import Image from "next/image";
import { useRouter } from "next/router";

import { getCurrentDateTime } from "@/utils/getCurrentDateTime";

import { SPORTS } from "@/constants";

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
          <LinkItemContainer isActiveProgram={program === SPORTS.futbol.slug}>
            <LinkItem href={SPORTS.futbol.href}>
              <Image
                src={SPORTS.futbol.icon}
                alt="futbol logo"
                width={20}
                height={20}
              />
              <span>{SPORTS.futbol.title}</span>
            </LinkItem>
          </LinkItemContainer>
          <LinkItemContainer
            isActiveProgram={program === SPORTS.basketbol.slug}>
            <LinkItem href={SPORTS.basketbol.href}>
              <Image
                src={SPORTS.basketbol.icon}
                alt="basketbol logo"
                width={20}
                height={20}
              />
              <span>{SPORTS.basketbol.title}</span>
            </LinkItem>
          </LinkItemContainer>
          <LinkItemContainer isActiveProgram={program === SPORTS.tenis.slug}>
            <LinkItem href={SPORTS.tenis.href}>
              <Image
                src={SPORTS.tenis.icon}
                alt="tenis logo"
                width={20}
                height={20}
              />
              <span>{SPORTS.tenis.title}</span>
            </LinkItem>
          </LinkItemContainer>
        </NavLinkContainer>
        <TimeContainer>
          <TimeElement suppressHydrationWarning>
            {getCurrentDateTime().dateElement}
          </TimeElement>
          <TimeElement suppressHydrationWarning>
            {getCurrentDateTime().timeElement}
          </TimeElement>
        </TimeContainer>
      </Container>
    </NavMenuWrapper>
  );
};
