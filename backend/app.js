const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/evacuation', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api', require('./routes/data'));
app.use('/api', require('./routes/routes'));
app.use('/api', require('./routes/alerts'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
