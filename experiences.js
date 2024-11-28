const experiences = require("./data/experiences.json");

export default function handler(req, res) {
  res.status(200).json(experiences);
}
