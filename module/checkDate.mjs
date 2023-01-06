export function checkDate(date) {
  const getDate = new Date();
  let monthStr = Number(getDate.getMonth() + 1);
  if (monthStr < 10) {
    monthStr = "0" + monthStr;
  }
  let dayStr = Number(getDate.getDate());
  if (dayStr < 10) {
    dayStr = "0" + dayStr;
  }
  const getDateStr = getDate.getFullYear() + "-" + monthStr + "-" + dayStr;
  return date >= getDateStr;
}
