require("dotenv").config();
const express = require("express");
const fileupload = require("express-fileupload");
const connectDB = require("./db/connect");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

const posts_routes = require("./routes/posts");

app.get("./", (req, res) => {
  res.send("This is it");
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(fileupload());
app.use("/api/posts_data", posts_routes);

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(PORT, () => {
      console.log(`Connected to port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
