//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */

const characterImages = {
  "Harry Potter":
    "https://static.wikia.nocookie.net/harrypotter/images/5/54/Harry_Potter_Calice_di_Fuoco_promo.jpg/revision/latest/scale-to-width-down/985?cb=20081209154506&path-prefix=it",
  "Hermione Granger":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAaMVmOsGpXGq9pDt6ATQagL4R4YGNpkkIwQ&s",
  "Ron Weasley":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7G7IILmxTeQ8Cd0Fem2BZOhASPvStWpD_g&s",
  "Albus Dumbledore":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTE27CIXQhZVydXwqI4_EyBq_DU3RJKK4pg&s",
  "Severus Snape":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eAkmWMnufAu3-BaL74baOo2bLSRRQ5W-1g&s",
  "Lord Voldemort":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDqY1MTPDsMNrGtymtz_pIjdzNVXVCtpELA&s",
};

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const characterName = card.querySelector("h3").textContent.trim();

  if (characterImages[characterName]) {
    const img = card.querySelector("img");
    img.src = characterImages[characterName];
    img.alt = characterName;
  } else {
    console.warn("No image found for:", characterName);
  }
});
