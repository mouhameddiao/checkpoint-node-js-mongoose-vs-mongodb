// findPersonById.js
const Person = require('./models/person');

const findPersonById = (personId) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.error(err);
    console.log('Person found:', person);
  });
};

findPersonById('60c72b2f9b1e8c0a5c9b4dff');


// removePersonById.js
const Person = require('./models/person');

const removePersonById = (personId) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return console.error(err);
    console.log('Removed person:', removedPerson);
  });
};

removePersonById('60c72b2f9b1e8c0a5c9b4dff');
