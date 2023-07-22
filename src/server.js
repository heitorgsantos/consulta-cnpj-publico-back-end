require("dotenv").config();
const cors = require("cors");
const express = require("express");
const session = require("express-session");
const router  = require("./routes/router");
// const { router } = require("./routes/router");

const port = process.env.PORT || 8080;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// app.use(
//   session({
//     secret: Math.random().toString(36).substring(2),
//     resave: false,
//     saveUninitialized: true,
//   })
// );

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
