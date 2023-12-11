//require the library
const mongoose = require('mongoose');


// here we are using the MongoDB Url (i.e. Mondodb Atlas)
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGOOSELINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Add this option for new versions of Mongoose
    });

    console.log('Connected to Database :: MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

connectToDatabase(); // Call the async function to connect

module.exports = mongoose.connetcion;
