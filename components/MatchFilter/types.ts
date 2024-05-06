import { Dispatch, SetStateAction } from "react";

export type Props = {
  dates: string[];
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};
