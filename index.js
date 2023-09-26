const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

app.get("/user", (req, res) => {
  const { firstname, lastname } = req.query;
  res.json({ firstname, lastname });
});

app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
