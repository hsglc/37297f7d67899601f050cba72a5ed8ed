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
} from "./styled";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { removeEvent } from "@/features/coupon/couponSlice";

export const MyCouponCard = () => {
  const totalOdds = useAppSelector((state) => state.coupon.totalOdds);
  const events = useAppSelector((state) => state.coupon.events);

  const dispatch = useAppDispatch();
  return (
    <CardWrapper>
      <CardContainer>
        <CardHeader>
          <TotalOddsWrapper>
            <MyCouponTitle>KUPONUM</MyCouponTitle>
            <TotalOdds>T. Oran: {totalOdds.toFixed(2)}</TotalOdds>
          </TotalOddsWrapper>
          <TotalMatchesWrapper>
            <Image
              src="/svg/upperArrow.svg"
              alt="total matches"
              width={12}
              height={20}
              priority
            />
            <TotalMatches>{events.length}</TotalMatches>
          </TotalMatchesWrapper>
        </CardHeader>
        {events.length > 0 ? (
          <div>
            {events.map((event) => (
              <div key={event.bid}>
                <div>{event.en}</div>
                <div>{event.edh}</div>
                <div>{event.m.odd}</div>
                <button onClick={() => dispatch(removeEvent(event))}>
                  Trash
                </button>
              </div>
            ))}
          </div>
        ) : (
          <NoMatches>
            <Image
              src="/svg/iddaa.svg"
              alt="iddaa"
              width={48}
              height={36}
              priority
            />
            <NoMatchesTitle>Kuponunuzda maç bulunmamaktadır.</NoMatchesTitle>
            <NoMatchesDescription>
              Hemen bültene göz atarak maç ekleyebilirsin.
            </NoMatchesDescription>
          </NoMatches>
        )}
      </CardContainer>
    </CardWrapper>
  );
};
