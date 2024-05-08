import Image from "next/image";

import { NoMatches, NoMatchesDescription, NoMatchesTitle } from "./styled";

import type { Props } from "./types";

export const NoMatchesFound = ({ component }: Props) => {
  const title =
    component === "matches"
      ? "Şu anda oynanabilir bahis bulunmamaktadır."
      : "Kuponunuzda maç bulunmamaktadır.";
  return (
    <NoMatches component={component}>
      <Image src="/svg/iddaa.svg" alt="iddaa" width={48} height={36} priority />
      <NoMatchesTitle>{title}</NoMatchesTitle>

      {component !== "matches" && (
        <NoMatchesDescription>
          Hemen bültene göz atarak maç ekleyebilirsin.
        </NoMatchesDescription>
      )}
    </NoMatches>
  );
};
