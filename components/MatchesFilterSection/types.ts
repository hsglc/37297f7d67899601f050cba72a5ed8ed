import { Dispatch, SetStateAction } from "react";

export type Props = {
  dates: string[];
  name: string;
  updateResultsByName: (e: string) => void;
};
