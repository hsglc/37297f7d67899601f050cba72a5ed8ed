import Image from "next/image";
import {
  MatchName,
  StartTime,
  Container,
  MatchDetail,
  Detail,
  FlexContainer,
  OddContainer,
  Odd,
  DummyOdd,
} from "./styled";
import type { Props } from "./types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addOrUpdateEvent } from "@/store/coupon/couponSlice";
import { MbBadge } from "@/components/MbBadge/styled";
import { O } from "@/types";
import { convertToFormattedFloat } from "@/utils/convertToFormattedFloat";

export const Match = ({
  event,
  selectedMatch,
  index,
  currentProgram,
}: Props) => {
  const dispatch = useAppDispatch();
  const { mb, edh, en, iskbet, live } = event;
  const { events } = useAppSelector((state) => state.coupon);

  const checkIsSelected = (o: O) => {
    const currentEvent = events.find((e) => e.bid === event.bid);
    if (!currentEvent) return false;
    return currentEvent.m.odd === o.odd;
  };

  const emptyOdds =
    currentProgram === "futbol"
      ? [
          { ov: 1, odd: "-" },
          { ov: 0, odd: "-" },
          { ov: 2, odd: "-" },
        ]
      : [
          { ov: 1, odd: "-" },
          { ov: 2, odd: "-" },
        ];

  const onAddOrUpdateEvent = (o: O) => {
    dispatch(
      addOrUpdateEvent({
        sid: event.sid,
        bid: event.bid,
        ede: event.ede,
        edh: event.edh,
        en: event.en,
        m: o,
        mb: event.mb,
        iskbet: event.iskbet,
        live: event.live,
      })
    );
  };

  return (
    <Container index={index}>
      <Detail>
        <MbBadge mb={mb} />

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
        {selectedMatch
          ? selectedMatch.o.map((o) => (
              <Odd
                isSelected={checkIsSelected(o)}
                onClick={() => onAddOrUpdateEvent(o)}
                key={o.ov}>
                {convertToFormattedFloat(o.odd)}
              </Odd>
            ))
          : emptyOdds?.map((o) => (
              <Odd isSelected={false} key={o.ov}>
                -
              </Odd>
            ))}

        <DummyOdd>+56</DummyOdd>
      </OddContainer>
    </Container>
  );
};
