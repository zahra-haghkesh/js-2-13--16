//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:


const buttonTag = document.querySelector("button");
const buttonText = document.querySelector("button p");

buttonTag.addEventListener("click", handleBtnEffect);

function handleBtnEffect() {
  this.disable = true;
  this.children[0].style.display = "none";
  buttonText.innerText = "Added to cart";
}