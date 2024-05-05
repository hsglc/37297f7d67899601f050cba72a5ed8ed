import React from "react";
import { Container } from "./styled";
import { MatchesFilterSection } from "../MatchesFilterSection";
import { useRouter } from "next/router";

import { useGetSportProgramByIdQuery } from "@/services/program";

const programType: Record<string, number> = {
  futbol: 1,
  basketbol: 2,
  tenis: 5,
};

export const MatchesTable = () => {
  const program = useRouter().query.id;
  const query = useRouter().query;

  const programId = programType[program as keyof typeof programType];

  const { data, error, isLoading, refetch } = useGetSportProgramByIdQuery(
    programId ?? 1
  );

  const dateSet = new Set<string>();

  data?.data.events.forEach((event) => {
    const edgnValue = event.edgn;
    if (!dateSet.has(edgnValue)) {
      dateSet.add(edgnValue);
    }
  });

  return (
    <Container>
      <MatchesFilterSection dates={Array.from(dateSet)} />
      <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {data?.data.events.map((match) => (
          <div key={match.bid}>
            <span>{match.mb}</span>
            <span>{match.edh}</span>
            <span>{match.en}</span>
            <span>{match.iskbet}</span>
            <span>{match.live}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
