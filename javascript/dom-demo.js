

const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const itemList = document.getElementById("itemList");

// Event to add a new list item
addButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = "New Item";
  itemList.appendChild(newItem);
});

// Event to clear all items from the list
clearButton.addEventListener("click", () => {
  itemList.innerHTML = ""; // Clears all items
});