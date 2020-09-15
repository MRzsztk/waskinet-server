//seed the admin & put the password in env
require('dotenv').config();
const mongoose = require('mongoose');
const Service = require('../models/Service');

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const uslugi = [
{
  category: "internet",
  subcategory: "",
  service: "internet dla firm",
  price: 89,
  unit: "10MB/s"
}
,
{
  category: "telefon",
  subcategory: "",
  service: "utrzymanie numeru",
  price: 10,
  unit: ""
},
{
  category: "telefon",
  subcategory: "",
  service: "połaczenia w UE",
  price: 0.1,
  unit: "min"
}
]

  Service.insertMany(uslugi)
    .then(uslugi => {
      console.log('Success! Added ' + uslugi.length + ' news services to the database');
      mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    });