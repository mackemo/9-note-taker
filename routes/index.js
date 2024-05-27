const router = require('express').Router();

// importing the router
const notesRouter = require('./notes');

// using the router
router.use('/notes', notesRouter);

module.exports = router;