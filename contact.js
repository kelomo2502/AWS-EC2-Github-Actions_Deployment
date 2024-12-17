const express = require("express");

const contact = express();

contact.get("/contact", (req, res) => {
  res.status(200).json({ message: "feel free to contact us" });
});

module.exports = contact;
