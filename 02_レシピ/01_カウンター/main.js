const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twiceButton = document.getElementById("twice-button")
//const display = document.querySelector("h2")
//const plusButton = document.querySelector("button")

let count = 0

plusButton.onclick = function () {
  count += 1

  display.textContent = count
}

minusButton.onclick = function () {
  count -= 1

  display.textContent = count
}
twiceButton.onclick = function () {
  count *= 2
  display.textContent = count
}

//plusBotton()
/*
plusButton.addEventListener("click", () => {
  count += 1
  display.innerHTML = count
})
*/
