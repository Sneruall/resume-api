const tools = require("../data/tools.json");

export default function handler(req, res) {
  res.status(200).json(tools);
}
