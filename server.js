
import express from "express"

import "dotenv/config"
const PORT = process.env.PORT || 8080;


const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Google Cloud App Engine!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
