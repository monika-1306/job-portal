require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");
const userDatabase = require("./src/config/user.db");

const app = express();

app.use(express.json());

app.use("/user", userRoutes);
userDatabase.connectDb(process.env.MONGO_URI);

app.listen(port, () => {
  console.log(
    `Server is listening on the port ${port} : http://localhost:${port}`,
  );
});
