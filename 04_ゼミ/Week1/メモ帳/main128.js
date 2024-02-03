const input = document.getElementById("input")
const container = document.getElementById("container")
const addButton = document.getElementById("add-Button")
//const removeALLButton=document.getElementById("remove-all-button")

let list = []
if (localStorage.list) {
  const listJson = localStorage.list

  list = JSON.parse(listJson)
}
for (let i = 0; i < list.length; i++) {
  const div = document.createElement("div")
  div.textContent = list[i]
  container.append(div)
}

addButton.onclick = function () {
  list.push(input.value)

  container.textContent = ""
  for (let j = 0; j < list.length; j++) {
    const div = document.createElement("div")
    div.textContent = list[j]
    container.append(div)
  }
  localStorage.list = JSON.stringify(list)
}
