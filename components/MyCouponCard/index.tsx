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
  ModalContent,
} from "./styled";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CouponEvent } from "./CouponEvent";
import {
  resetCoupon,
  toggleCouponVisibility,
} from "@/store/coupon/couponSlice";
import useHover from "@/hooks/useHover";
import { useState } from "react";
import { Modal } from "../Modal";
import { CouponCheckout } from "./CouponCheckout";

export const MyCouponCard = () => {
  const { totalOdds, events, isVisible } = useAppSelector(
    (state) => state.coupon
  );
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const approveBet = () => {
    dispatch(resetCoupon());
    closeModal();
  };

  const icon = isVisible
    ? "/svg/upperArrow.svg"
    : !isVisible && !isHovered
    ? "/svg/white-iddaa.svg"
    : "/svg/upperArrow.svg";

  const onToggleCouponVisibility = () => {
    if (events.length > 0) {
      dispatch(toggleCouponVisibility());
    }
  };

  return (
    <CardWrapper>
      {isOpen && (
        <Modal onClose={closeModal}>
          <ModalContent>
            <h2>Kuponunuz Başarıyla oluşturulmuştur</h2>
            <button onClick={approveBet}>Yeni Kupon Yap</button>
          </ModalContent>
        </Modal>
      )}
      <CardContainer>
        <CardHeader ref={hoverRef} onClick={onToggleCouponVisibility}>
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
      {isVisible && <CouponCheckout openModal={openModal} />}
    </CardWrapper>
  );
};
