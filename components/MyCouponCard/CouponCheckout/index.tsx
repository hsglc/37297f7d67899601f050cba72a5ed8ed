import { Select } from "@/components/Select";
import { useAppSelector } from "@/lib/hooks";

import * as S from "./styled";
import type { Props } from "./types";

export const CouponCheckout = ({ openModal }: Props) => {
  const { totalOdds, betTimes } = useAppSelector((state) => state.coupon);
  return (
    <S.CouponCheckout>
      <div>
        <S.BetAmount>Misli</S.BetAmount>
        <Select />
      </div>
      <S.FlexTextContainer>
        <span>Kupon Bedeli:</span>
        <span>{betTimes},00</span>
      </S.FlexTextContainer>
      <S.FlexTextContainer>
        <span>Toplam Oran:</span>
        <span>{totalOdds.toFixed(2)}</span>
      </S.FlexTextContainer>
      <S.FlexTextContainer>
        <span>Maksimum Kazanç:</span>
        <span>{(totalOdds * betTimes).toFixed(2)}</span>
      </S.FlexTextContainer>
      <S.ApproveBetButton onClick={openModal}>Hemen Oyna</S.ApproveBetButton>
    </S.CouponCheckout>
  );
};
