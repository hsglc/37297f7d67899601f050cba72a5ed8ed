import React, { useCallback, useMemo, useState, useTransition } from "react";
import { Container } from "./styled";
import { MatchesFilterSection } from "../MatchesFilterSection";
import { useRouter } from "next/router";

import { useGetSportProgramByIdQuery } from "@/services/program";
import { useRouterParams } from "@/hooks/useRouterFilter";
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

export const MatchesTable = () => {
  const { query } = useRouter();
  const { getParamValue } = useRouterParams();
  const [name, setName] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [updatedMatches, setUpdatedMatches] = useState<Event[]>([]);

  const program = query.id as string;

  const currentProgram = programType[program as keyof typeof programType];

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
  }, [query, data]);

  const updateResultsByName = useCallback(
    (e: string) => {
      setName(e);
    },
    [filteredData]
  );

  const dates = useMemo(() => {
    const dateSet = new Set<string>();

    data?.data.events?.forEach((event) => {
      const edenValue = event.ede;
      if (!dateSet.has(edenValue)) {
        dateSet.add(edenValue);
      }
    });

    return Array.from(dateSet);
  }, [data, query.id]);

  return (
    <Container>
      <MatchesFilterSection
        dates={dates}
        name={name}
        updateResultsByName={updateResultsByName}
      />
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {filteredData?.map((match) => {
          const selectedMatch = match.m.find(
            (m) => m.muk === currentProgram.muk
          );
          if (!selectedMatch) return null;
          return (
            <div
              key={selectedMatch.mid}
              style={{
                display: "flex",
                gap: "10px",
              }}>
              <span>{match.mb}</span>
              <span>{match.edh}</span>
              <span>{match.en}</span>
              <span>{match.iskbet}</span>
              <span>{match.live}</span>
              {selectedMatch?.o.map((m) => (
                <div key={m.ov}>
                  <span>{m.odd}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
