import { Event } from "@/types";

export function sortMatchesByTime(timesArray: Event[]) {
  // Sort the times based on the 'edh' field
  timesArray.sort(function (a, b) {
    // Split the time strings to compare hours and minutes separately
    const timeA = a.edh.split(":");
    const timeB = b.edh.split(":");

    // Compare the hours
    if (parseInt(timeA[0]) !== parseInt(timeB[0])) {
      return parseInt(timeA[0]) - parseInt(timeB[0]);
    } else {
      // If hours are equal, compare the minutes
      return parseInt(timeA[1]) - parseInt(timeB[1]);
    }
  });

  return timesArray;
}
