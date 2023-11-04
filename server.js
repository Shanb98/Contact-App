const express = require("express");
const connectiondb = require("./config/dbConnection");
const dotenv = require("dotenv"); // Import the 'dotenv' library
const errorHandler = require("./middleware/errorHandler");

// Call the 'config' method to load environment variables from the '.env' file
dotenv.config();

connectiondb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
