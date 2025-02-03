const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/Pathjoin");


// // Fake DataBase
// const registerHomes = [];
const favouriteFilePath = path.join(rootDir, "Data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getToFavourite((favourite) => {
      if (favourite.includes(homeId)) {
        callback("Home is already favourite");
      } else {
        favourite.push(homeId);
        fs.writeFile(favouriteFilePath, JSON.stringify(favourite), callback);
      }
    });
  }
  static getToFavourite(callback) {
    fs.readFile(favouriteFilePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

};
