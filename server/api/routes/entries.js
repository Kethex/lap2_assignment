const express = require('express');
const router = express.Router();
const EntryController = require('./entries_controllers');
router.get('/:id', EntryController.show);
router.post('/', EntryController.create);
module.exports = router;
