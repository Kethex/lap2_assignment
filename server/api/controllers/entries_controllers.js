const Journal = require('../models/Entry');
const JournalEntry = require('../models/Entry');
const http = require('http');

async function show(req, res) {
  try {
    const entry = await JournalEntry.findById(req.params.id);
    res.status(200).json(entry);
  } catch (err) {
    res.status(404).send({ err });
  }
}

async function create(req, res) {
  try {
    const allEntry = await JournalEntry.create(req.body.title, req.body.pseudonym, req.body.entry);
    // console.log('Line 15 controllers', allEntry);
    const findNewEntryId = await JournalEntry.selectLastRecordId();
    // console.log(findNewEntryId);
    const mostRecentEntry = await JournalEntry.findById(findNewEntryId);

    res.status(302).json(mostRecentEntry);
    // .redirect(`http://localhost:3000/routes/entries/${findNewEntryId}`); COULD NOT GET THIS TO WORK
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { show, create };
