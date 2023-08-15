const app = require("express")();
const http = require("http").Server(app);
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://litonahmed066:13b3CldYbFufMy4u@cluster1.obbyojt.mongodb.net/College?retryWrites=true&w=majority"
);
const User = require("./models/userModel");
async function insert() {
  await User.create({
    name: "liton",
    email: "litonahmed0666@gmail.com",
  });
}
insert();
http.listen(3000, function () {
  console.log("server is running");
});
