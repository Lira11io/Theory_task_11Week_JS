/* let value = input.setAttribute("value", "До свидания");
console.log(input.hasAttribute("value")); */
/* const tableAge = document.getElementById("age-table");/*найдет таблицу с id=age-table*/
/*console.log(tableAge); */
/* let elements =
  document.getElementsByTagName(
    "label"
  );  */ /*Это если хотим найти все такие элементы во всем коде*/
/* console.log(elements);
let label = document.querySelectorAll("label"); */ /*Это если хотим найти все такие элементы во всем коде*/
/* console.log(label); */
/* let labels = tableAge.getElementsByTagName("label"); */ /*найдет элемент label по имени в таблице*/
/* console.log(labels); */
/* const form = document.getElementsByName("search-person"); */ /*найдет элемент form с именем search-person*/
/* console.log(form);
 */
/* const tableAge1 = document.querySelector("#age-table");
console.log(tableAge1);
 */

/*Практическое задание*/
const price1 = document.querySelector("#price1").innerHTML;
const price2 = document.querySelector("#price2").innerHTML;
const price3 = document.querySelector("#price3").innerHTML;
const price4 = document.querySelector("#price4").innerHTML;

const sum =
  Number.parseInt(price1) +
  Number.parseInt(price2) +
  Number.parseInt(price3) +
  Number.parseInt(price4);

const total = document.querySelector("#total");

total.textContent = sum;

function resultTotal() {
  total.textContent = sum - (sum * 20) / 100;
}
