const User = require('../models/propertySchema');

module.exports.alldata = async function (req, res) {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.create = async function (req, res) {
  try {
    const { propertyType, propertyName, phoneNumber,emailAddress,address,state,city} = req.body;
    const newuser = new User({
        propertyType, propertyName, phoneNumber,emailAddress,address,state,city
    });
    await newuser.save();
    res.status(201).json({ message: "New Property addeed successfully", user: newuser });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.delete = async function (req, res) {
  try {
    const result = await User.deleteOne({ _id: req.params.Userid });
    if (result.deletedCount === 1) {
      res.json({ message: "User is deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.update = async function (req, res) {
  try {
    const { propertyType, propertyName, phoneNumber,emailAddress,address,state,city } = req.body;
    console.log(propertyType, propertyName, phoneNumber)
    const updatedProduct = await User.findByIdAndUpdate(
      req.params.Userid,
      {  propertyType, propertyName, phoneNumber,emailAddress,address,state,city},
      { new: true }
    );

    if (updatedProduct) {
      res.status(200).json({ message: "property updated successfully", user: updatedProduct });
    } else {
      res.status(404).json({ message: "property not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.onedata = async function (req, res) {
  try {
    const onedata = await User.findById(req.params.Userid);
    if (onedata) {
      res.status(200).json(onedata);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
