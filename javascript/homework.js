document.addEventListener('DOMContentLoaded', () => {
    // Task 1: DOM Manipulation
    const heading = document.getElementById('heading');
    heading.innerText = "DOM Manipulation Completed!";
  
    // Task 2: Dynamic Content Insertion
    const addItemButton = document.getElementById('addItemButton');
    const itemList = document.getElementById('itemList');
    let itemCount = 0;
  
    addItemButton.addEventListener('click', () => {
      itemCount++;
      const newItem = document.createElement('li');
      newItem.innerText = `Item ${itemCount}`;
      itemList.appendChild(newItem);
    });
  
    // Task 3: Input Change Handling
    const textInput = document.getElementById('textInput');
    const displayText = document.getElementById('displayText');
  
    textInput.addEventListener('input', () => {
      displayText.innerText = `Input value: ${textInput.value}`;
    });
  
    // Task 4: Form Submission Handling
    const form = document.getElementById('form');
    const userInput = document.getElementById('userInput');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert(`You entered: ${userInput.value}`);
    });
  
    // Task 5: Random Color Change on Button Click
    const randomColorButton = document.getElementById('randomColorButton');
    randomColorButton.addEventListener('click', () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      randomColorButton.style.backgroundColor = randomColor;
    });
  });
  