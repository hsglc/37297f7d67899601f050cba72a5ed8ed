const monthNumber: { [key: string]: number } = {
  Ocak: 1,
  Şubat: 2,
  Mart: 3,
  Nisan: 4,
  Mayıs: 5,
  Haziran: 6,
  Temmuz: 7,
  Ağustos: 8,
  Eylül: 9,
  Ekim: 10,
  Kasım: 11,
  Aralık: 12,
};

export function sortDates(datesArray: string[]): string[] {
  const parsedDates = datesArray.map((date) => {
    const [day, month, dayName] = date.split(" ");

    return { day: parseInt(day), month: monthNumber[month], dayName };
  });

  const sortedDates = parsedDates.sort((a, b) => {
    if (a.month !== b.month) {
      return a.month - b.month;
    } else {
      return a.day - b.day;
    }
  });

  return sortedDates.map(
    (date) =>
      `${date.day} ${Object.keys(monthNumber).find(
        (key) => monthNumber[key] === date.month
      )} ${date.dayName}`
  );
}
