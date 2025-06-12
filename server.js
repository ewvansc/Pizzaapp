const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const accountsRoutes = require("./src/accounts/routes");

const app = express();
const port = process.env.PORT || 5004;


app.use(helmet());
app.use(cors()); 
app.use(express.json()); 
app.disable("x-powered-by");


app.get("/", (req, res) => {
  res.send("Welcome to the API! Use /accounts for account-related actions.");
});

app.use("/accounts", accountsRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
