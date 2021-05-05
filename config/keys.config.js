if (app.settings.env === ("production")) {
    const onlineDb = process.env.MONGO_ONLINE;
} else {
    const localDb = process.env.MONGO_LOCAL;
}

// module.exports = {onlineDb,};