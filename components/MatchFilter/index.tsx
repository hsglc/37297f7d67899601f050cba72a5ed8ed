import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
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
import type { Props } from "./types";
import { useRouterParams } from "@/hooks/useRouterFilter";
import { SPORTS } from "@/constants";

export const MatchFilter = ({ dates, name, setName }: Props) => {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const { query } = useRouter();

  const { toggleParam, clearParams, setParam } = useRouterParams({
    method: "replace",
    shallow: true,
  });

  const onDateChange = (date: string) => {
    if (selectedDates.includes(date)) {
      const newSelectedDates = selectedDates.filter(
        (selectedDate) => selectedDate !== date
      );
      setSelectedDates(newSelectedDates);
      setParam("date", newSelectedDates.join(","));
    } else {
      const newSelectedDates = [...selectedDates, date];
      setSelectedDates(newSelectedDates);
      setParam("date", newSelectedDates.join(","));
    }
  };

  useEffect(() => {
    const dates = decodeURIComponent(query.date as string);
    if (dates === "undefined") return setSelectedDates([]);
    else {
      setSelectedDates(dates.split(","));
    }
  }, [query.id, query.date]);

  const clearFilter = () => {
    clearParams("iskbet", "mb", "date");
    setName("");
  };

  const currentProgram = useMemo(() => {
    return SPORTS[query.id as keyof typeof SPORTS];
  }, [query.id]);

  const wideRatio = useMemo(() => {
    return currentProgram?.id === SPORTS.futbol.id ? "75%" : "66.66667%";
  }, [currentProgram]);

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
            isSearching={Boolean(query.date)}
            onChange={(date) => onDateChange(date)}
            value={selectedDates}
            options={dates}
            placeholder="Tarih"
          />
        </NameAndDateWrapper>
        <KingAndOneMatchWrapper>
          <TransparentButton onClick={() => toggleParam("iskbet", true)}>
            <Image
              src={query.iskbet ? "/svg/activeKingBet.svg" : "/svg/kingBet.svg"}
              alt="king bet"
              width={25}
              height={20}
              priority
            />
          </TransparentButton>
          <TransparentButton onClick={() => toggleParam("mb", "1")}>
            <Image
              src={query.mb ? "/svg/activeOneMatch.svg" : "/svg/oneMatch.svg"}
              alt="one match"
              width={25}
              height={20}
              priority
            />
          </TransparentButton>

          <ClearFilterButton onClick={clearFilter}>
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
      <MatchEndTitle wideRatio={wideRatio}>
        <h5>Maç Sonucu</h5>
      </MatchEndTitle>
    </Container>
  );
};
