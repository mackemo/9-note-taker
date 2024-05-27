const express = require('express');
const path = require('path');

// importing all routes
const api = require('./routes/index');

// labeled port
const PORT = process.env.PORT || 3001;

// creates instance of route
const app = express();

// converting data format
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// serving public files
app.use(express.static('public'));
// using api as all routes
app.use('/api', api);

// send index.html and notes.html files when there is get request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// notifies us that server is listening on port
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});