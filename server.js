const express = require("express");
 const cors = require("cors");
 const helmet = require("helmet");  
 const accountsRoutes = require("./src/accounts/routes");
 
 const app = express();
 const port = process.env.PORT || 5004;
 
 
 app.use(helmet());  
 app.disable("x-powered-by");  
 
 
 app.use(express.json());
 app.use(cors({ origin: '*' }));
 
 
 app.get("/", (req, res) => {
     res.send("Welcome to the API! Use /accounts for account-related actions.");
 });
 
 app.use("/accounts", accountsRoutes);
 
 
 app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).json({ message: "Something went wrong!" });
 });
 
 
 app.listen(port, () => console.log(`Server running on port ${port}`));