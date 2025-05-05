//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


const firstPara = document.querySelector("p");
console.log("First paragraph:", firstPara.textContent);

const p1 = document.querySelector("#para1");
const p2 = document.querySelector("#para2");
const p3 = document.querySelector("#para3");
const p4 = document.querySelector("#para4");

console.log("Para 1:", p1.textContent);
console.log("Para 2:", p2.textContent);
console.log("Para 3:", p3.textContent);
console.log("Para 4:", p4.textContent);


const allParagraphs = document.querySelectorAll("p");


allParagraphs.forEach((p, index) => {
  console.log(`Paragraph ${index + 1}:`, p.textContent);
});

p4.textContent = "This is the UPDATED paragraph 4.";
p1.setAttribute("class", "class1");
p2.className = "class2";
p3.classList.add("class3");
p4.setAttribute("class", "class4");

p1.style.color = "blue";
p1.style.fontSize = "16px";
p1.style.border = "1px solid black";

p2.style.color = "purple";
p2.style.fontFamily = "Arial";
p2.style.background = "#f0f0f0";

p3.style.color = "orange";
p3.style.fontSize = "18px";
p3.style.backgroundColor = "#eaeaea";

p4.style.color = "brown";
p4.style.fontFamily = "Georgia";
p4.style.border = "2px dashed gray";

allParagraphs.forEach((p, index) => {
  if (index === 0 || index === 2) {
    p.style.color = "green";
  } else if (index === 1 || index === 3) {
    p.style.color = "red";
  }
});