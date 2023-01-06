export function checkDate(date) {
  const getDate = new Date();
  let monthStr,
    dayStr = 0;
  monthStr = getDate.getMonth() + 1;
  if (monthStr < 10) {
    monthStr = "0" + monthStr;
  }
  dayStr = getDate.getDate();
  if (dayStr < 10) {
    dayStr = "0" + dayStr;
  }
  const getDateStr = getDate.getFullYear() + "-" + monthStr + "-" + dayStr;
  return date >= getDateStr;
}
