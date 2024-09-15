const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/botlogo.jpg?raw=true' },
    { key: 'ALIVE_MSG', value: '*_Hello there 👋_*\n\n*_🙌 I am Queen Mathee WhatsApp User Bot_*\n\n\n🧑‍💻 *Owner:* Sadaru\n\n📞 *Owner Number:* +94701814946\n\n📌 *Group Link:* https://chat.whatsapp.com/DTy4uNnbcO6FLkJJ0uIM1y\n\n🔗 *Github:* https://github.com/Sadaru-OFC/QueenMathee\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
