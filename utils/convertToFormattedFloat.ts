export function convertToFormattedFloat(num: number) {
    if (Number.isInteger(num)) {
      return num.toFixed(2); // Ondalık kısmı 2 basamağa ayarlar
    } else {
      return num.toFixed(2); // Zaten float ise de aynı işlemi yapar
    }
  }