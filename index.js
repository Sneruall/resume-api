export default function handler(req, res) {
  res.status(200).json({
    message: "Welcome to Laurens van Roomen's Resume API!",
    description:
      "This API provides information about Laurens' professional experiences, tools, education, side projects, internships and recommmendations.",
    endpoints: [
      {
        path: "/api/experiences",
        description: "Get a list of Laurens' professional experiences",
      },
      {
        path: "/api/tools",
        description:
          "Get a list of tools and technologies Laurens has experience with",
      },
      {
        path: "/api/education",
        description: "Get details about Laurens' educational background",
      },
      {
        path: "/api/side-projects",
        description: "Get information about Laurens' side projects",
      },
      {
        path: "/api/internships",
        description: "Get information about Laurens' internships",
      },
      {
        path: "/api/recommendations",
        description: "Get recommendations from Laurens' colleagues and friends",
      },
    ],
  });
}
