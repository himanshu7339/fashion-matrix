export function formatPriceWithCommas(price) {
    let priceString = price.toString();

    const [wholePart, decimalPart] = priceString.split(".");

    const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const formattedPrice = decimalPart
      ? `${formattedWholePart}.${decimalPart}`
      : formattedWholePart;

    return formattedPrice;
  }


 export function truncateText(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    } else {
      return text;
    }
  }