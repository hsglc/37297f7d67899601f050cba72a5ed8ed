import React from "react";

export type Props = {
  value: string | number;
  onChange: (value: string) => void;
  placeholder: string;
  name: string;
  icon: React.ReactNode | null;
};
