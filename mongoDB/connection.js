const mongoose = require('mongoose');
const url = process.env.URI;
const Blog = require('../models/Blog');
const mongoConnection = () => {
  try {
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('Error while connecting mongoDB');
  }
};
module.exports = mongoConnection;
