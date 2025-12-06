const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.post('/collect', async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        res.status(201).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/reports', async (req, res) => {
    try {
        const reports = await Data.find();
        res.status(200).send(reports);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
