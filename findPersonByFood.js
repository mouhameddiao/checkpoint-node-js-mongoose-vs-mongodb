
// findPersonByFood.js
const Person = require('./models/person');

const findOneByFood = (food) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.error(err);
    console.log('Person found:', person);
  });
};

findOneByFood('Sushi');



