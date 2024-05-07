import {
  SelectContainer,
  OptionsList,
  Placeholder,
  OptionLabel,
} from "@/components/DatePicker/styled";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setBetTimes } from "@/store/coupon/couponSlice";

import { BET_OPTIONS } from "@/constants";

export const Select = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const betTimes = useAppSelector((state) => state.coupon.betTimes);
  const selectRef = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOutsideClick(selectRef, handleClickOutside);

  const selectBetTimes = (betTimes: number) => {
    dispatch(setBetTimes(betTimes));
    setIsOpen(false);
  };
  return (
    <SelectContainer fullWidth={true} ref={selectRef}>
      <Placeholder isChecked={false} onClick={() => setIsOpen(!isOpen)}>
        {betTimes}
      </Placeholder>
      <Image
        src={"/svg/upperArrow.svg"}
        alt="open bet times dropdown"
        width={8}
        height={8}
        priority
      />
      {isOpen && (
        <OptionsList>
          {BET_OPTIONS.map((bet) => (
            <OptionLabel key={bet} onClick={() => selectBetTimes(bet)}>
              {bet}
            </OptionLabel>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
