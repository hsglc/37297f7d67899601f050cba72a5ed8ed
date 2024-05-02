export function getCurrentDateTime() {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const now = new Date();
  const day = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const dateElement = `${day} ${months[monthIndex]} ${year}`;
  const timeElement = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return { dateElement, timeElement };
}
