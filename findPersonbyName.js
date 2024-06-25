// findPersonByName.js
const Person = require('./models/person');

const findPeopleByName = (name) => {
  Person.find({ nom: name }, (err, people) => {
    if (err) return console.error(err);
    console.log('People found:', people);
  });
};

findPeopleByName('Alice');



// removePeopleByName.js
const Person = require('./models/person');

const removePeopleByName = (name) => {
  Person.remove({ nom: name }, (err, result) => {
    if (err) return console.error(err);
    console.log('People removed:', result);
  });
};

removePeopleByName('Mary');
