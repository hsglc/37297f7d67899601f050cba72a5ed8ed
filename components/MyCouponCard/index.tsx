import Image from "next/image";
import {
  CardContainer,
  CardHeader,
  CardWrapper,
  MyCouponTitle,
  TotalOdds,
  TotalOddsWrapper,
  TotalMatchesWrapper,
  TotalMatches,
  NoMatches,
  NoMatchesTitle,
  NoMatchesDescription,
  SelectedEvents,
  CardBody,
  TotalMatchesIconContainer,
  MatchCount,
  CouponCheckout,
  BetAmount,
  FlexTextContainer,
} from "./styled";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CouponEvent } from "./CouponEvent";
import { toggleCouponVisibility } from "@/store/coupon/couponSlice";
import useHover from "@/hooks/useHover";
import { Select } from "../Select";

export const MyCouponCard = () => {
  const { totalOdds, events, isVisible, betTimes, totalWin } = useAppSelector(
    (state) => state.coupon
  );
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const dispatch = useAppDispatch();

  const icon = isVisible
    ? "/svg/upperArrow.svg"
    : !isVisible && !isHovered
    ? "/svg/white-iddaa.svg"
    : "/svg/upperArrow.svg";

  return (
    <CardWrapper>
      <CardContainer>
        <CardHeader
          ref={hoverRef}
          onClick={() => {
            if (events.length > 0) dispatch(toggleCouponVisibility());
          }}>
          <TotalOddsWrapper>
            <MyCouponTitle>KUPONUM</MyCouponTitle>
            <TotalOdds>T. Oran: {totalOdds.toFixed(2)}</TotalOdds>
          </TotalOddsWrapper>
          {isVisible && <MatchCount>{events.length} Maç</MatchCount>}
          <TotalMatchesWrapper isOpen={isVisible}>
            <TotalMatchesIconContainer isHovered={!isVisible && isHovered}>
              <Image
                src={icon}
                alt="total matches"
                width={16}
                height={20}
                priority
              />
            </TotalMatchesIconContainer>
            {!isVisible && <TotalMatches>{events.length}</TotalMatches>}
          </TotalMatchesWrapper>
        </CardHeader>
        {isVisible && (
          <CardBody>
            {events.length > 0 ? (
              <SelectedEvents>
                {events.map((event) => (
                  <CouponEvent key={event.bid} event={event} />
                ))}
              </SelectedEvents>
            ) : (
              <NoMatches>
                <Image
                  src="/svg/iddaa.svg"
                  alt="iddaa"
                  width={48}
                  height={36}
                  priority
                />
                <NoMatchesTitle>
                  Kuponunuzda maç bulunmamaktadır.
                </NoMatchesTitle>
                <NoMatchesDescription>
                  Hemen bültene göz atarak maç ekleyebilirsin.
                </NoMatchesDescription>
              </NoMatches>
            )}
          </CardBody>
        )}
      </CardContainer>
      {isVisible && (
        <CouponCheckout>
          <div>
            <BetAmount>Misli</BetAmount>
            <Select />
          </div>
          <FlexTextContainer>
            <span>Kupon Bedeli:</span>
            <span>{betTimes},00</span>
          </FlexTextContainer>
          <FlexTextContainer>
            <span>Toplam Oran:</span>
            <span>{totalOdds.toFixed(2)}</span>
          </FlexTextContainer>
          <FlexTextContainer>
            <span>Maksimum Kazanç:</span>
            <span>{(totalOdds * betTimes).toFixed(2)}</span>
          </FlexTextContainer>
        </CouponCheckout>
      )}
    </CardWrapper>
  );
};
