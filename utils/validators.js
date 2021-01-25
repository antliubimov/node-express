const { body } = require("express-validator");
const User = require("../models/user");

exports.registerValidators = [
  body("email")
    .isEmail()
    .withMessage("Enter correct email")
    .custom(async (value, { req }) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject("Such email is already busy");
        }
      } catch (e) {
        console.log(e);
      }
    })
    .normalizeEmail(),
  body("password", "A password must have 6 characters")
    .isLength({ min: 6, max: 56 })
    .isAlphanumeric()
    .trim(),
  body("confirm")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must match");
      }
      return true;
    })
    .trim(),
  body("name").isLength({ min: 3 }).withMessage("A name must be at least 3 characters"),
];

exports.courseValidators = [
  body("title").isLength({ min: 3 }).withMessage("Minimum title length is 3 characters"),
  body("price").isNumeric().withMessage("Enter correct price"),
  body("img", "Enter correct image URL").isURL(),
];
