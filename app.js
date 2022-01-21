require("dotenv").config();
const express = require("express");
const path = require("path");
const flash = require("flash");
const mongoose = require("mongoose");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const countriesModel = require("./models/Country");
const bodyfatModel = require("./models/Bodyfat");
const expressSession = require("express-session");
const User = require("./models/User");


//Controllers
const profilesController = require("./controllers/profiles");
const entriesController = require("./controllers/entries");
const homeController = require("./controllers/home");
const userController = require("./controllers/user");

const app = express();
app.set("view engine", "ejs");

//Connect through env
const { PORT, MONGODB_URI } = process.env;

//Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running.",
    chalk.red("✗")
  );
  process.exit();
});

//Middlewear
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressSession({ secret: 'foo barr', cookie: { expires: new Date(253402300000000) } }))


app.use("*", async (req, res, next) => {
  global.user = false;
  if (req.session.userID && !global.user) {
    const user = await User.findById(req.session.userID);
    global.user = user;
  }
  next();
})

const authMiddleware = async (req, res, next) => {
  const user = await User.findById(req.session.userID);
  if (!user) {
    return res.redirect('/');
  }
  next()
}

app.get("/", homeController.list);

app.get("/logout", async (req, res) => {
  req.session.destroy();
  global.user = false;
  res.redirect('/');
})

app.get("/create-profiles", authMiddleware, (req, res) => {
  res.render("create-profiles", { errors: {} });
});

app.post("/create-profiles", profilesController.create);

app.get("/profiles", profilesController.list);
app.get("/profiles/delete/:id", profilesController.delete);
app.get("/profiles/update/:id", profilesController.edit);
app.post("/profiles/update/:id", profilesController.update);


app.get("/create-entries", entriesController.createView);
app.post("/create-entries", entriesController.create);
app.get("/update-tasting/:id", entriesController.edit);

app.get('/about', (req, res) => {
  res.render('about.ejs')
})
app.get("/entries", entriesController.list);
app.get("/entries/delete/:id", entriesController.delete);

app.get("/join", (req, res) => {
  res.render('create-user', { errors: {} })
});

app.post("/join", userController.create);
app.get("/login", (req, res) => {
  res.render('login-user', { errors: {} })
});
app.post("/login", userController.login);

app.get('/search-tastings', (req,res)=> res.render('search-tastings'));


app.listen(PORT, () => {
  console.log(
    `Running on http://localhost:${PORT}`,
    chalk.green("✓")
  );
});
