//seed the admin & put the password in env
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const News = require('../models/News');

const salt = bcrypt.genSaltSync();
const hash = bcrypt.hashSync(process.env.PASSWD, salt);

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const users = [
  {
    username: 'admin',
    email: 'rzeszutek.malgorzata@gmail.com',
    password: hash
  }
];

const newsy = [
  {
    title: 'first',
    tags: ['tag1', 'tag2', 'tag3'],
    content: 'The Oxygen typeface family is created as part of the KDE Project, a libre desktop for the GNU+Linux operating system. The design is optimized for the FreeType font rendering system and works well in all graphical user interfaces, desktops and devices.',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    title: 'second',
    tags: ['tag1', 'tag3'],
    content: 'Lexend is a collection of seven font families intended to improve reading proficiency. As prescription eyeglasses achieve proficiency for persons with short-sightedness, Lexends families were developed using Shaver-Troup Formulations.',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    title: 'third',
    tags: ['tag1', 'tag4'],
    content: 'Lexend is a collection of seven font families intended to improve reading proficiency. As prescription eyeglasses achieve proficiency for persons with short-sightedness, Lexends families were developed using Shaver-Troup Formulations.',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

User.insertMany(users)
  .then(users => {
    console.log('Success! Added ' + users.length + ' administrators to the database');
    //mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
  
  News.insertMany(newsy)
    .then(newsy => {
      console.log('Success! Added ' + newsy.length + ' news articles to the database');
      mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    });