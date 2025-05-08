// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer



const messageSectionCloseIcon = document.querySelector(".ri-close-line");

messageSectionCloseIcon.addEventListener("click", closerMessageSection);

function closerMessageSection() {
  this.parentElement.style.visibility = "hidden";
}
