const exp = require("express");
const { success, error } = require("consola");
const cors = require("cors");
// const bodyParser = require('body-parser')
require("dotenv").config();

const app = exp();
const PORT = process.env.PORT || 5000;

// Database connection
const db = require("./config/db");

// Middlewares
app.use(cors());
app.use(exp.json());
app.use(exp.urlencoded({ extended: false }));

// Router

app.use("/", require("./routes/"));

app.listen(PORT, (err) => {
  if (err) error({ message: `Error ${err}`, badge: true });
  success({ message: `Server started on port ${PORT}`, badge: true });
});
