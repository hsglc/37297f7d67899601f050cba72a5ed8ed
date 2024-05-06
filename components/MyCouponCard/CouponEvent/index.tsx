import Image from "next/image";

import { useAppDispatch } from "@/lib/hooks";
import { removeEvent } from "@/store/coupon/couponSlice";

import {
  Container,
  EventInfo,
  FlexContainer,
  EventTime,
  TrashButton,
  EventBet,
  MbBadge,
  MatchBet,
  EventName,
  Odd,
} from "./styled";
import type { Props } from "./types";

export const CouponEvent = ({ event }: Props) => {
  const dispatch = useAppDispatch();

  const logoSrc =
    event.sid === 1
      ? "/svg/futbol.svg"
      : event.sid === 2
      ? "/svg/basketbol.svg"
      : "/svg/tenis.svg";

  const { en, ede, edh, mb, m, iskbet, live } = event;

  return (
    <Container>
      <EventInfo>
        <FlexContainer>
          <Image
            src={logoSrc}
            alt="sport logo"
            width={16}
            height={16}
            priority
          />
          <EventName>{en}</EventName>
        </FlexContainer>
        <TrashButton onClick={() => dispatch(removeEvent(event))}>
          <Image
            src="/svg/clear.svg"
            alt="delete event"
            width={16}
            height={16}
            priority
          />
        </TrashButton>
      </EventInfo>
      <EventTime>
        {ede} {edh}
      </EventTime>
      <EventBet>
        <FlexContainer>
          <MbBadge mb={mb}>{mb}</MbBadge>
          <p>
            Maç Sonucu : <MatchBet>{m.ona}</MatchBet>
          </p>
        </FlexContainer>
        <FlexContainer>
          <Odd>{m.odd}</Odd>
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
      </EventBet>
    </Container>
  );
};
