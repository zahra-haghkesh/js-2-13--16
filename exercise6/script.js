// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

printPersons(persons);



function printPersons(persons) {
  const container = document.createElement("div");

  
  persons.forEach(person => {
    const personElement = document.createElement("p");
    personElement.textContent = `${person.name} - Age: ${person.age}`;

    container.appendChild(personElement);
  });

  document.body.appendChild(container);
}

const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

printPersons(persons);
