// Dotenv
require("dotenv").config();
const PORT = process.env.PORT || 7001;

const mongoose =  require("mongoose");
// const dbUrl = require("./keys.config");

module.exports = (app) => {
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
        
        // Express Server
        app.listen(PORT, () => {
            console.log(chalk.yellow(`\t\tServer is listening at %PORT ${PORT} on %${app.settings.env} mode\n`));
        });
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

        // Express Server
        app.listen(PORT, () => {
            console.log(chalk.yellow(`\t\tServer is listening at %PORT ${PORT} on %${app.settings.env} mode\n`));
        });
    }
}