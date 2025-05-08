/* Optional
todo1: look at the html and css files
todo2: complete the code below to make a simple game
todo3: the circle should move with arrow keys
todo4: By pressing the arrow left and arrow right keys, we should change the value of the positionX variable (add or subtract the number 5 for each press) and by pressing the arrow down and arrow up keys, we should change the value of the positionY variable.
todo5: We should set the values of the positionX and positionY variables as the values of the top and left styles to the circle.

as result the red circles should be removed from the screen when they are touched by the green circle

*/

const circle = document.querySelector(".circle");
const blocks = document.querySelectorAll(".block");

let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", moveCircle);

function moveCircle(e) {
  // write code here
  // switch (e.key) {
  // }
  switch (e.key) {
    case "ArrowRight":
      positionX += 5;
      break;
    case "ArrowLeft":
      positionX -= 5;
      break;
    case "ArrowUp":
      positionY -= 5;
      break;
    case "ArrowDown":
      positionY += 5;
      break;
    default:
      break;
  }

  circle.style.left = positionX + "px";
  circle.style.top = positionY + "px";

  // circle.style.left = //?
  // circle.style.top = //?

  blocks.forEach((block) => {
    if (checkCollision(circle, block)) {
      block.style.display = "none";
    }
  });
}

function checkCollision(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}
