/*
const button = document.getElementById("button")

//const alertMessage = function () {
button.onclick = function () {
  alert("クリックしたね")
}

//alertMessage()
//button.onclick = alertMessage

*/
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")
/*
const sayHello = function () {
  console.log("hello")
}
*/
document.onkeydown = function (e) {
  //console.log(e.target.value)
  console.log(e.key)
}
inputText.oninput = onkeydown
inputDate.oninput = onkeydown
