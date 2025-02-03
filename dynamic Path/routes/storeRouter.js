// Core Module
const path = require("path");

// External Module
const express = require("express");

// Local Module
const rootDir = require("../utils/Pathjoin");
// const { registerHomes } = require("./hostRouter");
const storeController = require("../controller/storeController");

const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.homess);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourite", storeController.getFavourite);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.post("/favourite", storeController.postAddToFavourite);
// storeRouter.get("/favourite/:homeId", storeController.removeToFavourite);

module.exports = storeRouter;
