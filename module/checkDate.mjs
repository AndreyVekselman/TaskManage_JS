export function checkDate(date) {
  const getDate = new Date();
  const getDateStr =
    getDate.getFullYear() +
    "-" +
    Number(getDate.getMonth() + 1) +
    "-" +
    getDate.getDate();
  return date > getDateStr;
}
