const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const postRouter = require("./routes/post.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/posts", postRouter);

const db = process.env.MONGO_URI;

mongoose
  .connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
