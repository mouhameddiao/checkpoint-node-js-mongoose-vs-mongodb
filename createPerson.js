

// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  âge: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;




// createPerson.js
const Person = require('./models/person');

const createAndSavePerson = () => {
  const newPerson = new Person({
    nom: 'Landing',
    âge: 30,
    favoriteFoods: ['Pizza', 'Pasta']
  });

  newPerson.save((err, data) => {
    if (err) return console.error(err);
    console.log('Person saved:', data);
  });
};

createAndSavePerson();

