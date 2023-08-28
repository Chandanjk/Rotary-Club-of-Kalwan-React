const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose.connect(uri, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
