/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];


const userText = prompt("Enter a text to make it beautiful:");
let colorfulText = "";
for (let char of userText) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorfulText += <span style="color:${randomColor}">${char}</span>;
}
document.body.innerHTML = <h1>${colorfulText}</h1>;