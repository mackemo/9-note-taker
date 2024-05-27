const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// all paths for notes router (get, post, delete)


// get route for reading file with notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

        try {
            // parsing data and returning data in json for user readability
            const notes = JSON.parse(data);
            res.json(notes);
        } catch (err) {
            console.error('Error parsing db.json:', err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
});

// post route for reading file and writing file with new note
router.post('/', (req, res) => {
    // creating variables for title and text of note
    const { title, text } = req.body;
    // if no title or text, error message
    if (!title || !text) {
        return res.status(400).json({error: 'Please include both a title and text for the note.'});
    }

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

        try {
            //  parsing notes and creating object for new notes
            const notes = JSON.parse(data);
    
            const newNote = {
                id: uuidv4(),
                title,
                text
            };
            
            // push new notes to original notes
            notes.push(newNote);
    
            fs.writeFile('./db/db.json', JSON.stringify(notes, null, '\t'), (err) => {
                if (err) {
                    console.error('Error writing to db.json:', err);
                    return res.status(500).json({error: 'Internal Server Error'});
                }
                // writing new notes, giving status of successful post
                res.status(201).json(newNote);
            });
    
        } catch (err) {
            console.error('Error parsing db.json:', err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
});

// delete route for reading and writing file with updated notes
router.delete('/:id', (req, res) => {
    // variable for note id to get rid of specific note
    const noteId = req.params.id;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading db.json:', err);
            return res.status(500).json({error: 'Internal Server Error'});
        }

        try {
            // parsing notes
            let notes = JSON.parse(data);
            // filtering out notes that don't match current note id that is being deleted
            notes = notes.filter(note => note.id !== noteId);
    
            fs.writeFile('./db/db.json', JSON.stringify(notes, null, '\t'), (err) => {
                if (err) {
                    console.error('Error writing to db.json:', err);
                    return res.status(500).json({error: 'Internal Server Error'});
                }
                // successfully writing out updated notes
                res.status(204);
            });
    
        } catch (err) {
            console.error('Error parsing db.json:', err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
});

module.exports = router;