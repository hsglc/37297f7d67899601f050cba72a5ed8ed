import { Select } from "@/components/Select";
import { useAppSelector } from "@/lib/hooks";

import {
  ApproveBetButton,
  BetAmount,
  Container,
  FlexTextContainer,
} from "./styled";
import type { Props } from "./types";

export const CouponCheckout = ({ openModal }: Props) => {
  const { totalOdds, betTimes } = useAppSelector((state) => state.coupon);
  return (
    <Container>
      <div>
        <BetAmount>Misli</BetAmount>
        <Select />
      </div>
      <FlexTextContainer>
        <span>Kupon Bedeli:</span>
        <span>{betTimes},00 TL</span>
      </FlexTextContainer>
      <FlexTextContainer>
        <span>Toplam Oran:</span>
        <span>{totalOdds.toFixed(2)}</span>
      </FlexTextContainer>
      <FlexTextContainer>
        <span>Maksimum Kazanç:</span>
        <span>{(totalOdds * betTimes).toFixed(2)} TL</span>
      </FlexTextContainer>
      <ApproveBetButton onClick={openModal}>Hemen Oyna</ApproveBetButton>
    </Container>
  );
};
