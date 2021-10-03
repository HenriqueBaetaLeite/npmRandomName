const people = [
  { name: "Elon Musk" },
  { name: "Neil Gunther" },
  { name: "Antonio Neri" },
  { name: "Jack Dorsey" },
  { name: "Steve Jobs" },
];

const randomIndex = () => Math.floor(Math.random() * people.length);

const randomName = () => "Henrique Baêta";

module.exports = randomName;
