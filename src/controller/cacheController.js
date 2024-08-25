const cacheService = require('../services/cacheServices');

const cacheController = {
    async cacheResult(req, res) {
        const { key, value, expiration } = req.body;
        try {
            await cacheService.setCache(key, value, expiration);
            res.status(200).send('Cached successfully');
        } catch (err) {
            res.status(500).send('Error caching data');
        }
    },

    async getResult(req, res) {
        const { key } = req.body;
        try {
            const data = await cacheService.getCache(key);
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Cache miss');
            }
        } catch (err) {
            res.status(500).send('Error retrieving data');
        }
    }
};

module.exports = cacheController;