const redisClient = require('../config/redisClient');

const cacheService = {
    async getCache(key) {
        try {
            const data = await redisClient.get(key);
            return data ? JSON.parse(data) : null;
        } catch (err) {
            console.error('Error retrieving from cache', err);
            throw err;
        }
    },

    async setCache(key, value, expiration = 3600) {
        try {
            await redisClient.set(key, JSON.stringify(value), 'EX', expiration);
        } catch (err) {
            console.error('Error setting cache', err);
            throw err;
        }
    }
};

module.exports = cacheService;