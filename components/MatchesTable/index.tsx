import React from "react";
import { Container } from "./styled";
import { MatchesFilterSection } from "../MatchesFilterSection";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

export const MatchesTable = () => {
  const matches = useAppSelector((state) => state.sportProgram.data.events);
  return (
    <Container>
      <MatchesFilterSection />
      <div>
        {matches.map((match) => (
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
