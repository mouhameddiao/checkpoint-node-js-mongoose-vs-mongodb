// updatePersonAge.js
const Person = require('./models/person');

const updatePersonAge = (personName) => {
  Person.findOneAndUpdate({ nom: personName }, { âge: 20 }, { new: true }, (err, updatedPerson) => {
    if (err) return console.error(err);
    console.log('Updated person:', updatedPerson);
  });
};

updatePersonAge('Alice');
