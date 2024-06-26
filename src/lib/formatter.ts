export const parseWithCommas = (numberString: string) => {
  let result = "";
  let count = 0;

  for (let i = numberString.length - 1; i >= 0; i--) {
    result = numberString[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return result;
};

export const parseCurrency = (currencyString: string) => {
  const currencyStringWithCommas = parseWithCommas(currencyString);
  return "RD$" + " " + currencyStringWithCommas;
};
