const inputElement = document.getElementById("input")
const container = document.getElementById("container")
const addButton = document.getElementById("add-Button")
const removeALLButton = document.getElementById("remove-all-Button")

let list = []

if (localStorage.list) {
  list = JSON.parse(localStorage.list)

  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

addButton.onclick = function () {
  const text = inputElement.value

  list.push(text)
  localStorage.list = JSON.stringify(list)

  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  container.append(card)
  localStorage.name = "よーへー"

  input.value = ""
}

removeALLButton.onclick = function () {
  list = []
  localStorage.list = JSON.stringify(list)

  container.textContent = ""
}
