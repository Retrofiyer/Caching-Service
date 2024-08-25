const express = require('express');
const bodyParser = require('body-parser');
const cacheController = require('./controller/cacheController');

const app = express();
app.use(bodyParser.json());

app.post('/cache', cacheController.cacheResult);
app.post('/get-cache', cacheController.getResult);

const PORT = process.env.PORT || 8104;
app.listen(PORT, () => {
    console.log(`Cache service running on port ${PORT}`);
});