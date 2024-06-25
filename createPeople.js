
// createPeople.js
const Person = require('./models/person');

const createManyPeople = (arrayOfPeople) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    console.log('People created:', people);
  });
};

const arrayOfPeople = [
  { nom: 'Paul', âge: 35, favoriteFoods: ['Sushi'] },
  { nom: 'Amadou', âge: 25, favoriteFoods: ['Burger'] },
  { nom: 'Yankoba', âge: 20, favoriteFoods: ['Salad'] }
];

createManyPeople(arrayOfPeople);
