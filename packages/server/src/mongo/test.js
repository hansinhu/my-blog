const User = require("./models/userModel");

const addUser = async ({ username, email }) => {
  const newUser = new User({ username, email, password: "123456" });

  try {
    const savedUser = await newUser.save();
    console.log("User registered successfully", savedUser);
  } catch (error) {
    console.log("User registered failed");
  }
};

const findUser = async (username) => {
  const user = await User.findOne({ username });
  console.log(user);
};
