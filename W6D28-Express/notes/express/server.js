const express = require("express");
const app = express();
const userRouter = require("./routes/users");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
// app.use(logger);

app.get("/", logger, (req, res) => {
  // res.status(500).send("hi");
  // res.sendStatus(500);
  // res.send("Hi");

  // res.json({ message: "Error" });

  // send a file to download
  // res.download("server.js");

  res.render("index", {
    text: "World",
  });
});

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
