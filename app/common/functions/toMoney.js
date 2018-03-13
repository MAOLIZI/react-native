/**
 * 格式化 money
 * number为要格式化的money
 * n为小数位数
 */

export function toMoney(number, n) {
  if (typeof(number) !== "number") {return;}
  if (number === undefined) {return;}
  if (number === 0) {return 0;}

  n = ( (n > 0 && n > 6) || (n === undefined) ) ? 2 : n;

  number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";

  /**
   * everse() 方法用于颠倒数组中元素的顺序
   * 该方法会改变原来的数组，而不会创建新的数组
   */
  let INTE_NUMBER = number.split(".")[0].split("").reverse(),
      DECI_NUMBER = number.split(".")[1];

  let t = "";
  for (let i = 0; i < INTE_NUMBER.length; i++) {
    t += INTE_NUMBER[i] + ( (i + 1) % 3 == 0 && (i + 1) != INTE_NUMBER.length ? "," : "");
  }

  return t.split("").reverse().join("") + "." + DECI_NUMBER;
}
