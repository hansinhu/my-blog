const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hansindatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
  findUser("Hansin");
  // addUser({ username: "Hansin", email: "hansincn@gmail.com" });
});
