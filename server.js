const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Response returned from nodejs server' });
});

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Node server running on port ${PORT}`);
    }
});
