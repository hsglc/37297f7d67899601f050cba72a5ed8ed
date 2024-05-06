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
  CardBody,
} from "./styled";

import { useAppSelector } from "@/lib/hooks";
import { CouponEvent } from "./CouponEvent";

export const MyCouponCard = () => {
  const totalOdds = useAppSelector((state) => state.coupon.totalOdds);
  const events = useAppSelector((state) => state.coupon.events);

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
          <CardBody>
            {events.map((event) => (
              <CouponEvent key={event.bid} event={event} />
            ))}
          </CardBody>
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
