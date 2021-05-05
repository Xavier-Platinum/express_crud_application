// Dotenv
require("dotenv").config();
const PORT = process.env.PORT || 7001;

// Node dependencies
    /**
     * @param {* Setting up express}
     */
    const express = require("express");
    const app = express();

const ejs = require("ejs");
const mongoose = require("mongoose");



// Express Server
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});