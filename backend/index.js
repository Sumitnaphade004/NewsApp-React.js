const connectToMongo = require("./db");
const express = require('express');
const cors = require('cors');
connectToMongo();

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());

// Available Routes
app.use("/newsApp/auth",require("./routes/auth"));



app.listen(port, () => {
  console.log(`newsApp backend listening on port ${port}`);
})