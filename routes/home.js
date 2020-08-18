const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/validation");

// Load User model
const Contact = require("../models/model");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/", (req, res) => {

  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
    });
    newContact.save();
    res.json({message: "Successfully submitted"});
  }

});

module.exports = router;
