require("dotenv").config();

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  EMAIL_FROM: "ant.liubimov@gmail.com",
  BASE_URL: "http://localhost:3000",
};
