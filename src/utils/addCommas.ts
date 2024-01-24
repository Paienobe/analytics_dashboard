export const addCommasToNumber = (number: number) => {
  const numberString = number.toString();
  const numberWithCommas = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberWithCommas;
};
