const Logger = require("js-logger");
const mongoose = require("mongoose");

const ConnectDatabase = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL_CONNECTION, {});
        Logger.info(`Conexão com sucesso da base do Mongo`)
    } catch (error) {
        Logger.error(`ERROR de conexão ${err}`)
        process.exit(1);
    }
}

module.exports = ConnectDatabase;
