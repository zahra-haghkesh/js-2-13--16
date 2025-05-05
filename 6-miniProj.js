//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red


const yearElement = document.querySelector("h1");

setInterval(() => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  yearElement.style.color = randomColor;
}, 1000);

const completedItems = document.querySelectorAll("li");
completedItems.forEach(item => {
  if (item.textContent.includes("Done")) {
    item.style.backgroundColor = "green";
    item.style.color = "white";
    item.style.padding = "10px";
    item.style.margin = "5px 0";
  }
});

completedItems.forEach(item => {
  if (item.textContent.includes("Ongoing")) {
    item.style.backgroundColor = "yellow";
    item.style.color = "black";
    item.style.padding = "10px";
    item.style.margin = "5px 0";
  }
});

completedItems.forEach(item => {
  if (item.textContent.includes("Coming")) {
    item.style.backgroundColor = "red";
    item.style.color = "white";
    item.style.padding = "10px";
    item.style.margin = "5px 0";
  }
});