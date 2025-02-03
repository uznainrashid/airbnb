// Core Module
const path = require("path");
// External Module
const express = require("express");
// Local module and exports
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/Pathjoin");
const storeController = require("./controller/storeController");
const { Error } = require("./controller/Errorhandle");

const app = express();

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);



// Ejs Connect
app.set("view engine", "ejs");
app.set("views", "views");

// Public Folder handle
app.use(express.static(path.join(rootDir, "public")));

// Page Error and order is important
app.use(Error);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
