// Dotenv
require("dotenv").config();
const PORT = process.env.PORT || 7001;

// Node dependencies
    /**
     * @param {* Setting up express}
     */
    const express = require("express");
    const app = express();

const chalk = require("chalk");
const ejs = require("ejs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

// database connection

// configuring morgan
app.use(logger("combined"));

/**
 * @description {* Configuring express}
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));
// connecting static files 
app.use(express.static(path.join(__dirname, "public")));

// setting up templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



// Express Server
app.listen(PORT, () => {
    console.log(chalk.yellow(`\t\tServer is listening at %PORT ${PORT} on %${app.settings.env} mode\n`));
});