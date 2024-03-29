const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");

const App = express();

// ### Settings
App.set("port", process.env.PORT || 8080);
App.disable("x-powered-by");

// Middlewares
App.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? process.env.VITE_SOCKET_URL : "*",
    optionsSuccessStatus: 200,
  })
);
App.use(helmet());
App.use(compression());
App.use(morgan("dev"));
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

// ### Statics
App.use(express.static(process.cwd() + "/public/"));

// ### Router
App.get("*", (_req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

module.exports = {
  App,
};
