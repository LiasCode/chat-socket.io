const express = require("express");
const morgan = require("morgan");
const App = express();

// ### Settings
App.set("port", process.env.PORT || 8080);

// Middlewares
App.use(morgan("dev"));
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

// ### Statics

// ### Router
App.get("/", (_req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = {
  App,
};
