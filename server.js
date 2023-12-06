const express = require("express");
const taskRouter = require("./routes/task");
const connectToDB = require("./connections/db");
const cors = require("cors");

const app = express();

// connect to database
connectToDB();

app.use(express.json({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 5050;

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 5050");
});
