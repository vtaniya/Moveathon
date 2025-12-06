const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    type: String,
    location: String,
    severity: Number,
    description: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Data', dataSchema);
