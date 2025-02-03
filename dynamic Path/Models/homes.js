const path = require("path");
const fs = require("fs");
const rootDir = require("../utils/Pathjoin");

const HomeFilePath = path.join(rootDir, "Data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, imageUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }
  save() {
    Home.fetchAll((registerHomes) => {
      if (this.id) {
        // edit case
        registerHomes = registerHomes.map((home) =>
          home.id === this.id ? this : home
        );
      } else {
        // addhome case
        this.id = Math.random().toString();
        registerHomes.push(this);
      }

      fs.writeFile(HomeFilePath, JSON.stringify(registerHomes), (err) => {
        console.log("File Write concluding", err);
      });
    });
  }
  static fetchAll(callback) {
    fs.readFile(HomeFilePath, (err, data) => {
      if (err) {
        return callback([]);
      }
      const homes = JSON.parse(data);
      callback(homes);
    });
  }

  static findById(Id, callback) {
    this.fetchAll((homes) => {
      const foundHome = homes.find((home) => home.id === Id);
      // console.log("found", foundHome);
      callback(foundHome);
    });
  }
};
