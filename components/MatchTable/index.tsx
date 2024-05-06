import { useCallback, useDeferredValue, useMemo, useState } from "react";
import { Container } from "./styled";
import { MatchFilter } from "../MatchFilter";
import { useRouter } from "next/router";

import { sortDates } from "@/utils/sortDates";

import { useGetSportProgramByIdQuery } from "@/services/program";
import { useRouterParams } from "@/hooks/useRouterFilter";
import { MatchHeader } from "./MatchHeader";
import { Match } from "./Match";
import { Event } from "@/types";

const programType = {
  futbol: {
    id: 1,
    muk: "1_1",
  },
  basketbol: {
    id: 2,
    muk: "1_2",
  },
  tenis: {
    id: 5,
    muk: "1_9",
  },
};

export const MatchTable = () => {
  function organizeMatchesByStartTime(timesArray: Event[]) {
    // Sort the times based on the 'saat' field
    timesArray.sort(function (a, b) {
      // Split the time strings to compare hours and minutes separately
      const timeA = a.edh.split(":");
      const timeB = b.edh.split(":");

      // Compare the hours
      if (parseInt(timeA[0]) !== parseInt(timeB[0])) {
        return parseInt(timeA[0]) - parseInt(timeB[0]);
      } else {
        // If hours are equal, compare the minutes
        return parseInt(timeA[1]) - parseInt(timeB[1]);
      }
    });

    return timesArray;
  }
  const { query } = useRouter();
  const { getParamValue } = useRouterParams();
  const [name, setName] = useState<string>("");
  const deferredName = useDeferredValue(name);

  const currentProgram = useMemo(() => {
    return programType[query.id as keyof typeof programType];
  }, [query.id]);

  const { data, error, isLoading } = useGetSportProgramByIdQuery(
    currentProgram?.id ?? 1
  );

  const filteredData = useMemo(() => {
    const iskbet = Boolean(getParamValue("iskbet"));
    const mb = Number(getParamValue("mb"));
    const date = String(getParamValue("date"));

    if (!iskbet && !mb && date === "undefined") {
      return data?.data.events;
    } else {
      const dates = date.split(",");
      const isDateValid = date !== "undefined" && !dates.includes("undefined");
      return data?.data.events.filter((event) => {
        if (
          isDateValid &&
          dates.includes(event.ede) &&
          iskbet &&
          event.iskbet &&
          mb &&
          event.mb === mb
        ) {
          return true;
        } else if (
          !mb &&
          isDateValid &&
          dates.includes(event.ede) &&
          iskbet &&
          event.iskbet
        ) {
          return true;
        } else if (
          !iskbet &&
          isDateValid &&
          dates.includes(event.ede) &&
          mb &&
          event.mb === mb
        ) {
          return true;
        } else if (
          !isDateValid &&
          mb &&
          event.mb === mb &&
          iskbet &&
          event.iskbet === iskbet
        ) {
          return true;
        } else if (!isDateValid && !mb && iskbet && event.iskbet === iskbet) {
          return true;
        } else if (!isDateValid && !iskbet && mb && event.mb === mb) {
          return true;
        } else if (!iskbet && !mb && isDateValid && dates.includes(event.ede)) {
          return true;
        } else {
          return false;
        }
      });
    }
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
      return filteredData?.filter((match) => match.ede === day) ?? [];
    },
    [filteredData]
  );

  return (
    <Container>
      <MatchFilter dates={dates} name={name} setName={setName} />
      <div>
        {isLoading && <div>Loading...</div>}
        {/* {error && <div>Error...</div>} */}
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
