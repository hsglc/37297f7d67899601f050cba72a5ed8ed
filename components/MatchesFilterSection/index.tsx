import { useState } from "react";
import Image from "next/image";

import { Input } from "../Input";
import { DatePicker } from "../DatePicker";

import {
  ClearFilterButton,
  Container,
  KingAndOneMatchWrapper,
  NameAndDateWrapper,
  TransparentButton,
  FilterElements,
  MatchEndTitle,
} from "./styled";

export const MatchesFilterSection = () => {
  const [name, setName] = useState<string>("");
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [kingBet, setKingBet] = useState<boolean>(false);
  const [oneMatch, setOneMatch] = useState<boolean>(false);

  const onDateChange = (date: string) => {
    if (selectedDates.includes(date)) {
      setSelectedDates(
        selectedDates.filter((selectedDate) => selectedDate !== date)
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <Container>
      <FilterElements>
        <NameAndDateWrapper>
          <Input
            icon={
              <Image
                src="/svg/search.svg"
                alt="search"
                width={15}
                height={15}
                priority
              />
            }
            name="search-team"
            value={name}
            onChange={setName}
            placeholder="Takım adı giriniz"
          />
          <DatePicker
            onChange={(date) => {
              onDateChange(date);
            }}
            value={selectedDates}
            options={["Bugün", "Yarın"]}
            placeholder="Tarih"
          />
        </NameAndDateWrapper>
        <KingAndOneMatchWrapper>
          <TransparentButton onClick={() => setKingBet(!kingBet)}>
            <Image
              src={kingBet ? "/svg/activeKingBet.svg" : "/svg/kingBet.svg"}
              alt="king bet"
              width={25}
              height={20}
              priority
            />
          </TransparentButton>
          <TransparentButton onClick={() => setOneMatch(!oneMatch)}>
            <Image
              src={oneMatch ? "/svg/activeOneMatch.svg" : "/svg/oneMatch.svg"}
              alt="one match"
              width={25}
              height={20}
              priority
            />
          </TransparentButton>

          <ClearFilterButton>
            <Image
              src="/svg/trash.svg"
              alt="clear filter"
              width={15}
              height={17}
              priority
            />
          </ClearFilterButton>
        </KingAndOneMatchWrapper>
      </FilterElements>
      <MatchEndTitle>Maç Sonucu</MatchEndTitle>
    </Container>
  );
};
