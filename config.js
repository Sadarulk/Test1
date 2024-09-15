const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "cy8lCRKY#b_tvohVqu7m3kPrR_a7u_9gjxdAmyKKV8Qq_jwvl9Bc",
MONGODB: process.env.MONGODB || "mongodb://mongo:qXQxdAbpntDdvsSpaIgIeyNVCyRdLZid@autorack.proxy.rlwy.net:22892",
};
