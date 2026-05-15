const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CloudNest Platform App Running on AWS EKS!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
