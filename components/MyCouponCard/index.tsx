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

export const MyCouponCard = () => {
  return (
    <CardWrapper>
      <CardContainer>
        <CardHeader>
          <TotalOddsWrapper>
            <MyCouponTitle>KUPONUM</MyCouponTitle>
            <TotalOdds>T. Oran: 15.55</TotalOdds>
          </TotalOddsWrapper>
          <TotalMatchesWrapper>
            <Image
              src="/svg/upperArrow.svg"
              alt="total matches"
              width={12}
              height={20}
              priority
            />
            <TotalMatches>0</TotalMatches>
          </TotalMatchesWrapper>
        </CardHeader>
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
      </CardContainer>
    </CardWrapper>
  );
};
