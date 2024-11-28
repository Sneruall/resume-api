const internships = require("../data/internships.json");

export default function handler(req, res) {
  res.status(200).json(internships);
}
