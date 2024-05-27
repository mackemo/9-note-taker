const router = require('express').Router();
const fs = require('fs');


// all paths for notes router (get, post, delete)
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

        try {
            const notes = JSON.parse(data);
            res.json(notes);
        } catch (err) {
            console.error('Error parsing db.json:', err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })
})


router.post('/', (req, res) => {
    
})


router.delete('/', (req, res) => {
    
})

module.exports = router;