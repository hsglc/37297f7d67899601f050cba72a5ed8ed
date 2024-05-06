import Image from "next/image";
import { Container, Date, ExpandIconContainer, Odds } from "./styled";
import type { Props } from "./types";

export const MatchHeader = ({ day, program }: Props) => {
  return (
    <Container>
      <Date>{day}</Date>
      <Odds>
        <div>1</div>
        {program === 1 && <div>0</div>}
        <div>2</div>
      </Odds>
      <ExpandIconContainer>
        <Image
          src="/svg/upperArrow.svg"
          alt="expand"
          width={10}
          height={10}
          priority
        />
      </ExpandIconContainer>
    </Container>
  );
};
