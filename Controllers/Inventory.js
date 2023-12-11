const User = require('../models/InventorySchema');

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
        const {propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes } = req.body;
        const newuser = new User({
            propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes
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
        const {propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes} = req.body;
        console.log(propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notesr)
        const updatedProduct = await User.findByIdAndUpdate(
            req.params.Userid,
            {propertyname, propertyInventoryType, otherPropertyInventoryType, capacity, amenities, availabilityStatus, notes },
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
