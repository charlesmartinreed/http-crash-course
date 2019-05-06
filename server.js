const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

// express middleware for body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder setup
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.send("<h1>Hello world, from express</h1>"); //content-type: text/html
  //res.json({ msg: "Hello" }); //content-type: application/json

  //res.send(req.header('host'))
  // res.send(req.header("user-agent"));
  res.send(req.rawHeaders);
});

app.post("/contact", (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  //This would normally be where you handle database stuff
  res.status(201).send("Thank you for your submission");
  // res.send(req.body);
  // res.send(req.header("Content-Type"));
});

app.post("/login", (req, res) => {
  if (!req.header("x-auth-token")) {
    return res.status(400).send("Error: No token.");
  }

  if (req.header("x-auth-token") !== "123456") {
    return res.status(401).send("Not Authorized");
  }

  res.send("Logged in successfully");
});

// example of updating a blog post
app.put("/post/:id", (req, res) => {
  // DATABASE STUFF

  res.json({
    id: req.params.id,
    title: req.body.title
  });
});

app.delete("/post/:id", (req, res) => {
  // DATABASE STUFF

  res.json({
    msg: `Post ${req.params.id} was deleted.`
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
