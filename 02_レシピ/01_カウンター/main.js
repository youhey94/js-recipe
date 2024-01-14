const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
//const display = document.querySelector("h2")
//const plusButton = document.querySelector("button")

let count = 0

plusButton.onclick = function () {
  count += 1

  display.textContent = count
}

//plusBotton()
/*
plusButton.addEventListener("click", () => {
  count += 1
  display.innerHTML = count
})
*/
