/**
 * 简单的四舍五入
 * @param {Number} number 要四舍五入的数
 * @param {Number} precision 小数点后保留几位
 */
export function precisionRound(number, precision) {
  const factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor
}
