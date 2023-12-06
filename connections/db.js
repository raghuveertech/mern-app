const mongoose = require("mongoose");
const connectToDB = () => {
  mongoose
    .connect(
      "mongodb://raghuveer:test1234@ac-kg6l3iw-shard-00-00.d0jrvt3.mongodb.net:27017,ac-kg6l3iw-shard-00-01.d0jrvt3.mongodb.net:27017,ac-kg6l3iw-shard-00-02.d0jrvt3.mongodb.net:27017/ToDo?ssl=true&replicaSet=atlas-a7q88g-shard-0&authSource=admin&retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("DB is Connected");
    });
};

module.exports = connectToDB;
