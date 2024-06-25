// updatePersonFoods.js
const Person = require('./models/person');

const addFoodToFavorites = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    person.favoriteFoods.push('hamburger');
    person.save((err, updatedPerson) => {
      if (err) return console.error(err);
      console.log('Updated person:', updatedPerson);
    });
  });
};

addFoodToFavorites('60c72b2f9b1e8c0a5c9b4dff');
