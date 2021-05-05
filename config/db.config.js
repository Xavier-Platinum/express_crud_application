const mongoose =  require("mongoose");
// const dbUrl = require("./keys.config");

module.exports = (db) => {
    if (app.setting.env === ("development")) {
        mongoose.connect(`${process.env.MONGO_LOCAL}`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Local database connected and in use");
        })
        .catch((err) => {
            console.log(err);
        })
    } else {
        mongoose.connect(`${process.env.MONGO_ONLINE}`, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Online database connected and in use");
        })
        .catch((err) => {
            console.log(err);
        })
    }
}