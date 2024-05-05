import React, { Dispatch, SetStateAction } from "react";

export type Props = {
  value: string | number;
  onChange: (e: string) => void;
  placeholder: string;
  name: string;
  icon: React.ReactNode | null;
};
