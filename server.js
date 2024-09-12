require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

const contactRoute = require("./routes/contactRoute");

app.use(cors());
app.use(express.json());
app.use("/api", contactRoute);

app.listen(PORT, "192.168.1.7", () => {
  console.log(`Listening to PORT: ${PORT}`);
});
