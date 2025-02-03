// Core Module
const path = require("path");
// External Module
const express = require("express");
// const rootDir = require("../utils/Pathjoin");
const hostController = require("../controller/hostController");

const hostRouter = express.Router();

hostRouter.get("/host-home-list", hostController.getHostHome);
hostRouter.get("/add-home", hostController.getAddhome);
hostRouter.post("/add-home", hostController.postAddhome);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/edit-home", hostController.postEditHome);
hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome)

module.exports = hostRouter;
