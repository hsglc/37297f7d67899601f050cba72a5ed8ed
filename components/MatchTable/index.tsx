import { useCallback, useDeferredValue, useMemo, useState } from "react";
import { Container } from "./styled";
import { MatchFilter } from "../MatchFilter";
import { useRouter } from "next/router";

import { sortDates } from "@/utils/sortDates";
import { organizeMatchesByStartTime } from "@/utils/organizeMatchesByStartTime";

import { useGetSportProgramByIdQuery } from "@/services/program";
import { useRouterParams } from "@/hooks/useRouterFilter";
import { MatchHeader } from "./MatchHeader";
import { Match } from "./Match";
import { SPORTS } from "@/constants";

export const MatchTable = () => {
  const { query } = useRouter();
  const { getParamValue } = useRouterParams();
  const [name, setName] = useState<string>("");
  const deferredName = useDeferredValue(name);

  const currentProgram = useMemo(() => {
    return SPORTS[query.id as keyof typeof SPORTS];
  }, [query.id]);

  const { data, isError, isLoading } = useGetSportProgramByIdQuery(
    currentProgram?.id ?? SPORTS.futbol.id
  );

  const filteredData = useMemo(() => {
    const isKbetActive = Boolean(getParamValue("iskbet"));
    const mbValue = Number(getParamValue("mb"));
    const dateValue = String(getParamValue("date"));

    const isUndefinedDate = dateValue === "undefined";
    const dates = isUndefinedDate ? [] : dateValue.split(",");
    const isDateValid = !isUndefinedDate && !dates.includes("undefined");

    const filteredEvents = data?.data.events.filter((event) => {
      const isDateMatching = isDateValid ? dates.includes(event.ede) : true;
      const isKbetMatching = isKbetActive ? event.iskbet : true;
      const isMbMatching = mbValue ? event.mb === mbValue : true;

      return isDateMatching && isKbetMatching && isMbMatching;
    });

    if (deferredName) {
      return filteredEvents?.filter((event) =>
        event.en.toLowerCase().includes(deferredName.toLowerCase())
      );
    }

    return filteredEvents;
  }, [query, data, deferredName]);

  const dates = useMemo(() => {
    const dateSet = new Set<string>();

    data?.data.events?.forEach((event) => {
      const edenValue = event.ede;
      if (!dateSet.has(edenValue)) {
        dateSet.add(edenValue);
      }
    });

    return sortDates(Array.from(dateSet));
  }, [data, query.id]);

  const groupMatcheshByDay = useCallback(
    (day: string) => {
      return organizeMatchesByStartTime(
        filteredData?.filter((match) => match.ede === day) ?? []
      );
    },
    [filteredData]
  );

  return (
    <Container>
      <MatchFilter dates={dates} name={name} setName={setName} />
      <div>
        {isLoading && <div>Yükleniyor</div>}
        {isError && <div>Herhangi bir maç bulunamadı</div>}
        {dates.map((date) => (
          <div key={date}>
            <MatchHeader key={date} day={date} program={currentProgram.id} />
            {groupMatcheshByDay(date)?.map((event, index) => {
              const selectedMatch = event.m.find(
                (m) => m.muk === currentProgram.muk
              );
              if (!selectedMatch) return null;
              return (
                <Match
                  index={index}
                  key={selectedMatch.mid}
                  event={event}
                  selectedMatch={selectedMatch}
                />
              );
            })}
          </div>
        ))}
      </div>
    </Container>
  );
};
