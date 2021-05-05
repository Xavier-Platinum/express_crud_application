if (app.settings.env === ("production")) {
    module.exports = {
        mongoUri: process.env.MONGO_ONLINE,
    }
} else {
    module.exports = {
        mongoUri: process.env.MONGO_LOCAL,
    }
}