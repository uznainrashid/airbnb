const Home = require("../Models/homes");

// Get request handling
exports.getAddhome = (req, res, next) => {
  res.render("host/edits-home", {
    pageTitle: "Add-home form",
    currentPage: "addHome",
    editing: false,
  });
};
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  // console.log(homeId, editing);
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    // console.log(homeId, editing, home);
    res.render("host/edits-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHome = (req, res) => {
  Home.fetchAll((registerHomes) =>
    res.render("host/host-home-list", {
      registerHomes: registerHomes,
      pageTitle: "Host-home-list",
      currentPage: "Host-list",
    })
  );
};
// Post request Handling
exports.postAddhome = (req, res, next) => {
  const { houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.save();
  res.redirect("/host/host-home-list");
};
// Post edit Home
exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, price, location, rating, imageUrl);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};
