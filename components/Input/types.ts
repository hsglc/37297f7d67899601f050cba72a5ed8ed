import { Dispatch, SetStateAction } from "react";

export type Props = {
  value: string | number;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
  name: string;
  icon: React.ReactNode | null;
};
