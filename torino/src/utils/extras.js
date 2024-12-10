export function toPersianNumber(number) {
  const persianMap = new Map([
    ["0", "۰"],
    ["1", "۱"],
    ["2", "۲"],
    ["3", "۳"],
    ["4", "۴"],
    ["5", "۵"],
    ["6", "۶"],
    ["7", "۷"],
    ["8", "۸"],
    ["9", "۹"],
  ]);

  return number
    .toString()
    .split("")
    .map((digit) => persianMap.get(digit) || digit)
    .join("");
}
export const howmanyDats = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffrenceTime = end.getTime() - start.getTime();
  const day = diffrenceTime / (1000 * 3600 * 24);
  return day;
};
export const isValidMobile = (val) => {
  let regex = new RegExp("^[0][9][0-9][0-9]{8,8}$").test(val);
  return regex;
};

