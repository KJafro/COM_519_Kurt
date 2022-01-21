const Entries = require("../models/Entries");
const Country = require("../models/Country");
const Profiles = require("../models/Profiles");
const Bodyfat = require("../models/Bodyfat");
const bodyParser = require("body-parser");
const { findById } = require("../models/Country");


exports.list = async (req, res) => {
  const perPage = 10;
  const limit = parseInt(req.query.limit) || 10; // Make sure to parse the limit to number
  const page = parseInt(req.query.page) || 1;
  const message = req.query.message;


  try {
    const entries = await Entries.find({}).skip((perPage * page) - perPage).limit(limit);
    const count = await Entries.find({}).count();
    const numberOfPages = Math.ceil(count / perPage);

    res.render("entries", {
      entries: entries,
      numberOfPages: numberOfPages,
      currentPage: page,
      message: message
    });
  } catch (e) {
    res.status(404).send({ message: "could not list entries" });
  }
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  try {
    const countries = await Country.find({});
    const profiles = await Profiles.find({});
    const bodyfat = await Bodyfat.find({});
    const entries = await Entries.findById(id);
    if (!entries) throw Error('cant find tasting');
    res.render('update-tasting', {
      bodyfat: bodyfat,
      entries: entries,
      countries: countries,
      profiles: profiles,
      id: id,
      errors: {}
    });
  } catch (e) {
    console.log(e)
    if (e.errors) {
      res.render('create-entries', { errors: e.errors })
      return;
    }
    res.status(404).send({
      message: `could find profiles ${id}`,
    });
  }
};

exports.create = async (req, res) => {
  try {

    const profiles = await Profiles.findById(req.body.profiles_id);
    await Entries.create({
      name: req.body.name,
      gender: req.body.gender,
      title: req.body.title,
      profile_name: profiles.name,
      profiles_bmi_handle: profiles.bmi_handle,
      height: parseInt(req.body.height),
      weight: parseInt(req.body.weight),
      bmi: parseInt(req.body.bmi),
      bodyfat: parseInt(req.body.bodyfat),
    })
    console.log("Saving");

    return res.redirect('/?message=Entry has been added!');
    

  
    
  } catch (e) {
    if (e.errors) {
      res.render('create-entries', { errors: e.errors })
      return;
    }
    return res.status(400).send({
      message: JSON.parse(e),
    });
  }
}

exports.createView = async (req, res) => {
  try {
    const countries = await Country.find({});
    const profiles = await Profiles.find({});
    const bodyfat = await Bodyfat.find({});
    res.render("create-entries", {
      countries: countries,
      profiles: profiles,
      bodyfat: bodyfat,
      errors: {}
    });

  } catch (e) {
    res.status(404).send({
      message: `could not generate create data`,
    });
  }
}

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Entries.findByIdAndRemove(id);
    res.redirect("/entries");
  } catch (e) {
    res.status(404).send({
      message: `could not delete  record ${id}.`,
    });
  }
};

