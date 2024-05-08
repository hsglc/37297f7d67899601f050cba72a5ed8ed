import { Event, M } from "@/types";

export type Props = {
  event: Event;
  selectedMatch: M | undefined;
  index: number;
  currentProgram: "futbol" | "basketbol" | "tenis";
};
