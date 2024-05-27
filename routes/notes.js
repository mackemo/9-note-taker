const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


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
    });
});


router.post('/', (req, res) => {
    const { title, text } = req.body;
    if (!title || !text) {
        return res.status(400).json({error: 'Please include both a title and text for the note.'});
    }

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

        try {
            const notes = JSON.parse(data);
    
            const newNote = {
                id: uuidv4(),
                title,
                text
            };
    
            notes.push(newNote);
    
            fs.writeFile('./db/db.json', JSON.stringify(notes, null, '\t'), (err) => {
                if (err) {
                    console.error('Error writing to db.json:', err);
                    return res.status(500).json({error: 'Internal Server Error'});
                }
    
                res.status(201).json(newNote);
            });
    
        } catch (err) {
            console.error('Error parsing db.json:', err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
});


router.delete('/', (req, res) => {
    const noteId = req.params.id;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

        try {
            let notes = JSON.parse(data);
    
            notes = notes.filter(note => note.id !== noteId);
    
            fs.writeFile('./db/db.json', JSON.stringify(notes, null, '\t'), (err) => {
                if (err) {
                    console.error('Error writing to db.json:', err);
                    return res.status(500).json({error: 'Internal Server Error'});
                }
    
                res.status(204);
            });
    
        } catch (err) {
            console.error('Error parsing db.json:', err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
});

module.exports = router;