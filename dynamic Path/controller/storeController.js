const Favourite = require("../Models/favourite");
const Home = require("../Models/homes");

// Home Page Handling
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerHomes) =>
    res.render("store/index", {
      registerHomes: registerHomes,
      pageTitle: "Index airbnb",
      currentPage: "index",
    })
  );
};
exports.homess = (req, res, next) => {
  Home.fetchAll((registerHomes) =>
    res.render("store/home-list", {
      registerHomes: registerHomes,
      pageTitle: "Home page airbnb",
      currentPage: "Home",
    })
  );
};
exports.getBookings = (req, res, next) => {
  Home.fetchAll((registerHomes) =>
    res.render("store/booking", {
      registerHomes: registerHomes,
      pageTitle: "Bookings airbnb",
      currentPage: "Bookings",
    })
  );
};

exports.getFavourite = (req, res, next) => {
  Favourite.getToFavourite((favourite) => {
    Home.fetchAll((registerHomes) => {
      const favouriteHomes = registerHomes.filter((house) =>
        favourite.includes(house.id)
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourite List airbnb",
        currentPage: "Favourite",
      });
    });
  });
};
exports.postAddToFavourite = (req, res, next) => {
  // console.log("Came to Favourite", req.body);

  Favourite.addToFavourite(req.body.id, (err) => {
    if (err) {
      console.log("File while marking error", err);
    }
    res.redirect("/favourite");
  });
};
//
// Home Deatils Page
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home are not found");
      res.redirect("/homes");
    } else {
      res.render("store/homes-details", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  });
};
// delete from favourite
exports.removeToFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);
  Favourite.deltebyId(homeId, (err) => {
    if (err) {
      console.log("File while marking error", err);
    }
    res.redirect("/favourite");
  });
};
