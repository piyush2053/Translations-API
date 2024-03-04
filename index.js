const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { translate } = require('@vitalets/google-translate-api');

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen(3000, () => {
    console.log('Server running');
})

app.get("/translate", async  (req, res) => {
    const { text } = await translate(req.body.query, { to: req.body.language });
    res.send(text)
})
