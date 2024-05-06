import {
  SelectedOption,
  SelectContainer,
  OptionsList,
  Placeholder,
  IconWrapper,
  OptionLabel,
  OptionInput,
} from "@/components/DatePicker/styled";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setBetTimes } from "@/store/coupon/couponSlice";

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
          {[20, 30, 50, 100, 150, 500, 1000, 2000, 4000, 5000].map(
            (betTimes) => (
              <OptionLabel
                key={betTimes}
                onClick={() => selectBetTimes(betTimes)}>
                {betTimes}
              </OptionLabel>
            )
          )}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
