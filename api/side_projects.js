const sideProjects = require("../data/side_projects.json");

export default function handler(req, res) {
  res.status(200).json(sideProjects);
}
