const Profiles = require("../models/Profiles");

exports.list = async (req, res) => {
  try {
    console.log(req.query)
    const message = req.query.message;
    const profiles = await Profiles.find({});
    res.render("profiles", { profiles: profiles, message: message
     });
  } catch (e) {
    res.status(404).send({ message: "could not list profiles" });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  try {

    await Profiles.findByIdAndRemove(id);
    res.redirect("/profiles");
  } catch (e) {
    res.status(404).send({
      message: `could not delete  record ${id}.`,
    });
  }
};


exports.create = async (req, res) => {

  try {
    const profiles = new Profiles({ name: req.body.name, bmi: req.body.bmi, gender: req.body.gender, conumber: req.body.conumber });
    console.log("Saving");
    await profiles.save();
    console.log("Saved");
    res.redirect('?message=Profile has been added!')
  } catch (e) {
    if (e.errors) {
      console.log(e.errors);
      res.render('create-profiles', { errors: e.errors })
      return;
    }
    return res.status(400).send({
      message: JSON.parse(e),
    });
  }
}

exports.edit = async (req, res) => {
  const id = req.params.id;
  try {
    const profiles = await Profiles.findById(id);
    res.render('update-profiles', { profiles: profiles, id: id });
  } catch (e) {
    res.status(404).send({
      message: `could find profiles ${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const profiles = await Profiles.updateOne({ _id: id }, req.body);
    res.redirect('/profiles/?message=profiles has been updated');
  } catch (e) {
    res.status(404).send({
      message: `could find profiles ${id}.`,
    });
  }
};