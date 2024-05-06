import Image from "next/image";
import {
  MatchName,
  StartTime,
  Container,
  MatchDetail,
  Detail,
  MbBadge,
  FlexContainer,
  OddContainer,
} from "./styled";
import { MbProps, Props } from "./types";

const Mb = ({ mb }: MbProps) => {
  return <MbBadge mb={mb} />;
};

export const Match = ({ event, selectedMatch }: Props) => {
  const { mb, edh, en, iskbet, live } = event;
  return (
    <Container>
      <Detail>
        <Mb mb={mb} />

        <StartTime>{edh}</StartTime>
        <MatchDetail>
          <MatchName>{en}</MatchName>
          <FlexContainer>
            {iskbet && (
              <Image
                src="/svg/iskbet.svg"
                alt="iskbet"
                width={16}
                height={16}
                priority
              />
            )}
            {live && (
              <Image
                src="/svg/live.svg"
                alt="live"
                width={16}
                height={16}
                priority
              />
            )}
          </FlexContainer>
        </MatchDetail>
      </Detail>

      <OddContainer>
        {selectedMatch?.o.map((m) => (
          <span key={m.ov}>{m.odd}</span>
        ))}
      </OddContainer>
    </Container>
  );
};
