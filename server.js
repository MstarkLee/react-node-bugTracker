const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

//API HOME
app.get("/", (req, res) => {
  res.send("API Running");
});

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/bugs", require("./routes/api/bugs"));

//PORT server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
