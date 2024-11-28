const recommendations = require("./data/recommendations.json");

export default function handler(req, res) {
  res.status(200).json(recommendations);
}
