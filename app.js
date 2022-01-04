const mongoose = require('mongoose');
// Replace the uri string with your MongoDB deployment's connection string.
const uri = 'mongodb://localhost:27017/fruitsDB';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  rating: Number,
  review: String,
});
const personsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  age: Number,
  favoriteFruit: fruitsSchema,
});

const Person = mongoose.model('Person', personsSchema);

const Fruit = mongoose.model('Fruit', fruitsSchema);

const pineapple = new Fruit({
  name: 'Pineapple',
  rating: 10,
  review: 'Great fruit',
});

pineapple.save();

const person1 = new Person({
  name: 'John Dow',
  age: 25,
  favoriteFruit: pineapple,
});

person1.save();

// const person2 = new Person({
//   name: 'Johnathan Doe',
//   age: 15,
// });

// const person3 = new Person({
//   name: 'Joan Doe',
//   age: 45,
// });

// Person.insertMany([person1, person2, person3]).then(
//   () => {
//     console.log('People saved successfully');
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// Person.deleteOne({ name: 'John Doe' }).then(
//   () => {
//     console.log('Person deleted successfully');
//   },
//   (err) => {
//     console.log(err);
//   }
// );

Person.find()
  .then((persons) => {
    persons.forEach((person) => {
      console.log(person.name);
    });
    // mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });
