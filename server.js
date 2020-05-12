const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const app = express();
const users = require("./routes/api/users");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Passport Configuration
require("./middleware/passport")(passport);

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(console.log("The database is Connected !!"))
  .catch((err) => console.error(err));

//Use Routes
app.use("/api/users", users);

// Define Port
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
