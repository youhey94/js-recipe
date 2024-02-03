const buyButtonTea = document.getElementById("buy-button-tea")
const buyButtonCola = document.getElementById("buy-button-cola")
const changeButton = document.getElementById("change-button")
const displayItems = document.getElementById("display-items")
const displayPrice = document.getElementById("display-price")
const changePrice = document.getElementById("change-price")
let restMoney = 1000
displayPrice.textContent = `${restMoney}円`

//イベントの定義：要素.onイベント名=関数
let teaMoney = 0
let colaMoney = 0
//お茶のボタン
buyButtonTea.onclick = function () {
  displayItems.textContent += "🍵"
  //restMoney -= 130
  //displayPrice.textContent = `${restMoney}円`
  teaMoney += 130
  /*
  console.log("restMoneyは")
  console.log(restMoney)
  console.log("teaMoneyは")
  console.log(teaMoney)
  console.log("colaMoneyは")
  console.log(colaMoney)
  */
}

buyButtonCola.onclick = function () {
  displayItems.textContent += "コーラ"
  //restMoney -= 150
  //displayPrice.textContent = `${restMoney}円`
  colaMoney += 150
  /*
  console.log("restMoneyは")
  console.log(restMoney)
  console.log("teaMoneyは")
  console.log(teaMoney)
  console.log("colaMoneyは")
  console.log(colaMoney)
    */
}

//restMoney = restMoney - teaMoney - colaMoney
//displayPrice.textContent = `${restMoney}円`
//お釣り

changeButton.onclick = function () {
  restMoney = restMoney - teaMoney - colaMoney
  changePrice.textContent = restMoney
  console.log("restMoneyは")
  console.log(restMoney)
  console.log("teaMoneyは")
  console.log(teaMoney)
  console.log("colaMoneyは")
  console.log(colaMoney)
}
//let Number500 = Math.floor(restMoney / 500)
