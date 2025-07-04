"use strict";
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];
  if (d < 0) {
    // нет корней
    return arr;
  } else if (d === 0) {
    // один корень
    arr.push(-b / (2 * a));
  } else {
    // два корня
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12; // месячная процентная ставка
  let S = amount - contribution; // сумма ктр надо отдать
  let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let total = monthlyPayment * countMonths; // общая сумма выплат
  if (S <= 0) {
    return 0;
  }  
  return Number(total.toFixed(2)); // округлить до 2х знаков
}
