const education = require("../data/education.json");

export default function handler(req, res) {
  res.status(200).json(education);
}
