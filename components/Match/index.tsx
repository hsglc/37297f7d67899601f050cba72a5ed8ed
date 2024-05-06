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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addOrUpdateEvent, removeEvent } from "@/features/coupon/couponSlice";

const Mb = ({ mb }: MbProps) => {
  return <MbBadge mb={mb} />;
};

export const Match = ({ event, selectedMatch }: Props) => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector((state) => state.coupon);
  console.log("events :", events);
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
          <button
            style={{
              marginRight: 5,
            }}
            onClick={() =>
              dispatch(
                addOrUpdateEvent({
                  sid: event.sid,
                  bid: event.bid,
                  ede: event.ede,
                  edh: event.edh,
                  en: event.en,
                  m: m,
                })
              )
            }
            key={m.ov}>
            {m.odd}
          </button>
        ))}
      </OddContainer>
    </Container>
  );
};
