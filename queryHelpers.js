// queryHelpers.js
const Person = require('./models/person');

const findPeopleWhoLikeBurritos = () => {
  Person.find({ favoriteFoods: 'burritos' })
    .sort('nom')
    .limit(2)
    .select('-âge')
    .exec((err, people) => {
      if (err) return console.error(err);
      console.log('People who like burritos:', people);
    });
};

findPeopleWhoLikeBurritos();